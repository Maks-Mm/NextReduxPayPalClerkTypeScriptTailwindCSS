{
  /*Category */
}

export async function getAllCategory() {
  const categoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return categoryRes.json();
}

{
  /*Products */
}

export async function getAllProduct() {
  const productRes = await fetch("https://fakestoreapi.com/products");
  const data = await productRes.json();
  console.log(data);
  return data;
}

{
  /*SingleProduct */
}

export async function getSingleProduct(id: string) {
  const singleProductRes = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );
  return singleProductRes.json();
}
{
  /*ProductByCategory */
}
export async function getProductByCategory(category: string) {
  const productByCategoryRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return productByCategoryRes.json();
}
