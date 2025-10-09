"use client";
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
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        Why Choose Us
      </h2>

      <div className="flex justify-center items-center w-full ">
        <div className="flex flex-wrap justify-center ">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`w-72 h-72 bg-[#141414] border-10 p-10 border-black rounded-full flex flex-col items-center justify-center text-center -ml-10`}
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 px-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
