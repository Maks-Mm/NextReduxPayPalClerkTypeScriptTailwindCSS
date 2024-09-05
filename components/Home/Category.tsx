import { getAllCategory } from "@/Request/requests";
import React from "react";

export default async function Category() {
  let categories: string[] = [];

  try {
    categories = await getAllCategory();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  if (!Array.isArray(categories)) {
    categories = [];
  }

  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center mt-10 font-bold text-2xl capitalize text-black">
        Shop by Category
      </h1>

      <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category}
            className="p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md"
          >
            <h1 className="text-sm text-black sm:text-base md:text-lg capitalize font-bold">
              {category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
