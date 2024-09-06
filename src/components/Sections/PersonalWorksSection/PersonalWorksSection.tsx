import type { PersonalWorks } from "@/data";
import styles from "./PersonalWorksSection.module.scss";
import Image from "next/image";
export default function PersonalWorksSection({
  works,
}: {
  works: PersonalWorks;
}) {
  return (
    <div className={styles["personal-works-block"]}>
      <div>
        <h3 className={styles["works-name"]}>个人网站</h3>
        {works.blog?.pic && (
          <div className={styles["works-blog"]}>
            <Image
              className={styles["works-blog-pic"]}
              width={150}
              height={150}
              src={works.blog.pic}
              alt={works.blog.address}
            ></Image>
            <span className={styles["works-blog-alt"]}>
              {works.blog.description}
            </span>
          </div>
        )}
        <p>
          {works.website.label}：
          <a className="underline" href={works.website.link} target="_blank">
            {works.website.link}
          </a>
        </p>
        {works.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div>
        <h3 className={styles["works-name"]}>技术文章</h3>
        {works.articles.map((article, index) => (
          <p key={index}>
            <a
              className={styles["article-title"]}
              href={article.link}
              target="_blank"
              rel="noreferrer"
            >
              《{article.title}》
            </a>
            <a
              href={article.link}
              target="_blank"
              className={styles["article-link"]}
              rel="noreferrer"
            >
              {article.link}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
