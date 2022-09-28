import React from "react";
import { skills } from "../../utils/data/skills";
import Stranger from "./Stranger";

const Skill = () => {
  return (
    <div className="space-y-36 pb-40">
      <Stranger />

      <div className="space-y-4">
        <h1 className="font-AeroSans subText text-white uppercase font-extrabold text-xl lg:text-2xl">
          Capability
        </h1>

        <div className="flex space-x-4 justify-center flex-wrap text-lg font-semibold capitalize">
          {skills &&
            skills.map((skill) => (
              <>
                <div className="flex items-center text-white">
                  <span style={{ color: `${skill.color}` }}>{skill.icon}</span>
                  <h3 className="text-white font-Din px-2 py-2 ">
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
