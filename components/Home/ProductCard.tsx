"use client";

import { Product } from "@/typing";
import { Link, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { RiHeartAddLine } from "react-icons/ri";
import { TbShoppingBagPlus } from "react-icons/tb";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  console.log("Product Data:", product); // Logge das gesamte Produktobjekt
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

  return (
    <div className="p-4">
      {/*Image */}
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%]"
        />
      </div>
      {/*Category */}
      <p className="mt-5 text-xs capitalize text-gray-600">
        {product.category}
      </p>
      {/*Title */}
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-blue-900 translate-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold">
          {product.title}
        </h1>
      </Link>
      {/*Rating */}
      <div className="flex items-center">
        {ratingArray.map((star) => {
          return (
            <StarIcon
              key={Math.random() * 1000}
              size={16}
              fill="gold"
              className="text-yellow-700"
            />
          );
        })}
      </div>
      {/*Pricing */}
      <div className="flex mt-2 items-center space-x-2">
        <p className="text-black text-base line-through font-semibold opacity-50">{`${(
          product.price + 10
        ).toFixed(2)}`}</p>
        <p className="text-black font-bold  text-lg opacity-70">
          ${product.price}
        </p>
      </div>
      {/*Buttons */}
      <div className="mt-4 flex items-center space-x-2">
        <Button size={"icon"}>
          <TbShoppingBagPlus size={18} />
        </Button>
        <Button size={"icon"} className="bg-red-500">
          <RiHeartAddLine size={18} />
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
