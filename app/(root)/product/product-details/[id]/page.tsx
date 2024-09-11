"use client";

//time 1:44 ohne Components zu Platzieren  localhost:3000/product/product-details/13

import { getProductByCategory, getSingleProduct } from "@/Request/requests";
import React from "react";
import { Product } from "@/typing";
import Image from "next/image";
import { StarIcon } from "lucide-react";
const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const singleProduct: Product = await getSingleProduct(id);

  const relateProduct: Product[] = await getProductByCategory(
    singleProduct.category
  );
  console.log(relateProduct);

  const num = Math.round(singleProduct?.rating?.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      {/*define a grid in system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/*Images */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            width={400}
            height={400}
            alt={singleProduct.title}
          />
        </div>
        {/*Content */}
        <div className="col-span-4">
          {/*Title */}
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>
          {/*Ratings */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((star) => {
                return (
                  <StarIcon
                    key={Math.random() * 5000}
                    size={20}
                    fill="yellow"
                    className="text-yellow-600"
                  />
                );
              })}
            </div>
            <p className="text-base text-gray-700 font-semibold">
             ( {singleProduct?.rating.count}Reviews)
            </p>
          </div>
          {/*Line */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          <h1 className="lg:text-6xl text-3xl md.text-4xl text-blue-950 font-bold">{singleProduct?.price.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};
//localhost den ich brauche http://localhost:3000/product/product-details/2
export default ProductDetails;
