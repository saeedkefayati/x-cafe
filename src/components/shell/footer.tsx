import Link from "next/link";
import type { Route } from "next";
import { Container, Section } from "@/components/primitives/layout";
import styles from "./shell.module.css";

const groups: Array<{ title: string; links: Array<[string, Route]> }> = [
  {
    title: "کشف",
    links: [
      ["منو", "/menu"],
      ["ژورنال", "/journal"],
      ["دربارهٔ ما", "/about"],
    ],
  },
  {
    title: "دیدار",
    links: [
      ["شعبه‌ها", "/locations"],
      ["تماس", "/contact"],
      ["ساعات کاری", "/locations"],
    ],
  },
  {
    title: "راهنما",
    links: [
      ["پرسش‌های رایج", "/faq"],
      ["حریم خصوصی", "/privacy"],
      ["شرایط استفاده", "/terms"],
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Section spacing="compact">
        <Container>
          <div className={styles.footerGrid}>
            <div>
              <strong className="latin">CAFE</strong>
              <p>
                قهوه‌های کلاسیک، نوشیدنی‌های سرد و کیک‌هایی برای یک مکث کوتاه.
              </p>
            </div>
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className={styles.footerTitle}>{group.title}</h2>
                <ul className={styles.footerList}>
                  {group.links.map(([label, href]) => (
                    <li key={`${group.title}-${label}`}>
                      <Link className={styles.footerLink} href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.footerBottom}>
            <span>© ۲۰۲۶ کافه — نام و هویت نهایی در انتظار تأیید</span>
            <span>ساخته‌شده برای انتخابی آرام و روشن.</span>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
