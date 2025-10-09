"use client";
import { Button } from "@heroui/react";
import Image from "next/image";

export const HeroComponent = () => {
  return (
    <div className="relative overflow-hidden h-[70vh]">
      <Image
        alt="grid hero details"
        src={"/img/grid.svg"}
        width={500}
        height={500}
        className="scale-125 w-[70rem] max-h-[45rem] absolute top-0 z-10 left-0"
      />
      <div className="flex w-ful z-20 relative ">
        <div className=" flex justify-between items-center w-full mx-auto max-w-7xl px-10">
          <div className=" text-white ">
            <p className=" font-extrabold text-7xl max-w-[55rem] leading-24">
              Transforming Data into{" "}
              <strong className="bg-primary px-4 rounded-2xl">Decisions</strong>
            </p>

            <p className="font-light max-w-[30rem] mt-10">
              Leverage the power of machine learning and AI to unlock insights
              and drive business growth
            </p>

            <Button color="primary" variant="solid" className="mt-5">
              Book a Meeting
            </Button>
          </div>

          <div>
            <Image
              alt="grid hero robot area"
              src={"/img/robot.svg"}
              width={100}
              height={100}
              className="w-[50rem] scale-125  z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
