import { getSingleProduct, getProductByCategory } from "@/Request/requests";
import ProductDetailsClient from "./ProductDetailsClient";
import { Product } from "@/typing";

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const singleProduct: Product = await getSingleProduct(id);
  const relatedProducts: Product[] = await getProductByCategory(singleProduct.category);

  return (
    <ProductDetailsClient
      singleProduct={singleProduct}
      relatedProducts={relatedProducts}
    />
  );
};

export default ProductDetails;
