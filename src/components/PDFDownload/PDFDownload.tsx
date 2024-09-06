import styles from "./PDFDownload.module.scss";

export default function PDFDownload({ path }: { path: string }) {
  return (
    <a className={styles["pdf-download"]} target="_blank" href={path}>
      <i className="fa-solid fa-file-pdf"></i>PDF简历
    </a>
  );
}
