import type { Experience, ProjectExp } from "@/data/type";
import Image from "next/image";
import styles from "./ExperienceSection.module.scss";
export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section>
      {experiences.map((exp, index) => (
        <div key={index} className={styles["exp-block"]}>
          <h3 className={styles["exp-company"]}>{exp.company}</h3>
          <div className="italic">
            {exp.companyLink && (
              <p>
                网站：
                <a
                  className="underline"
                  href={exp.companyLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  {exp.companyLink}
                </a>
              </p>
            )}
            {exp.description.map((desc, index) => (
              <p key={index} className="whitespace-pre-line">
                {desc}
              </p>
            ))}
          </div>
          {exp.projects.map((project) => (
            <ProjectExpBlock key={project.name} project={project} />
          ))}
        </div>
      ))}
    </section>
  );
}

function ProjectExpBlock({ project }: { project: ProjectExp }) {
  return (
    <div className={styles["project-exp-block"]}>
      <h4 className={styles["project-exp-name"]}>
        <i
          className={
            "fa-solid fa-rocket" + " " + styles["project-exp-name-icon"]
          }
        ></i>
        <span>{project.name}</span>
        <span className={styles["project-exp-name-divider"]}></span>
      </h4>
      {project.pic && (
        <Image
          className={styles["project-exp-pic"]}
          height={150}
          width={150}
          alt="小程序二维码"
          src={project.pic}
        ></Image>
      )}
      <p>
        <span className="font-bold">关键词：</span>
        {project.keywords.join("、")}
      </p>
      <div>
        <p className="font-bold">项目介绍：</p>
        <ul className={styles["project-exp-introduction"]}>
          {project.introduction.map((intro, index) => (
            <li className="list-disc list-inside" key={index}>
              {intro}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-bold">技术点：</p>
        <ul className={styles["project-exp-highlights"]}>
          {project.details.map((item, index) => (
            <li key={index} className="list-circle list-inside">
              {item}
            </li>
          ))}
        </ul>
      </div>
      {project.highlights && project.highlights.length > 0 && (
        <div>
          <p className="font-bold">
            <i className="fa-solid fa-star"></i> 项目难点与成就：
          </p>
          <ul className={styles["project-exp-highlights"]}>
            {project.highlights.map((hl, idx) => (
              <li className="list-disclosure-closed list-inside" key={idx}>
                {hl}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
