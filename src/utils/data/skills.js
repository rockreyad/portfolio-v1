import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandFirebase } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export const skills = [
  {
    icon: <FaReact />,
    name: "react",
    color: "#00D8FF",
  },
  {
    icon: <FaNodeJs />,
    name: "Node",
    color: "#83CD29",
  },
  {
    icon: <TbBrandFirebase />,
    name: "Firebase",
    color: "#F4BD62",
  },
  {
    icon: <IoLogoJavascript />,
    name: "Javascript",
    color: "#F7DF1E",
  },
  {
    icon: <SiTypescript />,
    name: "typescript",
    color: "#3178C6",
  },
  {
    icon: <FiFigma />,
    name: "Figma",
    color: "#F24E1E",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDb",
    color: "#41A247",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: "#2298BD",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "#7950ED",
  },
];
