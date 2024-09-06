import type { Summary } from "@/data/type";
import styles from "./SummarySection.module.scss";
export default function SummarySection({ summary }: { summary: Summary[] }) {
  return (
    <div className="text-base">
      {summary.map((item, index) => (
        <p key={index} className={styles["summary-item"]}>
          <i className={item.icon} style={{ marginRight: "0.5rem" }}></i>
          <span>{item.text}</span>
        </p>
      ))}
    </div>
  );
}
