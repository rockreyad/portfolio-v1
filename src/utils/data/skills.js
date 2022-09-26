import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandFirebase } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript,SiMongodb, SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export const skills = [
  {
    icon: <FaReact />,
    name: "react",
    color: '',
  },
  {
    icon: <FaNodeJs />,
    name: "Node",
  },
  {
    icon: <TbBrandFirebase />,
    name: "Firebase",
  },
  {
    icon: <IoLogoJavascript/>,
    name: "Javascript",
  },
  {
    icon: <SiTypescript/>,
    name: "typescript",
  },
  {
    icon: <FiFigma/>,
    name: "Figma",
  },
  {
    icon: <SiMongodb/>,
    name: "MongoDb",
  },
  {
    icon: <SiTailwindcss/>,
    name: "Tailwind",
  },
  {
    icon: <FaGitAlt/>,
    name: "Git",
  },
];
