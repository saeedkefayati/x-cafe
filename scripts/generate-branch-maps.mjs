import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LOCATIONS_SOURCE = resolve(ROOT, "src/data/locations.ts");
const OUTPUT_DIRECTORY = resolve(ROOT, "public/images/locations");
const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];
const MAP_RADIUS_METERS = 450;
const MAP_WIDTH = 1200;
const MAP_HEIGHT = 800;

const palettes = {
  light: {
    background: "#f3eee4",
    surface: "#ebe3d5",
    arterialCasing: "#d4c8b6",
    arterial: "#fffaf1",
    collector: "#ded4c5",
    residential: "#e7dfd3",
    path: "#c9bca9",
    railway: "#b7ab99",
    waterway: "#a8c8c8",
    marker: "#d86e4b",
    markerCore: "#fffaf1",
    label: "#322d27",
    muted: "#776d61",
  },
  dark: {
    background: "#1c1a18",
    surface: "#24211e",
    arterialCasing: "#3a3530",
    arterial: "#514a43",
    collector: "#403a35",
    residential: "#35312d",
    path: "#4d463f",
    railway: "#5c534b",
    waterway: "#35575a",
    marker: "#e58a67",
    markerCore: "#1c1a18",
    label: "#f2ebe2",
    muted: "#aaa096",
  },
};

function readBranchCenters(source) {
  const branchPattern =
    /slug:\s*["']([^"']+)["'][\s\S]*?name:\s*["']([^"']+)["'][\s\S]*?lat:\s*["']([^"']+)["'][\s\S]*?lng:\s*["']([^"']+)["'][\s\S]*?mapVersion:\s*["']([^"']+)["']/g;
  const branches = [...source.matchAll(branchPattern)].map((match) => ({
    slug: match[1],
    name: match[2],
    lat: Number(match[3]),
    lng: Number(match[4]),
    mapVersion: match[5],
  }));

  if (branches.length === 0 || branches.some(({ lat, lng }) => !lat || !lng)) {
    throw new Error(
      "No valid branch coordinates were found in src/data/locations.ts",
    );
  }

  return branches;
}

