import { getProductByCategory, getSingleProduct } from "@/Request/requests";
import React from "react";
import { Product } from "@/typing";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import AddToCart from "./add-card";
import ProductCard from "@/components/Home/ProductCard";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params; // Destructuring für mehr Klarheit

  let singleProduct: Product;
  let relateProduct: Product[] = [];

  // Datenabruf mit Fehlerbehandlung
  try {
    singleProduct = await getSingleProduct(id);
    relateProduct = await getProductByCategory(singleProduct.category);
  } catch (error) {
    console.error("Error fetching product details:", error);
    // Hier kannst du eine Fehlermeldung oder einen Ladezustand zurückgeben, falls gewünscht
    return <div>Error fetching product details</div>;
  }

  const num = Math.round(singleProduct?.rating?.rate);
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/*Images */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            width={400}
            height={400}
            alt={singleProduct.title}
          />
        </div>
        {/*Content */}
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>
          {/*Ratings */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((_, index) => (
                <StarIcon
                  key={index} // Verwende index als Schlüssel
                  size={20}
                  fill="yellow"
                  className="text-yellow-600"
                />
              ))}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          {/*Line */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          {/*Prices */}
          <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
            ${singleProduct?.price.toFixed(2)}
          </h1>
          {/*Description */}
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct?.description}
          </p>
          {/*Extra information */}
          <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
            Category: {singleProduct.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Tag: Shop, WDW
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU: {Math.random() * 500} {/* SKU sollte besser definiert werden */}
          </p>
          {/*AddtoCart */}
          <AddToCart product={singleProduct} />
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto">
        <h1 className="text-2xl text-black font-semibold">Related Products</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relateProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
