"use client";

import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";
import type { FAQ } from "@/types/domain";
import styles from "./faq-list.module.css";

export function FAQList({ items }: { items: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={styles.list}>
      {items.map((item) => {
        const isOpen = item.id === openId;
        const panelId = `faq-panel-${item.id}`;
        return (
          <section className={styles.item} data-open={isOpen} key={item.id}>
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span className={styles.summaryMeta}>
                  <small>{item.category}</small>
                  <ArrowDown2
                    aria-hidden="true"
                    color="currentColor"
                    size={20}
                  />
                </span>
              </button>
            </h2>
            <div className={styles.answer} id={panelId} aria-hidden={!isOpen}>
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
