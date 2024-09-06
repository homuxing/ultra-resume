import type {
  Information,
  Skill,
  Experience,
  EduInfo,
  Summary,
  ResumeMeta,
  PersonalWorks,
  QRCode,
} from "@/data/type";
export * from "@/data/type";
export * from "./works";

export const resumeMeta: ResumeMeta = {
  homepage: "https://tsuburaya-prod.com/",
  updated: "2024.8.31",
  location: "https://github.com/homuxing",
  name: "梦比优斯奥特曼",
  job: "奥特战士",
  description: "梦比优斯的个人简历",
};

export const information: Information = {
  name: "梦比优斯奥特曼",
  job: "奥特战士",
  sex: "Unknown",
  age: "Unknown",
  birthday: "Unknown",
  yearsOfExperience: "18年",
  educationalBackground: "奥特兄弟",
  major: "宇宙警备队",
  contact: {
    email: "mebius@ultraman.com",
    qq: "123-456-7890",
    homePage: "https://tsuburaya-prod.com/",
    github: "https://github.com/homuxing",
    wechatPic: "/mebius_wechat.png",
    phone: "123-456-7890",
  },
};

export const skills: Skill[] = [
  {
    label: "格斗技能",
    skills: ["梦比姆光剑", "流星飞踢", "梦比姆炸弹"],
  },
  {
    label: "光线技能",
    skills: ["梦比姆切割", "梦比姆射线"],
  },
];

export const experiences: Experience[] = [
  {
    company: "GUYS （ 2006年 ~ 至今 ）",
    description: [
      "保护地球免受怪兽和外星威胁的侵害",
      "与其他奥特曼合作，共同应对宇宙中出现的危机",
      "参与多个星际战斗，成功击退了多种强大敌人",
      "在战斗中运用战术，确保团队的安全和任务的成功",
    ],
    projects: [
      {
        name: "流星计划",
        keywords: ["流星技术"],
        introduction: [
          "流星技术也可翻译做超越技术",
          "地球防卫队CREW GUYS所使用的一种王牌武器——通过将曾经造访过地球的外星人残留的先进科技改造而成",
        ],
        details: ["流星技术主要分为飞机类流星技术和微型流星技术"],
        highlights: ["马克奈利姆医疗光束", "凤凰奇迹", "斯派修姆能量放大器"],
        pic: "/mebius.png",
      },
    ],
  },
];

export const personalWorks: PersonalWorks = {
  enable: false,
  website: {
    label: "我的网站",
    link: "https://tsuburaya-prod.com/",
  },
  description: ["奥特曼的官方网站"],
  blog: {
    pic: "/mebius.png",
    address: "https://tsuburaya-prod.com/",
    description: "Hello~",
  },
  articles: [
    {
      title: "前端团队的代码质量建设",
      link: "https://blog.homu.space/posts/968a6851/",
    },
    {
      title: "微信小程序的登录逻辑",
      link: "https://blog.homu.space/posts/b46b5ff0",
    },
    {
      title: "Mapbox 难题解决记录",
      link: "https://blog.homu.space/posts/76e49fb1",
    },
  ],
};

export const eduInfo: EduInfo[] = [
  {
    school: "光之国奥特曼学院",
    background: "队长",
    major: "战斗与防御技术",
    timeRange: "2005年 - 2006年",
  },
];

export const summary: Summary[] = [
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    text: "作为一名来自光之国的宇宙超级英雄，我肩负着保护地球和宇宙和平的重任。我拥有强大的战斗能力、坚韧的意志和坚定的正义感。多年的战斗经验让我在面对强敌时保持冷静与果断，并总能在危急关头找到最佳的解决方案。我相信通过团队合作和持续的努力，我们能够克服一切困难，守护美好的未来。",
  },
];

export const showQRCode: boolean = false;
export const qrCodes: QRCode[] = [
  {
    alt: "微信二维码",
    src: "/mebius_wechat.png",
  },
];
