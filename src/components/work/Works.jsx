import { motion } from "framer-motion";
import React from "react";
import { FiCodesandbox } from "react-icons/fi";

import { projects } from "../../utils/data/projects";

const Works = () => {
  return (
    <>
      <div id="work">
        <h1 className="font-AeroSans text-[#576F72] dark:text-[#CCD6A6]  uppercase font-extrabold text-xl lg:text-2xl flex justify-start border-b border-b-gray-600 w-full p-2">
          featured projects
        </h1>

        <div className="grid grid-cols-1 gap-8 md:gap-6 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 mt-8">
          {projects &&
            projects.map((project, index) => (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.8,
                    transition: { duration: 5 },
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.1,
                  }}
                  whileTap={{
                    opacity: 1,
                    scale: 0.9,
                    boxShadow: "0px 5px 8px #307",
                  }}
                  className="h-fit rounded p-1 duration-500 hover:bg-gray-200 dark:hover:bg-[#8080802d] hover:p-2 hover:text-gray-500 text-gray-700 dark:text-gray-100 shadow-md hover:shadow-gray-400 shadow-[#ceba9c] dark:shadow-[#6f6f6f2d]"
                >
                  <img
                    src={project.image}
                    className="h-full md:h-60 xl:h-80 w-full rounded object-cover hover:shadow-2xl"
                    alt=""
                  />
                  <div className="flex flex-col px-2">
                    <div className="flex items-center justify-between gap-4 pt-4 pb-2">
                      <span className="truncate whitespace-pre font-bold">
                        {project.name}
                      </span>
                      <span className="flex items-center gap-2">
                        <a
                          href={project.url}
                          rel="noreferrer"
                          target={"_blank"}
                        >
                          <FiCodesandbox className="hover:text-rose-400" />
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {project.useTool &&
                        project.useTool.split(",").map((item, index) => (
                          <div
                            className="flex items-center gap-2 rounded bg-gray-200 dark:bg-[#8080802d] p-0.5 capitalize"
                            key={index}
                          >
                            <label className="text-xs font-bold" for="">
                              {item}
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Works;
