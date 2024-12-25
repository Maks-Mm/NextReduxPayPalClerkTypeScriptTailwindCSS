"use client";

import React from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import AddToCart from "./add-card";
import ProductCard from "@/components/Home/ProductCard";
import { Product } from "@/typing";

interface Props {
  singleProduct: Product;
  relatedProducts: Product[];
}

const ProductDetailsClient: React.FC<Props> = ({ singleProduct, relatedProducts }) => {
  const num = Math.round(singleProduct?.rating?.rate) || 0;
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            width={400}
            height={400}
            alt={singleProduct.title}
          />
        </div>
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((_, index) => (
                <StarIcon key={index} size={20} fill="yellow" className="text-yellow-600" />
              ))}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
            ${singleProduct?.price.toFixed(2)}
          </h1>
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct?.description}
          </p>
          <AddToCart product={singleProduct} />
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto">
        <h1 className="text-2xl text-black font-semibold">Related Products</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
