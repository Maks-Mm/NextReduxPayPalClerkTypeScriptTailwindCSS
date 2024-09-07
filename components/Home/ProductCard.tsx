"use client";


import { Product } from "@/typing";


type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {

  return (
    <div className="p-4">
     ProductCard
    </div>
  );
}

export default ProductCard;
