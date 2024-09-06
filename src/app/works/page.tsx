import styles from "./page.module.scss";
import Fancybox from "@/components/Fancybox";
import Image from "next/image";
import { works } from "@/data";

function WorksTitle({ title }: { title: string }) {
  return (
    <h2 className={styles["works-title"]}>
      <i className="fa-solid fa-wand-magic-sparkles"></i>
      <span>{title}</span>
      <i className="fa-solid fa-wand-magic-sparkles"></i>
    </h2>
  );
}

export default function Works() {
  return (
    <div className={styles["main"]}>
      <Fancybox
        options={{
          protect: true,
          Carousel: {
            infinite: false,
          },
        }}
      >
        {works.map((worksItem, index) => (
          <div key={index}>
            <WorksTitle title={worksItem.title} />
            <div className={styles["screenshot-box"]}>
              {worksItem.pictures.map((picture, idx) => (
                <div
                  data-fancybox={worksItem.mark}
                  data-src={picture.picture}
                  data-caption={picture.alt}
                  key={idx}
                  className={styles["screenshot-item-wrapper"]}
                >
                  <div className={styles["screenshot-item"]}>
                    <Image
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                      src={picture.picture}
                      alt={picture.alt}
                    ></Image>
                  </div>
                  <p className={styles["screenshot-item-alt"]}>{picture.alt}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Fancybox>
    </div>
  );
}
