import { ImageResponse } from "next/og";

export const alt = "نشان ایکس کافه؛ نقطهٔ تلاقی طعم و مکث";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#f7f2e8",
        color: "#3b2418",
        padding: "72px 84px",
        fontFamily: "Geist, Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-180px",
          right: "-100px",
          display: "flex",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "#ead8bf",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-170px",
          left: "350px",
          display: "flex",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "#dbe2c8",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "22px",
        }}
      >
        <span
          style={{
            color: "#b66b3d",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.24em",
          }}
        >
          TEHRAN · COFFEE · CAKE
        </span>
        <span
          style={{
            maxWidth: 650,
            fontSize: 108,
            fontWeight: 750,
            letterSpacing: "-0.055em",
            lineHeight: 0.9,
          }}
        >
          X CAFE
        </span>
        <span
          style={{
            maxWidth: 600,
            color: "#725c4c",
            fontSize: 34,
            lineHeight: 1.3,
          }}
        >
          A meeting point for flavor and pause.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          width: "292px",
          height: "292px",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid #3b2418",
          borderRadius: "92px",
          background: "#f0e5d4",
          boxShadow: "0 30px 70px rgba(59, 36, 24, 0.16)",
        }}
      >
        <svg width="210" height="210" viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M14 13 50 51"
            fill="none"
            stroke="#3b2418"
            strokeLinecap="round"
            strokeWidth="8"
          />
          <path
            d="M50 13 14 51"
            fill="none"
            stroke="#b66b3d"
            strokeLinecap="round"
            strokeWidth="8"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="6.5"
            ry="9"
            transform="rotate(-35 32 32)"
            fill="#f7f2e8"
            stroke="#3b2418"
            strokeWidth="1.8"
          />
          <path
            d="M29 24.8c4.6 3.5 5.4 8 5.7 14.3"
            fill="none"
            stroke="#3b2418"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          right: "54px",
          bottom: "42px",
          display: "flex",
          color: "#725c4c",
          fontSize: 18,
          letterSpacing: "0.12em",
        }}
      >
        GHOLHAK · FELESTIN · PASDARAN
      </div>
    </div>,
    size,
  );
}
