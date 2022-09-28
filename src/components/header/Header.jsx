import { motion, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import { classNames } from "../../utils/ClassNames";
import Toggle from "../toggle/Toggle";
import Typical from "react-typical";

export const screens = [
  {
    title: "home",
    color: "#ff0055",
  },
  {
    title: "skills",
    color: "#0099ff",
  },
  {
    title: "work",
    color: "#22cc88",
  },
  {
    title: "hire",
    color: "#8353fc",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(0);
  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-80vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
  return (
    <>
      <header
        class={classNames(
          `sticky top-10 z-30 ${!isOpen ? "px-12" : ""} py-4  md:px-4`
        )}
      >
        <div class="flex items-center justify-between mx-auto max-w-3xl bg-[#ceba9c] dark:bg-slate-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-3">
          <Typical
            className="text-base font-Din font-extrabold darkPrimaryColor dark:text-gray-300"
            steps={["Mahamud Hasan", 9000, "", 2000]}
            loop={Infinity}
            wrapper="span"
          />
          {/* <span class="text-base font-Din font-extrabold text-gray-300">
            Mahamud Hasan
          </span> */}

          <div class="flex items-center space-x-1">
            <AnimateSharedLayout>
              <ol
                style={{ transform: "translateZ(0)" }}
                class="hidden space-x-2 md:inline-flex"
              >
                {screens.map(({ title, color }, i) => (
                  <motion.li
                    animate
                    key={i}
                    className={classNames(
                      `title ${
                        i === selected && "selected"
                      } px-4 py-2 font-semibold darkPrimaryColor dark:text-gray-400 rounded text-xs capitalize`
                    )}
                    style={{
                      color: i === selected ? color : "",
                    }}
                    onClick={() => setSelected(i)}
                  >
                    {i === selected && (
                      <motion.div
                        layoutId="underline"
                        className="underline"
                        style={{ backgroundColor: color }}
                      />
                    )}
                    <a href={`#${title}`}>{title}</a>
                  </motion.li>
                ))}
              </ol>
            </AnimateSharedLayout>
            <div class="inline-flex items-center md:hidden">
              <div class="flex-none px-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  variants={iconVariants}
                  animate={isOpen ? "opened" : "closed"}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <span class="sr-only">Open Menu</span>
              </div>
              <div className="w-fit">
                <Toggle />
              </div>
            </div>
            <div class="hidden md:block ">
              <div className="w-fit">
                <Toggle />
              </div>
            </div>
          </div>
        </div>
        <motion.li
          className={classNames(
            `bg-primaryColor ${
              isOpen ? `h-screen` : ``
            } w-full flex items-center justify-center relative py-20`
          )}
          style={{
            position: "fixed",
            top: 0,
            flexDirection: "column",
          }}
          initial={false}
          variants={menuVariants}
          animate={isOpen ? "opened" : "closed"}
        >
          <p
            className="text-white font-extrabold text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </p>
          <motion.a
            style={{
              color: "white",
              marginBottom: "1.6rem",
              fontSize: "1.4rem",
            }}
            variants={linkVariants}
          >
            home
          </motion.a>
          <motion.a
            style={{
              color: "white",
              marginBottom: "1.6rem",
              fontSize: "1.4rem",
            }}
            variants={linkVariants}
          >
            skills
          </motion.a>
          <motion.a
            style={{
              color: "white",
              marginBottom: "1.6rem",
              fontSize: "1.4rem",
            }}
            variants={linkVariants}
          >
            Work
          </motion.a>
        </motion.li>
      </header>
    </>
  );
};

export default Header;
