import { IconType } from "react-icons";

export type IconObjType = {
  icon: IconType;
  text: string;
};

export type ProjectType = {
  mainIcon: IconType;
  createdAt: string;
  title: string;
  description: string;
  imagePath: string;
  projectIcons: IconObjType[];
  code: string;
  liveDemo: string;
};

export type RecommendationType = {
  fullName: string;
  image: string;
  role: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  text: string;
};
