"use client";

import { motion } from "framer-motion";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudies } from "./data";

export const CaseStudiesGrid = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
          },
        },
      }}
      className="grid w-full gap-8 pt-12 md:grid-cols-2"
    >
      {caseStudies.map((study) => (
        <CaseStudyCard key={study.id} study={study} />
      ))}
    </motion.div>
  );
};

