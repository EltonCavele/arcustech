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
    question: "What services do you provide across SaaS, web, and mobile?",
    answer:
      "We design and deliver  SaaS platforms, high-performance web applications, and polished mobile apps that integrate seamlessly, surface real-time insights, and scale securely.",
  },
  {
    id: "02",
    question: "How do you approach projects to ensure measurable success?",
    answer:
      "We use a collaborative discovery process to align goals, define KPIs, and ship iteratively with CI/CD, analytics, and clear roadmaps for predictable, data-driven outcomes.",
  },
  {
    id: "03",
    question: "What technologies and architectures do you typically use?",
    answer:
      "We build API-first systems with modern stacks, cloud services, and secure architectures—optimized frontends, reliable backends, and integrations that fit existing ecosystems or greenfield builds.",
  },
  {
    id: "04",
    question: "How do you handle security, performance, and scalability?",
    answer:
      "We prioritize code quality, observability, and robust security practices, delivering fast, accessible experiences with autoscaling, caching, and monitoring from day one.",
  },
  {
    id: "05",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer end-to-end support—maintenance, performance tuning, feature iteration, and roadmap updates—ensuring your SaaS, web, and mobile products continue to grow effectively.",
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
        className="flex w-full max-w-4xl flex-col gap-6 max-sm:px-5"
        transition={{ layout: { duration: 0.55, ease: [0.33, 1, 0.68, 1] } }}
      >
        {FAQS.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <motion.article
              key={item.id}
              layout
              className={`rounded-2xl bg-[#080808] transition-colors duration-500 ${
                isOpen ? "bg-[#101010]" : ""
              }`}
              transition={{
                layout: { duration: 0.55, ease: [0.33, 1, 0.68, 1] },
              }}
            >
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className="flex w-full items-center gap-6 px-8 py-4 text-left"
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
                    className={`text-md md:text-xl ${
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
                      duration: 0.45,
                      ease: [0.33, 1, 0.68, 1],
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
