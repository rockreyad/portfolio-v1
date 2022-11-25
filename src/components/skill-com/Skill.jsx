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

        <div className="md:flex md:justify-between md:items-start md:grid-cols-3 space-y-16 md:space-y-0 md:space-x-14  px-2">
          <div className="space-y-2">
            <h1 className="text-base text-gray-600 font-semibold font-AeroSans  text-center">
              Front-end
            </h1>
            <div className="grid grid-cols-3  justify-items-center gap-2 text-lg font-semibold capitalize">
              {skills &&
                skills
                  .filter((x) => x.skills == 1)
                  .map((skill) => (
                    <>
                      <div className="md:px-6">
                        <div className="grid gap-1 justify-items-center">
                          <span
                            style={{ color: `${skill.color}` }}
                            className="bg-[#8080802d] py-4 px-3 md:py-5 md:px-4 lg:py-6 lg:px-5 rounded-full text-xl md:text-2xl"
                          >
                            {skill.icon}
                          </span>

                          <main className="text-center">
                            <h3 className="text-[#526363] dark:text-gray-400 text-sm  font-Din px-2 py-2 ">
                              {skill.name}
                            </h3>
                            {skill.level && level(skill.level)}
                          </main>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-base text-gray-600 font-semibold font-AeroSans  text-center">
              Back-end
            </h1>
            <div className="grid grid-cols-3  justify-items-center gap-2 text-lg font-semibold capitalize">
              {skills &&
                skills
                  .filter((x) => x.skills == 2)
                  .map((skill) => (
                    <>
                      <div className="md:px-3">
                        <div className="grid gap-1 justify-items-center">
                          <span
                            style={{ color: `${skill.color}` }}
                            className="bg-[#8080802d] py-4 px-3 md:py-5 md:px-4 lg:py-6 lg:px-5 rounded-full text-xl md:text-2xl"
                          >
                            {skill.icon}
                          </span>

                          <main className="text-center">
                            <h3 className="text-[#526363] dark:text-gray-400 text-sm  font-Din px-2 py-2 ">
                              {skill.name}
                            </h3>
                            {skill.level && level(skill.level)}
                          </main>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-base text-gray-600 font-semibold font-AeroSans  text-center">
              Soft-skills
            </h1>
            <div className="grid grid-cols-3  justify-items-center gap-2 text-lg font-semibold capitalize">
              {skills &&
                skills
                  .filter((x) => x.skills == 3)
                  .map((skill) => (
                    <>
                      <div className="md:px-3">
                        <div className="grid gap-1 justify-items-center">
                          <span
                            style={{ color: `${skill.color}` }}
                            className="bg-[#8080802d] py-4 px-3 md:py-5 md:px-4 lg:py-6 lg:px-5 rounded-full text-xl md:text-2xl"
                          >
                            {skill.icon}
                          </span>

                          <main className="text-center">
                            <h3 className="text-[#526363] dark:text-gray-400 text-sm  font-Din px-2 py-2 ">
                              {skill.name}
                            </h3>
                            {skill.level && level(skill.level)}
                          </main>
                        </div>
                      </div>
                    </>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

function level(level) {
  if (level == 1) {
    return (
      <h2 className="text-2xs md:text-xs text-gray-400 dark:text-gray-600">
        Beginner
      </h2>
    );
  } else if (level == 2) {
    return (
      <h2 className="text-2xs md:text-xs text-gray-400 dark:text-gray-600">
        Intermediate
      </h2>
    );
  } else if (level == 3) {
    return (
      <h2 className="text-2xs md:text-xs text-gray-400 dark:text-gray-600">
        Advanced
      </h2>
    );
  } else if (level == 4) {
    return (
      <h2 className="text-2xs md:text-xs text-gray-400 dark:text-gray-600">
        Expert
      </h2>
    );
  }
}
