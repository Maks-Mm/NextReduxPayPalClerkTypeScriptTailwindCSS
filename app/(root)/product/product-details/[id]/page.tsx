import React from "react";
import ProductDetails from "./ProductDetails";

interface Params {
  id: string;
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params; 
  return <ProductDetails params={resolvedParams} />;
};

export default Page;
