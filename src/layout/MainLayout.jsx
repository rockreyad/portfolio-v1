import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Skill from "../components/skill/Skill";
import Works from "../components/work/Works";
import Contact from "../components/quotes-contacts/Contacts";
import { motion } from "framer-motion";

const MainLayout = () => {
  return (
    <motion.div className="w-full">
      <Header />
      <motion.div
        animate={{ y: -110 }}
        transition={{
          delay: 0.5,
          y: { duration: 3 },
          default: { ease: "linear" },
        }}
        className="container p-4 mx-auto items-center grid"
      >
        <Intro />
        <Skill />
        <Works />
        <Contact />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default MainLayout;
