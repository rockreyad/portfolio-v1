import React from "react";
import { skills } from "../../utils/data/skills";
import Stranger from "./Stranger";

const Skill = () => {
  return (
    <div className="space-y-36" id="skill">
      <Stranger />
      <div className="space-y-5 md:space-y-10">
        <h1 className="font-AeroSans text-[#576F72] dark:text-[#CCD6A6]  uppercase font-extrabold text-xl lg:text-2xl flex justify-center items-center">
          Capability
        </h1>

        <div className="flex space-x-4 justify-center flex-wrap text-lg font-semibold capitalize">
          {skills &&
            skills.map((skill) => (
              <>
                <div className="flex items-center">
                  <span style={{ color: `${skill.color}` }}>{skill.icon}</span>
                  <h3 className="text-[#526363] dark:text-white font-Din px-2 py-2 ">
                    {skill.name}
                  </h3>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
