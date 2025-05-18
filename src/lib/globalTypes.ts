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
}