async function fetchMapGeometry({ lat, lng }) {
  const query = `[out:json][timeout:45];
way(around:${MAP_RADIUS_METERS},${lat},${lng})["highway"];
out tags geom;`;
  let lastError;

  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const url = new URL(endpoint);
      url.searchParams.set("data", query);
      const response = await fetch(url, {
        headers: {
          "User-Agent": "x-cafe-branch-map-generator/1.0",
        },
      });

      if (!response.ok) {
        throw new Error(`${endpoint} returned ${response.status}`);
      }

      const data = await response.json();
      return data.elements.filter(
        (element) => element.type === "way" && element.geometry?.length > 1,
      );
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error("All Overpass endpoints failed", { cause: lastError });
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function projectPoint(point, center) {
  const metersPerLongitude = 111_320 * Math.cos((center.lat * Math.PI) / 180);
  const xMeters = (point.lon - center.lng) * metersPerLongitude;
  const yMeters = (center.lat - point.lat) * 110_540;
  const usableWidth = MAP_WIDTH - 120;
  const usableHeight = MAP_HEIGHT - 120;
  const scale = Math.min(
    usableWidth / (MAP_RADIUS_METERS * 2),
    usableHeight / (MAP_RADIUS_METERS * 2),
  );

  return [MAP_WIDTH / 2 + xMeters * scale, MAP_HEIGHT / 2 + yMeters * scale];
}

function toPath(geometry, center) {
  return geometry
    .map((point, index) => {
      const [x, y] = projectPoint(point, center);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function classifyWay(tags = {}) {
  if (tags.waterway) return "waterway";
  if (tags.railway) return "railway";

  switch (tags.highway) {
    case "motorway":
    case "motorway_link":
    case "trunk":
    case "trunk_link":
    case "primary":
    case "primary_link":
    case "secondary":
    case "secondary_link":
      return "arterial";
    case "tertiary":
    case "tertiary_link":
    case "unclassified":
      return "collector";
    case "residential":
    case "living_street":
    case "service":
      return "residential";
    default:
      return "path";
  }
}

function renderPath(path, classification, palette) {
  if (classification === "arterial") {
    return `<path d="${path}" fill="none" stroke="${palette.arterialCasing}" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/><path d="${path}" fill="none" stroke="${palette.arterial}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>`;
  }

  const styles = {
    collector: [palette.collector, 8],
    residential: [palette.residential, 5],
    path: [palette.path, 2.5],
    railway: [palette.railway, 3],
    waterway: [palette.waterway, 5],
  };
  const [stroke, width] = styles[classification];
  const dash = classification === "railway" ? ' stroke-dasharray="10 8"' : "";
  return `<path d="${path}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${dash}/>`;
}

function renderSvg(branch, ways, theme) {
  const palette = palettes[theme];
  const pathsByClass = ways.reduce(
    (groups, way) => {
      const classification = classifyWay(way.tags);
      groups[classification].push(toPath(way.geometry, branch));
      return groups;
    },
    {
      waterway: [],
      railway: [],
      path: [],
      residential: [],
      collector: [],
      arterial: [],
    },
  );
  const orderedClasses = [
    "waterway",
    "railway",
    "path",
    "residential",
    "collector",
    "arterial",
  ];
  const paths = orderedClasses
    .flatMap((classification) =>
      pathsByClass[classification].map((path) =>
        renderPath(path, classification, palette),
      ),
    )
    .join("");
  const branchName = escapeXml(branch.name);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MAP_WIDTH} ${MAP_HEIGHT}" width="${MAP_WIDTH}" height="${MAP_HEIGHT}" role="img" aria-labelledby="title desc">
  <title id="title">نقشهٔ محلی ${branchName}</title>
  <desc id="desc">نقشهٔ خیابان‌های اطراف شعبه بر اساس داده‌های OpenStreetMap</desc>
  <defs>
    <clipPath id="map-clip"><rect width="${MAP_WIDTH}" height="${MAP_HEIGHT}" rx="38"/></clipPath>
    <filter id="marker-shadow" x="-100%" y="-100%" width="300%" height="300%"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000" flood-opacity=".24"/></filter>
  </defs>
  <g clip-path="url(#map-clip)">
    <rect width="${MAP_WIDTH}" height="${MAP_HEIGHT}" fill="${palette.background}"/>
    <circle cx="90" cy="90" r="220" fill="${palette.surface}" opacity=".68"/>
    <circle cx="1120" cy="720" r="280" fill="${palette.surface}" opacity=".54"/>
    ${paths}
    <g transform="translate(${MAP_WIDTH / 2} ${MAP_HEIGHT / 2 - 7})" filter="url(#marker-shadow)">
      <path d="M0-48C-27-48-48-27-48 0c0 36 48 78 48 78S48 36 48 0C48-27 27-48 0-48Z" fill="${palette.marker}"/>
      <circle cy="0" r="16" fill="${palette.markerCore}"/>
    </g>
    <g transform="translate(52 678)">
      <rect width="344" height="74" rx="24" fill="${palette.background}" opacity=".92"/>
      <text x="24" y="31" fill="${palette.label}" font-family="Arial, sans-serif" font-size="19" font-weight="700">${branchName}</text>
      <text x="24" y="56" fill="${palette.muted}" font-family="Arial, sans-serif" font-size="14">X Cafe · Tehran</text>
    </g>
  </g>
</svg>`;
}

async function main() {
  const source = await readFile(LOCATIONS_SOURCE, "utf8");
  const requestedSlug = process.argv
    .find((argument) => argument.startsWith("--slug="))
    ?.slice("--slug=".length);
  const branches = readBranchCenters(source).filter(
    (branch) => !requestedSlug || branch.slug === requestedSlug,
  );

  if (branches.length === 0) {
    throw new Error(`Unknown branch slug: ${requestedSlug}`);
  }

  await mkdir(OUTPUT_DIRECTORY, { recursive: true });

  for (const branch of branches) {
    const outputPaths = Object.keys(palettes).map((theme) =>
      resolve(
        OUTPUT_DIRECTORY,
        `map-${branch.slug}-${theme}-${branch.mapVersion}.svg`,
      ),
    );

    for (const outputPath of outputPaths) {
      try {
        await access(outputPath);
        throw new Error(
          `${outputPath} already exists. Increment mapVersion in src/data/locations.ts before generating a new approved sibling.`,
        );
      } catch (error) {
        if (error?.code !== "ENOENT") throw error;
      }
    }

    process.stdout.write(`Generating map for ${branch.slug}... `);
    const ways = await fetchMapGeometry(branch);

    for (const theme of Object.keys(palettes)) {
      const filename = `map-${branch.slug}-${theme}-${branch.mapVersion}.svg`;
      await writeFile(
        resolve(OUTPUT_DIRECTORY, filename),
        renderSvg(branch, ways, theme),
        "utf8",
      );
    }

    process.stdout.write(`${ways.length} ways\n`);
  }
}

await main();
