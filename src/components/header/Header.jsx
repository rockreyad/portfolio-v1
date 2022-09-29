import { motion, AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import { classNames } from "../../utils/ClassNames";
import Toggle from "../toggle/Toggle";
import Typical from "react-typical";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const screens = [
  {
    title: "home",
    color: "#ff0055",
  },
  {
    title: "skill",
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
        <div class="flex items-center justify-between mx-auto max-w-3xl bg-[#ceba9c]  dark:bg-slate-800 bg-opacity-60 dark:bg-opacity-60 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm dark:backdrop-blur-md p-3">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24"
              className="w-6 p-1"
              zoomAndPan="magnify"
              viewBox="0 0 375 374.999991"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="daac0a4ce8">
                  <path
                    d="M 53.828125 0 L 326.828125 0 L 326.828125 375 L 53.828125 375 Z M 53.828125 0 "
                    clip-rule="nonzero"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#daac0a4ce8)">
                <path
                  fill="#576F72"
                  d="M 70.890625 261.355469 L 173.265625 261.355469 L 173.265625 357.949219 C 173.265625 358.507812 173.292969 359.0625 173.347656 359.621094 C 173.402344 360.175781 173.484375 360.726562 173.59375 361.273438 C 173.703125 361.820312 173.835938 362.363281 174 362.898438 C 174.164062 363.429688 174.351562 363.957031 174.5625 364.472656 C 174.777344 364.988281 175.015625 365.492188 175.28125 365.984375 C 175.542969 366.476562 175.832031 366.953125 176.140625 367.417969 C 176.453125 367.882812 176.785156 368.332031 177.136719 368.761719 C 177.492188 369.195312 177.867188 369.605469 178.261719 370 C 178.65625 370.398438 179.070312 370.769531 179.503906 371.125 C 179.933594 371.480469 180.382812 371.8125 180.847656 372.121094 C 181.3125 372.433594 181.792969 372.71875 182.285156 372.980469 C 182.777344 373.246094 183.28125 373.484375 183.796875 373.695312 C 184.316406 373.910156 184.839844 374.097656 185.375 374.261719 C 185.910156 374.421875 186.449219 374.558594 187 374.667969 C 187.546875 374.777344 188.097656 374.855469 188.65625 374.910156 C 189.210938 374.964844 189.769531 374.992188 190.328125 374.992188 L 309.765625 374.992188 C 310.324219 374.992188 310.882812 374.964844 311.4375 374.910156 C 311.992188 374.855469 312.546875 374.777344 313.09375 374.667969 C 313.640625 374.558594 314.183594 374.421875 314.71875 374.261719 C 315.253906 374.097656 315.777344 373.910156 316.292969 373.695312 C 316.8125 373.484375 317.316406 373.246094 317.808594 372.980469 C 318.300781 372.71875 318.78125 372.433594 319.246094 372.121094 C 319.710938 371.8125 320.15625 371.480469 320.589844 371.125 C 321.023438 370.769531 321.433594 370.398438 321.832031 370 C 322.226562 369.605469 322.601562 369.195312 322.953125 368.761719 C 323.308594 368.332031 323.640625 367.882812 323.953125 367.417969 C 324.261719 366.953125 324.550781 366.476562 324.8125 365.984375 C 325.078125 365.492188 325.316406 364.988281 325.527344 364.472656 C 325.742188 363.957031 325.929688 363.429688 326.09375 362.898438 C 326.253906 362.363281 326.390625 361.820312 326.5 361.273438 C 326.609375 360.726562 326.691406 360.175781 326.746094 359.621094 C 326.800781 359.0625 326.828125 358.507812 326.828125 357.949219 L 326.828125 130.6875 C 326.828125 130.132812 326.800781 129.574219 326.746094 129.019531 C 326.691406 128.464844 326.609375 127.910156 326.5 127.363281 C 326.390625 126.816406 326.253906 126.277344 326.09375 125.742188 C 325.929688 125.207031 325.742188 124.683594 325.527344 124.167969 C 325.316406 123.652344 325.078125 123.148438 324.8125 122.65625 C 324.550781 122.160156 324.261719 121.683594 323.953125 121.21875 C 323.640625 120.753906 323.308594 120.308594 322.953125 119.875 C 322.601562 119.445312 322.226562 119.03125 321.832031 118.636719 C 321.433594 118.242188 321.023438 117.867188 320.589844 117.511719 C 320.15625 117.160156 319.710938 116.828125 319.246094 116.515625 C 318.78125 116.207031 318.300781 115.921875 317.808594 115.65625 C 317.316406 115.394531 316.8125 115.15625 316.292969 114.941406 C 315.777344 114.726562 315.253906 114.539062 314.71875 114.378906 C 314.183594 114.214844 313.640625 114.082031 313.09375 113.972656 C 312.546875 113.863281 311.992188 113.78125 311.4375 113.726562 C 310.882812 113.671875 310.324219 113.644531 309.765625 113.644531 L 207.390625 113.644531 L 207.390625 17.050781 C 207.390625 16.492188 207.363281 15.9375 207.308594 15.378906 C 207.253906 14.824219 207.171875 14.273438 207.0625 13.726562 C 206.953125 13.179688 206.816406 12.636719 206.65625 12.101562 C 206.492188 11.570312 206.304688 11.042969 206.089844 10.527344 C 205.878906 10.011719 205.640625 9.507812 205.375 9.015625 C 205.113281 8.523438 204.824219 8.046875 204.515625 7.582031 C 204.203125 7.117188 203.871094 6.667969 203.515625 6.238281 C 203.164062 5.804688 202.789062 5.394531 202.394531 5 C 201.996094 4.601562 201.585938 4.230469 201.152344 3.875 C 200.71875 3.519531 200.273438 3.1875 199.808594 2.878906 C 199.34375 2.566406 198.863281 2.28125 198.371094 2.019531 C 197.878906 1.753906 197.375 1.515625 196.855469 1.304688 C 196.339844 1.089844 195.816406 0.902344 195.28125 0.738281 C 194.746094 0.578125 194.203125 0.441406 193.65625 0.332031 C 193.109375 0.222656 192.554688 0.144531 192 0.0898438 C 191.445312 0.0351562 190.886719 0.00390625 190.328125 0.00390625 L 70.890625 0.00390625 C 70.332031 0.00390625 69.773438 0.0351562 69.21875 0.0898438 C 68.660156 0.144531 68.109375 0.222656 67.5625 0.332031 C 67.011719 0.441406 66.472656 0.578125 65.9375 0.738281 C 65.402344 0.902344 64.878906 1.089844 64.359375 1.304688 C 63.84375 1.515625 63.339844 1.753906 62.847656 2.019531 C 62.355469 2.28125 61.875 2.566406 61.410156 2.878906 C 60.945312 3.1875 60.496094 3.519531 60.066406 3.875 C 59.632812 4.230469 59.21875 4.601562 58.824219 5 C 58.429688 5.394531 58.054688 5.804688 57.699219 6.238281 C 57.347656 6.667969 57.015625 7.117188 56.703125 7.582031 C 56.394531 8.046875 56.105469 8.523438 55.84375 9.015625 C 55.578125 9.507812 55.339844 10.011719 55.125 10.527344 C 54.914062 11.042969 54.726562 11.570312 54.5625 12.101562 C 54.398438 12.636719 54.265625 13.179688 54.15625 13.726562 C 54.046875 14.273438 53.964844 14.824219 53.910156 15.378906 C 53.855469 15.9375 53.828125 16.492188 53.828125 17.050781 L 53.828125 244.3125 C 53.828125 244.867188 53.855469 245.425781 53.910156 245.980469 C 53.964844 246.535156 54.046875 247.089844 54.15625 247.636719 C 54.265625 248.183594 54.398438 248.722656 54.5625 249.257812 C 54.726562 249.792969 54.914062 250.316406 55.125 250.832031 C 55.339844 251.347656 55.578125 251.851562 55.84375 252.34375 C 56.105469 252.839844 56.394531 253.316406 56.703125 253.78125 C 57.015625 254.246094 57.347656 254.691406 57.699219 255.125 C 58.054688 255.554688 58.429688 255.96875 58.824219 256.363281 C 59.21875 256.757812 59.632812 257.132812 60.066406 257.488281 C 60.496094 257.839844 60.945312 258.171875 61.410156 258.484375 C 61.875 258.792969 62.355469 259.078125 62.847656 259.34375 C 63.339844 259.605469 63.84375 259.84375 64.359375 260.058594 C 64.878906 260.273438 65.402344 260.460938 65.9375 260.621094 C 66.472656 260.785156 67.011719 260.917969 67.5625 261.027344 C 68.109375 261.136719 68.660156 261.21875 69.21875 261.273438 C 69.773438 261.328125 70.332031 261.355469 70.890625 261.355469 Z M 207.390625 147.734375 L 292.703125 147.734375 L 292.703125 227.265625 L 207.390625 227.265625 Z M 207.390625 261.355469 L 292.703125 261.355469 L 292.703125 340.902344 L 207.390625 340.902344 Z M 87.953125 34.09375 L 173.265625 34.09375 L 173.265625 113.644531 L 87.953125 113.644531 Z M 87.953125 147.734375 L 173.265625 147.734375 L 173.265625 227.265625 L 87.953125 227.265625 Z M 87.953125 147.734375 "
                  fill-opacity="1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            <Typical
              className="text-xs md:text-sm lg:text-base font-Din font-bold text-darkPrimaryColor dark:text-gray-300"
              steps={["Mahamud Hasan", 7000, "", 2500]}
              loop={Infinity}
              wrapper="span"
            />
          </div>
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
                      } px-4 py-2 font-semibold text-darkPrimaryColor dark:text-gray-400 rounded text-xs capitalize`
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
            `bg-[#CFD2CF] dark:bg-primaryColor ${
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
          <AiOutlineCloseCircle
            className="text-red-400 font-extrabold text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          />
          <motion.a
            href="#home"
            style={{
              color: "white",
              marginBottom: "1.6rem",
              fontSize: "1.4rem",
            }}
            onClick={() => setIsOpen(!isOpen)}
            variants={linkVariants}
          >
            Home
          </motion.a>
          <motion.a
            href="#skill"
            style={{
              color: "white",
              marginBottom: "1.6rem",
              fontSize: "1.4rem",
            }}
            onClick={() => setIsOpen(!isOpen)}
            variants={linkVariants}
          >
            Skills
          </motion.a>
          <motion.a
            href="#work"
            style={{
              color: "white",
              marginBottom: "1.6rem",
              fontSize: "1.4rem",
            }}
            onClick={() => setIsOpen(!isOpen)}
            variants={linkVariants}
          >
            Work
          </motion.a>
          <motion.a
            href="#hire"
            style={{
              color: "white",
              marginBottom: "1.6rem",
              fontSize: "1.4rem",
            }}
            onClick={() => setIsOpen(!isOpen)}
            variants={linkVariants}
          >
            Contact
          </motion.a>
        </motion.li>
      </header>
    </>
  );
};

export default Header;
