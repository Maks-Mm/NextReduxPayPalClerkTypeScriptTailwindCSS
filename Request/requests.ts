{
  /*Category 
  
  Message : die Typisirung von den Daten der Api hier sind notwendig sonst besteht keine Rückgabe der Funktion
  */
}

export async function getAllCategory(): Promise<string[]> {
  const categoryRes = await fetch(
    "https://dummyjson.com/products?sortBy=title&order=asc"
  );
  const data = await categoryRes.json();

  const categories = Array.from(
    new Set(
      data.products.map((product: { category: string }) => product.category)
    )
  );

  return categories as string[];
}

{
  /*Products
  export async function getAllProduct() {
    const productRes = await fetch("https://dummyjson.com/products");
    return productRes.json();
  }
  
  */
}
export async function getAllProduct() {
  const productRes = await fetch("https://dummyjson.com/products/categories");
  return productRes.json();
}

