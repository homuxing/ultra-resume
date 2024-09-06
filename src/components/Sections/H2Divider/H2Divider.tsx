import styles from "./H2Divider.module.scss";

export default function H2Divider({ title }: { title: string }) {
  return (
    <h2 className={styles["h2-divider"]}>
      <span className={styles["h2-divider-before"]}></span>
      <span>{title}</span>
      <span className={styles["h2-divider-after"]}></span>
    </h2>
  );
}
