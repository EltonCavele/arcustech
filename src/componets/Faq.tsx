"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    id: "01",
    question: "What services does Catalyst Analytics provide?",
    answer:
      "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: "02",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "Yes. We use a proven discovery framework to align stakeholders, define measurable outcomes, and build roadmaps that keep delivery focused and efficient.",
  },
  {
    id: "03",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "Our teams combine domain expertise with modern data stacks, ensuring that we can plug into existing ecosystems or build a custom solution from the ground up.",
  },
  {
    id: "04",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "We provide end-to-end support — from data engineering and modeling to analytics dashboards and ongoing optimization — so insights stay actionable.",
  },
  {
    id: "05",
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer:
      "We partner for the long term. Engagements include retrospectives and iteration cycles to continuously surface new opportunities for automation and growth.",
  },
];

export const Faq = () => {
  const [activeId, setActiveId] = useState<string>(FAQS[0]?.id ?? "");

  const handleToggle = (id: string) => {
    setActiveId((current) => (current === id ? "" : id));
  };

  return (
    <section className="flex w-full flex-col items-center gap-12 py-20">
      <h2 className="text-center text-4xl font-semibold text-white md:text-5xl">
        Frequently Asked Questions
      </h2>

      <motion.div
        layout
        className="flex w-full max-w-4xl flex-col gap-6"
        transition={{ layout: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } }}
      >
        {FAQS.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <motion.article
              key={item.id}
              layout
              className={`rounded-[2.5rem]  bg-[#080808] transition-colors duration-300 ${
                isOpen ? "bg-[#101010]" : ""
              }`}
              transition={{
                layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
              }}
            >
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className="flex w-full items-center gap-6 px-8 py-7 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-${item.id}`}
              >
                <span
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-gradient-to-b from-white/10 to-white/0 text-lg font-semibold ${
                    isOpen ? "text-primary" : "text-white"
                  }`}
                >
                  {item.id}
                </span>

                <div className="flex-1">
                  <p
                    className={`text-lg md:text-xl ${
                      isOpen ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.question}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-white">
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <X className="h-5 w-5 text-primary" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, rotate: 45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -45 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <Plus className="h-5 w-5 text-white/80" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key="content"
                    id={`faq-${item.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.45, 0, 0.1, 1],
                    }}
                    className="overflow-hidden px-8 pb-8 text-sm leading-7 text-white/70 md:pl-[7.5rem] md:text-base"
                  >
                    <motion.p layout="position">{item.answer}</motion.p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};
