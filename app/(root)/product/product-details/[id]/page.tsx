import React from "react";

interface ProductDetailsProps {
  params: {
    id: string;
  };
}



function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = params;

  return <div>ProductDetails for Product ID: {id}</div>;
}

export default ProductDetails;
