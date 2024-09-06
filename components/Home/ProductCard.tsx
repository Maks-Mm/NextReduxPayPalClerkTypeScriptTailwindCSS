import React from "react";
import { Product } from "@/typing";
import Image from "next/image";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  console.log('Product Image:', product.image); // Debugging-Ausgabe

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          width={100}
          height={100}
          alt={product.title}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    </div>
  );
}

export default ProductCard;
