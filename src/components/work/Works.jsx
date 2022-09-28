import { motion } from "framer-motion";
import React from "react";
import { CgDetailsMore, CgArrowLongRight } from "react-icons/cg";

import { projects } from "../../utils/data/projects";

const Works = () => {
  return (
    <div>
      <div className="pb-40">
        <h1 className="font-AeroSans subText text-white uppercase font-extrabold text-xl lg:text-2xl flex justify-start border-b border-b-gray-600 w-full p-2">
          featured projects
        </h1>

        <div className="text-lg font-semibold capitalize space-y-20 md:space-y-32 lg:space-y-48 pt-10">
          {projects &&
            projects.map((project) => (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7, transition: { duration: 7 } }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  whileTap={{
                    opacity: 1,
                    scale: 0.9,
                    boxShadow: "0px 5px 8px #307",
                  }}
                  className={`flex rounded-md text-white bg-contain bg-center
                    md:h-[350px] lg:h-[450px] hover:shadow-md hover:drop-shadow-2xl hover:shadow-rose-600`}
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    minHeight: "350px",
                  }}
                >
                  <div className="flex flex-col px-4 py-4 backdrop-blur-sm hover:backdrop-blur-none md:backdrop-blur-[3px] justify-between w-full">
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-2xl font-Din font-semibold">
                        {project.name}
                      </h3>

                      <div className="mt-10 space-y-2  text-gray-300">
                        <div className="flex items-center space-x-2">
                          <CgDetailsMore />
                          <p className="font-MarkPro font-medium text-sm">
                            Custom scroll bar & Cursor
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CgDetailsMore />
                          <p className="font-MarkPro font-medium text-sm">
                            Custom scroll bar & Cursor
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CgDetailsMore />
                          <p className="font-MarkPro font-medium text-sm">
                            Custom scroll bar & Cursor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="text-white font-Din border-b-rose-500 border-b-2 flex w-1/3  justify-between items-center hover:shadow-md px-2"
                        type=""
                      >
                        <p className="text-sm">
                          <a href={project.url}>View Code</a>
                        </p>
                        <CgArrowLongRight />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
