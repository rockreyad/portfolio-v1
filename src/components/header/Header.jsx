import React from "react";
import Toggle from "../toggle/Toggle";

const Header = () => {
  return (
    <>
      <header class="sticky top-10 z-30 px-6 py-4  md:px-4">
        <div class="flex items-center justify-between mx-auto max-w-3xl bg-slate-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 p-3">
          <span class="text-base font-Din font-extrabold text-gray-300">
            Mahamud Hasan
          </span>

          <div class="flex items-center space-x-1">
            <ul class="hidden space-x-2 md:inline-flex">
              <li>
                <a
                  href="https://narc.dev"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://narc.dev"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="https://narc.dev"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://narc.dev"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div class="inline-flex md:hidden">
              <button class="flex-none px-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <span class="sr-only">Open Menu</span>
              </button>
              <div className="w-fit">
                <Toggle />
              </div>
            </div>
            <div class="hidden md:block">
              <div className="w-fit">
                <Toggle />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
