"use client";
import pangu from "pangu";
import styles from "./page.module.scss";
import {
  resumeMeta,
  information,
  skills,
  experiences,
  personalWorks,
  eduInfo,
  summary,
  qrCodes,
  showWorks,
  showQRCode,
} from "@/data";
import {
  InfoSection,
  SummarySection,
  ExperienceSection,
  SkillSection,
  EduSection,
  H2Divider,
  PersonalWorksSection,
} from "@/components/Sections";
import PDFDownload from "@/components/PDFDownload";
import ScreenShotLink from "@/components/ScreenShotLink";
import { useEffect } from "react";
import QRCode from "@/components/QRCode";

export default function Home() {
  useEffect(() => {
    pangu.spacingPage();
  });
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <p className={styles["home-page"]}>
          我的主页：
          <a href={resumeMeta.homepage} target="_blank">
            {resumeMeta.homepage}
          </a>
        </p>
        <p className={styles["update-time"]}>
          最后更新时间：{resumeMeta.updated}
        </p>
      </header>
      <main className={styles.resume}>
        <InfoSection info={information} />
        <H2Divider title="专业技能" />
        <SkillSection skills={skills} />
        <H2Divider title="工作经历" />
        <ExperienceSection experiences={experiences} />
        {personalWorks.enable && <H2Divider title="个人作品" />}
        {personalWorks.enable && <PersonalWorksSection works={personalWorks} />}
        <H2Divider title="教育经历" />
        <EduSection eduInfo={eduInfo} />
        <H2Divider title="自我评价与致谢" />
        <SummarySection summary={summary} />
      </main>
      {showQRCode && <QRCode qrCodes={qrCodes} />}
      {showWorks && <ScreenShotLink text="作品截图" link="/works" />}
      <PDFDownload path="/简历 _ 梦比优斯奥特曼 _ 奥特战士.pdf" />
      <footer className={styles.footer}>
        <a href={resumeMeta.location}>{resumeMeta.location}</a>
      </footer>
    </div>
  );
}
