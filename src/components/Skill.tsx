import { m } from "framer-motion";
import React from "react";
import Stranger from "./Stranger";
import { skills, Skill } from "@/utils/data/skills";

const Skill = () => {
  const frontendSkills = skills.filter((skill) => skill.type === "frontend");
  const backendSkills = skills.filter((skill) => skill.type === "backend");
  const softSkills = skills.filter((skill) => skill.type === "soft");

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        mass: 0.5,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-36"
      id="skill"
    >
      <Stranger />
      <div className="space-y-5 md:space-y-10">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 py-20">
          <SkillList title="Frontend" skills={frontendSkills} />
          <SkillList title="Backend" skills={backendSkills} />
          <SkillList title="Soft Skills" skills={softSkills} />
        </div>
      </div>
    </m.div>
  );
};

const SkillList = ({ title, skills }: { title: string; skills: Skill[] }) => {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        mass: 0.5,
        damping: 10,
      },
    },
  };

  return (
    <m.div
      variants={listVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.95 }}
      className="rounded-lg shadow p-6 md:p-8 lg:p-2 w-full h-full"
    >
      <h3 className="font-AeroSans text-lg md:text-xl font-bold text-gray-500 dark:text-gray-300 mb-4 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 mt-8">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </m.div>
  );
};

const SkillItem = ({ skill }: { skill: Skill }) => {
  const progress = skill.level * 20; // Level is between 1-5, so we multiply by 20 to get a percentage value

  return (
    <m.div
      className="relative w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div style={{ color: `${skill.color}` }} className="mr-4">
          {skill.icon}
        </div>
        <div className="text-right">
          <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {skill.name}
          </h4>
        </div>
      </div>
      <div className="relative h-2 rounded-full bg-gray-500 overflow-hidden">
        <m.div
          style={{ backgroundColor: `${skill.color}` }}
          className={`absolute top-0 left-0 h-full rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </div>
    </m.div>
  );
};

const headerVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.5,
      delay: 0.5,
    },
  },
};

const Header = () => {
  return (
    <div className="relative text-center">
      <m.h1
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="font-AeroSans text-[#576F72] dark:text-[#CCD6A6] text-3xl lg:text-5xl font-bold tracking-tight"
      >
        capability
      </m.h1>

      <div className="flex justify-between">
        <m.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 h-1 w-20 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full"
        />
        <m.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 h-1 w-20 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full"
        />
      </div>
    </div>
  );
};

export default Skill;
