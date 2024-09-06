import styles from "./ScreenShotLink.module.scss";
export default function ScreenShotLink({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <a
      className={styles["screen-shot-link"]}
      target="_blank"
      href={link}
      rel="noreferrer"
    >
      {text}
    </a>
  );
}
