"use client";

import { Product } from "@/typing";
import { Link } from "lucide-react";
import Image from "next/image";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  console.log("Product Data:", product); // Logge das gesamte Produktobjekt
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%]"
        />
      </div>
        <p className="mt-5 text-xs capitalize text-gray-600">
          {product.category}
        </p>
        <Link href={`/product/product-details/${product.id}`}>
         <h1 className="text-lg cursor-pointer hover:text-blue-900 translate-all hover:underline">{product.title}</h1>
        </Link>
    </div>
  );
}

export default ProductCard;
