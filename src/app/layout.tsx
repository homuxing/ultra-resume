import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/style/global.css";
import "@/style/index.scss";
import styles from "./layout.module.scss";
import { NextUIProvider } from "@nextui-org/react";
import { resumeMeta } from "@/data";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `简历 | ${resumeMeta.name} | ${resumeMeta.job}`,
  description: resumeMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh_cn">
      <body>
        <NextUIProvider>
          <div id="container" className={styles.container}>
            {children}
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
