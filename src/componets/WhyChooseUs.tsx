"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.",
  },
  {
    title: "Collaboration",
    description:
      "Working closely with clients to develop tailored solutions that drive measurable success.",
  },
  {
    title: "Excellence",
    description:
      "Maintaining the highest standards in code quality, system performance, and client outcomes.",
  },
  {
    title: "Integrity",
    description:
      "Operating with transparency and ethical considerations at the forefront of all decisions.",
  },
];

export const WhyChooseUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="bg-black py-20 px-6 text-white"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 32 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="mb-32 md:mb-16 text-center text-3xl font-bold md:text-4xl"
      >
        Why Choose Us
      </motion.h2>

      <div className="flex w-full items-center justify-center">
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, scale: 0.85, y: 32 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    delay: index * 0.1 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="flex h-72 w-72 flex-col items-center justify-center rounded-full border-10 border-black bg-[#141414] p-10 text-center max-sm:-mt-24 md:-ml-28"
            >
              <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
              <p className="px-4 text-sm text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
