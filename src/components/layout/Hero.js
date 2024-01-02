import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12 ">
        <h1 className="text-4xl font-semibold">
          Everything<br/> is better<br/> with a&nbsp; 
          <span className="text-primary">Biryani</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Food is the silent language of joy, speaking to our hearts with every
          delicious bite.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary text-white uppercase flex items-center gap-2 px-4 py-2 rounded-full">
            Order now <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">Learn more <Right /></button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/hero-image.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="Biryani image"
        />
      </div>
    </section>
  );
};

export default Hero;