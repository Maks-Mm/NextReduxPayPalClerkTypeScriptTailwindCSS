import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">
      {/*Define grid */}
      <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/*Content */}

        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-bold uppercase">
            mage sale<span className="text-rose-600">Special</span> Offer up to
            <span className="text-orange-500">60%</span> off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray text-opacity-70 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            officia harum porro iste alias illo odit, recusandae, quaerat at
            expedita voluptatibus sint molestias! Temporibus numquam dicta
            expedita vel culpa nobis.
          </p>

          <div className="flex mt-6 items-center space-x-4">
            <Button size={"lg"} className="bg-blue-700">
              Shopp Now
            </Button>
            <Button size={"lg"} className="bg-gray-700">
              Explor More
            </Button>
          </div>
        </div>
        {/*Image content */}
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
