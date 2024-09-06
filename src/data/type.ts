export interface ResumeMeta {
  homepage: string;
  updated: string;
  location: string;
  name: string;
  description: string;
  job: string;
}

export interface Information {
  name: string;
  job: string;
  sex: string;
  age: string;
  birthday: string;
  yearsOfExperience: string;
  educationalBackground: string;
  major: string;
  contact: {
    email: string;
    qq: string;
    homePage: string;
    github: string;
    wechatPic: string;
    phone: string;
  };
}

export interface Skill {
  label: string;
  skills: string[];
}

export interface Experience {
  company: string;
  companyLink?: string;
  description: string[];
  projects: Array<ProjectExp>;
}

export interface ProjectExp {
  name: string;
  keywords: string[];
  introduction: string[];
  details: string[];
  highlights?: string[];
  pic?: string;
}

export interface PersonalWorks {
  enable: boolean;
  website: {
    label: string;
    link: string;
  };
  description: string[];
  blog: {
    pic: string;
    address: string;
    description: string;
  };
  articles: {
    title: string;
    link: string;
  }[];
}

export interface EduInfo {
  school: string;
  background: string;
  major: string;
  timeRange: string;
}

export type Summary = {
  icon: string;
  text: string;
};

export interface QRCode {
  alt: string;
  src: string;
}
