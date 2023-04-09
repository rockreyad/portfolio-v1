"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";
import Works from "@/components/Work";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";

const IndexPage = () => {
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const variants = {
    initial: {
      y: 110,
      opacity: 0,
    },
    animate: {
      y: -110,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <ThemeProvider attribute="class">
        <LazyMotion features={domAnimation}>
          <m.div
            className="w-full bg-[#F0EBE3] dark:bg-primaryColor"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Header />

            <m.div
              className="container px-4 lg:px-16 mx-auto items-center grid"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Intro />

              <m.div
                className="space-y-40"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <m.div variants={itemVariants}>
                  <Skill />
                </m.div>
                <m.div variants={itemVariants}>
                  <Works />
                </m.div>
                <m.div variants={itemVariants}>
                  <Contact />
                </m.div>
              </m.div>
            </m.div>

            <Footer />
          </m.div>
        </LazyMotion>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
