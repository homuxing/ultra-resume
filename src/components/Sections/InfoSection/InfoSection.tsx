import Image from "next/image";
import styles from "./InfoSection.module.scss";
import type { Information } from "@/data/type";

export default function InfoSection({ info }: { info: Information }) {
  return (
    <section>
      <div className={styles["info-block"]}>
        <div className={styles["info-wrapper"]}>
          <p className={styles["title"]}>
            <span className={styles["title-name"]}>{info.name}</span>
            <span className={styles["title-job"]}>{info.job}</span>
          </p>
          <div className={styles["info-list"]}>
            <ul>
              <li>
                {info.sex} | {info.age} | {info.birthday}
              </li>
              <li>
                电话/微信：
                {info.contact.phone}
              </li>
              <li>
                工作年限：
                {info.yearsOfExperience}
              </li>
              <li>
                {info.educationalBackground} | {info.major}
              </li>
            </ul>
            <ul className={styles["info-contact"]}>
              <li>
                <a href="mailto:amurita0521@163.com">{info.contact.email}</a>
                <i className="fa-solid fa-envelope"></i>
              </li>
              <li>
                <a>{info.contact.qq}</a>
                <i className="fa-brands fa-qq"></i>
              </li>
              <li>
                <a
                  title="欢迎来我的博客看看"
                  href={info.contact.homePage}
                  target="_blank"
                >
                  {info.contact.homePage}
                </a>
                <i className="fa-solid fa-house"></i>
              </li>
              <li>
                <a href="https://github.com/homuxing" target="_blank">
                  {info.contact.github}
                </a>
                <i className="fa-brands fa-github"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["pic"]}>
          <Image
            width={184}
            height={184}
            alt="微信二维码"
            src={info.contact.wechatPic}
          />
        </div>
      </div>
    </section>
  );
}
