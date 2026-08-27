"use client";

import { CloseCircle, SearchNormal1 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from "../site.module.css";

export function SearchInput({ query }: { query: string }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(query);

  function clearSearch() {
    setValue("");
    router.replace("/search", { scroll: false });
    inputRef.current?.focus();
  }

  return (
    <div className={styles.searchInput}>
      <SearchNormal1 aria-hidden="true" color="currentColor" size={24} />
      <label className={styles.searchInputLabel} htmlFor="search-query">
        جست‌وجوی منو
      </label>
      <input
        ref={inputRef}
        id="search-query"
        name="q"
        type="text"
        placeholder="مثلاً لاته، شکلات یا چیزکیک"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {value ? (
        <button
          className={styles.searchInputClear}
          type="button"
          aria-label="پاک‌کردن جست‌وجو"
          onClick={clearSearch}
        >
          <CloseCircle aria-hidden="true" color="currentColor" size={22} />
        </button>
      ) : null}
    </div>
  );
}
