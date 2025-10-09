"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const ServicesSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="flex w-full flex-col items-center justify-center"
    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 36 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
          },
        }}
        className="max-w-[20rem] md:max-w-[35rem] text-center text-2xl md:text-4xl text-white"
      >
        Our Ultimate Set of Services for Your Ideas Implementation
      </motion.p>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.35 },
          },
        }}
        className="my-10 flex w-full items-center justify-center max-sm:px-5"
      >
        <div className="grid max-w-6xl gap-10 md:grid-cols-3">
          <Card
            title={"Predictive Analytics"}
            src={"/img/service1.svg"}
            description={
              "Forecast trends and make data-driven decisions with our advanced ML models."
            }
          />

          <Card
            title={"Predictive Analytics"}
            src={"/img/service1.svg"}
            description={
              "Forecast trends and make data-driven decisions with our advanced ML models."
            }
          />

          <Card
            title={"Predictive Analytics"}
            src={"/img/service1.svg"}
            description={
              "Forecast trends and make data-driven decisions with our advanced ML models."
            }
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

const Card = ({
  title,
  src,
  description,
}: {
  title: string;
  src: string;
  description: string;
}) => {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 24 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="flex w-full flex-col items-center gap-10 rounded-4xl bg-[#141414] p-12 text-center text-white"
    >
      <Image
        src={src}
        alt={title}
        className="h-32 md:h-48 w-auto object-contain opacity-80 hover:opacity-100 transition "
        loading="lazy"
        width={200}
        height={200}
      />

      <h1 className="font-semibold text-2xl">{title}</h1>

      <p className="text-sm leading-7">{description}</p>
    </motion.article>
  );
};
