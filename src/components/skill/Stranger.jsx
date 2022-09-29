import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

import { ImLinkedin2 } from "react-icons/im";
import { FiGitlab } from "react-icons/fi";
import { CgTwitter } from "react-icons/cg";

const Stranger = () => {
  return (
    <div className="py-10">
      <div className="grid sm grid-cols-1 grid-rows-2 gap-10  md:grid-cols-2 md:grid-rows-1">
        {/* All Social Media */}
        <div className="row-span-1 w-full">
          <div className="flex flex-col items-center justify-center text-gray-300 space-y-4 w-fit">
            <div className="">
              <h1 className="text-[#576F72] dark:text-white uppercase md:text-[0.55rem] text-sm font-semibold font-Din tracking-[.2rem] ">
                dont be a stranger
              </h1>
            </div>
            <div className="flex  justify-start font-bold  font-Din  items-center text-xs md:text-sm space-x-4 md:space-x-5 lg:space-x-6">
              <a
                href="https://github.com/rockreyad"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-start items-center space-x-0.5">
                  <FiGitlab className="text-purple-600  text-sm " />
                  <p className="font-semibold uppercase text-base md:text-sm tracking-[-.05rem] hover:text-[#635666] dark:hover:text-white text-[#576F72] dark:text-gray-100 md:text-gray-400">
                    Gh
                  </p>
                </div>
              </a>
              <a
                href="https://twitter.com/rockreyad"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-start items-center space-x-0.5">
                  <CgTwitter className="text-sky-600  text-sm" />
                  <p className="font-semibold uppercase text-base md:text-sm tracking-[-.05rem] hover:text-[#635666] dark:hover:text-white text-[#576F72] dark:text-gray-100 md:text-gray-400">
                    tw
                  </p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/rockreyad/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-start items-center space-x-0.5">
                  <ImLinkedin2 className="text-blue-600  text-sm" />
                  <p className="font-semibold uppercase text-base md:text-sm tracking-[-.05rem] hover:text-[#635666] dark:hover:text-white text-[#576F72] dark:text-gray-100 md:text-gray-400">
                    ld
                  </p>
                </div>
              </a>
              <a
                href="https://www.instagram.com/rockreyad/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex justify-start items-center space-x-0.5">
                  <AiOutlineInstagram className="text-rose-600  text-sm" />
                  <p className="font-semibold uppercase text-base md:text-sm tracking-[-.05rem] hover:text-[#635666] dark:hover:text-white text-[#576F72] dark:text-gray-100 md:text-gray-400">
                    in
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row-span-1 w-full">
          <div className="text-gray-300 ">
            <div className="flex flex-col items-start md:items-end justify-start md:justify-end text-gray-300 space-y-4">
              <h1 className="text-[#576F72] dark:text-white uppercase md:text-[0.55rem] text-sm font-semibold font-Din tracking-[.2rem]">
                have an idea?
              </h1>
              <h3 className="text-[#576F72] dark:text-white text-3xl md:text-sm font-[900] font-MarkPro hover:text-rose-500">
                <a href="mailto:rockreyad@gmail.com">Tell me about it</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stranger;
