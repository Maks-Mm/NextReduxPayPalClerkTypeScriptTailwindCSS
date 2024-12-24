import React from "react";
import ProductDetails from "./ProductDetails"; // Importiere die Komponente

interface Params {
  id: string;
}

const Page = async ({ params }: { params: Params }) => {
  return <ProductDetails params={params} />;
};

export default Page;
