"use client";
import Image from "next/image";
export const ServicesSection = () => {
  return (
    <section className="flex  w-full flex-col justify-center items-center">
      <p className="text-4xl text-white text-center max-w-[35rem]">
        Our Ultimate Set of Services for Your Ideas Implementation
      </p>

      <div className="flex justify-center items-center w-full my-10 px-2 ">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl ">
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
      </div>
    </section>
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
    <div className="flex flex-col items-center  text-center gap-10 w-full text-white bg-[#141414] p-12 rounded-4xl  ">
      <Image
        src={src}
        alt={title}
        className="h-48 w-auto object-contain opacity-80 hover:opacity-100 transition "
        loading="lazy"
        width={200}
        height={200}
      />

      <h1 className="font-semibold text-2xl">{title}</h1>

      <p className="text-sm leading-7">{description}</p>
    </div>
  );
};
