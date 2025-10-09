"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { services } from "./data";

export const ServicesGrid = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid w-full gap-8 pt-12 sm:gap-10 lg:grid-cols-2"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </motion.div>
  );
};

