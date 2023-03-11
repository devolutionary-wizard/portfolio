import React from "react";
import Image from "next/image";
import { PASSIONS } from "@/constants/data";

const PassionSection = () => {
  return (
    <section id="passion">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <div>
          <h1 className="text-center font-bold text-4xl">
            Passion
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          <div className="h-3" />
          <p className="text-center">
            Follow your passion, be prepared to work hard and sacrifice, and do
            not let anyone limit your dreams.
          </p>
        </div>
        <div className="h-5" />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row ">
          {PASSIONS.map((passion, index) => {
            return (
              <div
                key={index}
                className="bg-teal-500  w-full md:w-1/3 h-72 md:h-96 rounded-md flex-col px-5 py-5 ">
                <div className="mx-auto w-28 h-28 bg-white rounded-full">
                  <div className="h-8" />
                  <Image
                    src={passion.src}
                    alt=""
                    width={50}
                    height={50}
                    className="  mx-auto"
                  />
                </div>
                <div className="h-5" />
                <h1 className="text-neutral-100 font-semibold text-2xl  text-center">
                  {passion.title}
                </h1>
                <div className="h-5" />
                <p className="text-neutral-100 font-semibold text-center">
                  {passion.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PassionSection;
