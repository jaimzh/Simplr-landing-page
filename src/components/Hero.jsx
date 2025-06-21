import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import heropic from '../assets/heropic.svg';
import heropicjpg from '../assets/heropic.jpg'; 
import heropicwebp from '../assets/heropic.webp';

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-edge-blur"></div>
      <div className="bg-pattern"></div>
      <section className="py-12 wrapper text-center relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-between text-white w-full">
          {/* image stuff  */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
            className="w-full md:w-[48%] mb-4 md:mb-0 flex-shrink-0 flex justify-center"
          >
            <img src={heropicjpg} alt="Hero" className="w-[80%] md:w-full rounded-3xl h-auto" />
          </motion.div>

          {/* text stuff  */}
          <div className="w-full md:w-[48%] max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.3,
                delay: 0.1,
              }}
            >
              <h1 className="text-4xl font-bold text-[var(--simplr-dark-blue)] mb-8 md:text-left md:text-[38px] lg:text-5xl xl:text-6xl max-w-xl">
                Understand <br />
                Anything
                <span className="text-[var(--simplr-blue)]"> Instantly</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.3,
                delay: 0.2,
              }}
            >
              <p className="text-[var(--simplr-dark-blue)] font-semibold mb-8 text-base text-center md:text-left">
                Get instant definitions and simpler versions of any text. Just
                highlight and press a keyboard shortcut.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.3,
                delay: 0.3,
              }}
            >
              <Button
                text="Install Chrome Extension"
                color="blue"
                shadowColor= "var(--simplr-dark-blue)"
                addShadow={true}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
