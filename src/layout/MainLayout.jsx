import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Skill from "../components/skill-com/Skill";
import Works from "../components/work/Works";
import Contact from "../components/quotes-contacts/Contacts";

const MainLayout = () => {
  return (
    <motion.div className="w-full">
      <Header />
      <motion.div
        animate={{ y: -110 }}
        transition={{
          delay: 0.5,
          y: { duration: 1 },
          default: { ease: "linear" },
        }}
        className="container px-4 lg:px-16 mx-auto items-center grid"
      >
        <Intro />

        <div className="space-y-40">
          <Skill />
          <Works />
          <Contact />
        </div>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default MainLayout;
