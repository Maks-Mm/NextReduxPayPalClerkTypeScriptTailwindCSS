import { getAllCategory } from "@/Request/requests";
import React from "react";

const Category = async () => {
  const categories: string[] = await getAllCategory();
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center mt-7 font-bold text-2xl capitalize text-black"></h1>
      {/* */}
      <div className="mt-20 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category) => {
          return (
            <div
              className="p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md text-black"
              key={category}
            >
              <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">
                {category}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
