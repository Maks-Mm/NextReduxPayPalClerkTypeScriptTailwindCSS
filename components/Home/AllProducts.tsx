"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/typing";
import { getAllProduct } from "@/Request/requests";

function AllProducts() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products:Product[]=await getAllProduct()
      } catch (error) {}
    };
  }, []);

  return <div>AllProducts</div>;
}

export default AllProducts;
