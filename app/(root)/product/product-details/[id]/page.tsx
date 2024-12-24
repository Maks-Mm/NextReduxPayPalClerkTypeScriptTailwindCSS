import { getProductByCategory, getSingleProduct } from "@/Request/requests";
import React from "react";
import { Product } from "@/typing";
import Image from "next/image";
import { StarIcon } from "lucide-react";
import AddToCart from "./add-card";
import ProductCard from "@/components/Home/ProductCard";
import { GetServerSideProps } from "next";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, relatedProducts }) => {
  const num = Math.round(product.rating?.rate || 0); // Sicherstellen, dass der Wert immer 0 oder mehr ist
  const starArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Images */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt={product.title}
          />
        </div>
        {/* Content */}
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {product.title}
          </h1>
          {/* Ratings */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {starArray.map((_, index) => (
                <StarIcon
                  key={index}
                  size={20}
                  fill="yellow"
                  className="text-yellow-600"
                />
              ))}
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ({product.rating.count} Reviews)
            </p>
          </div>
          {/* Line */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          {/* Prices */}
          <h1 className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold">
            ${product.price.toFixed(2)}
          </h1>
          {/* Description */}
          <p className="mt-4 text-base text-black opacity-70">
            {product.description}
          </p>
          {/* Extra information */}
          <p className="mt-4 text-sm text-black text-opacity-70 font-semibold">
            Category: {product.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Tag: Shop, WDW
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU: {Math.random() * 500} {/* SKU sollte besser definiert werden */}
          </p>
          {/* Add to Cart */}
          <AddToCart product={product} />
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto">
        <h1 className="text-2xl text-black font-semibold">Related Products</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Server-Side-Datenabruf
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  let singleProduct: Product;
  let relatedProducts: Product[] = [];

  // Datenabruf mit Fehlerbehandlung
  try {
    singleProduct = await getSingleProduct(id as string);
    relatedProducts = await getProductByCategory(singleProduct.category);
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      notFound: true, // 404-Seite anzeigen, wenn das Produkt nicht gefunden wird
    };
  }

  return {
    props: {
      product: singleProduct,
      relatedProducts,
    },
  };
};

export default ProductDetails;
