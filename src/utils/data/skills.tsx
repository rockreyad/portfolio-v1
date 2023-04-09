import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import {
  TbBrandFirebase,
  TbBrandNextjs,
  TbBrandReactNative,
} from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { AiFillHtml5 } from "react-icons/ai";

export type Skill = {
  icon: React.ReactNode;
  name: string;
  color: string;
  type: string;
  level: 1 | 2 | 3 | 4 | 5;
};

export const skills: Skill[] = [
  {
    icon: <FaReact />,
    name: "react",
    color: "#00D8FF",
    type: "frontend",
    level: 4,
  },
  {
    icon: <AiFillHtml5 />,
    name: "html",
    color: "#F76B27",
    type: "frontend",
    level: 4,
  },
  {
    icon: <FaCss3Alt />,
    name: "css",
    color: "#1472BA",
    type: "frontend",
    level: 4,
  },
  {
    icon: <TbBrandReactNative />,
    name: "remix",
    color: "#FF6464",
    type: "frontend",
    level: 3,
  },
  {
    icon: <TbBrandNextjs />,
    name: "nextjs",
    color: "#FFFFFF",
    type: "frontend",
    level: 2,
  },
  {
    icon: <FaNodeJs />,
    name: "nodejs",
    color: "#83CD29",
    type: "backend",
    level: 3,
  },
  {
    icon: <SiPrisma />,
    name: "prisma",
    color: "#1a202c",
    type: "backend",
    level: 4,
  },
  {
    icon: <TbBrandFirebase />,
    name: "Firebase",
    color: "#F4BD62",
    type: "backend",
    level: 3,
  },
  {
    icon: <SiMysql />,
    name: "Mysql",
    color: "#F6600C",
    type: "backend",
    level: 3,
  },
  {
    icon: <IoLogoJavascript />,
    name: "Javascript",
    color: "#F7DF1E",
    type: "backend",
    level: 4,
  },
  {
    icon: <SiTypescript />,
    name: "Typescript",
    color: "#3178C6",
    type: "backend",
    level: 4,
  },
  {
    icon: <SiRedux />,
    name: "redux",
    color: "#3975C6",
    type: "frontend",
    level: 2,
  },
  {
    icon: <FiFigma />,
    name: "Figma",
    color: "#F24E1E",
    type: "soft",
    level: 3,
  },
  {
    icon: <SiMongodb />,
    name: "MongoDb",
    color: "#41A247",
    type: "backend",
    level: 2,
  },
  {
    icon: <SiTailwindcss />,
    name: "TailwindCss",
    color: "#2298BD",
    type: "frontend",
    level: 3,
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "#7950ED",
    type: "soft",
    level: 2,
  },
];
