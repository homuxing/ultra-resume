interface Screenshot {
  alt: string;
  picture: string;
}

interface Works {
  pictures: Screenshot[];
  mark: string;
  title: string;
}
export const showWorks = false;
export const works: Works[] = [
  {
    title: "标题",
    mark: "Fancybox分组",
    pictures: [
      {
        alt: "图片文字描述",
        picture: "url",
      },
    ],
  },
];
