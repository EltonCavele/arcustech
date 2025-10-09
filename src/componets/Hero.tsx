"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const textVariants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
} as any;

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const HeroComponent = () => {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="relative h-full min-h-[50vh] max-sm:mt-20  md:min-h-[70vh] overflow-hidden bg-black text-white"
    >
      <Image
        alt=""
        src="/img/grid.svg"
        width={800}
        height={800}
        priority
        aria-hidden
        className="pointer-events-none absolute left-[30rem] top-[-20%] hidden w-[65rem] -translate-x-1/2 opacity-60 md:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:flex-row md:items-center md:justify-between ">
        <motion.div
          variants={containerVariants}
          className="flex w-full max-w-4xl flex-col gap-8 text-center md:text-left "
        >
          <motion.h1
            variants={textVariants}
            className="text-4xl font-extrabold leading-24 sm:text-5xl md:text-6xl "
          >
            Transforming Data into{" "}
            <span className="rounded-2xl bg-primary/90 px-3 py-1 text-black">
              Decisions
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mx-auto max-w-xl text-base font-light text-white/70 md:mx-0 md:text-lg"
          >
            Leverage the power of machine learning and AI to unlock insights and
            drive business growth.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex justify-center md:justify-start"
          >
            <Button color="primary" variant="solid" className="min-w-[11rem]">
              Book a Meeting
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="hidden md:flex w-full  justify-center md:max-w-md md:justify-end lg:max-w-2xl"
        >
          <Image
            alt="grid hero robot area"
            src={"/img/robot.svg"}
            width={100}
            height={100}
            className="w-[50rem] scale-125  z-10"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
