"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/typing";
import { getAllProduct } from "@/Request/requests";

function AllProduct() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(products)

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: Product[] = await getAllProduct();
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return <div className="pt-16 pb-12">
    <h1 className="text-center font-bold text-2xl text-black">All Products</h1>
    {}
  </div>;
}

export default AllProduct;
