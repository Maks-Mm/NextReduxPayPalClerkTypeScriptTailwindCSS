{
  /*Category 
  Message : die Typisirung von den Daten der Api hier sind notwendig sonst besteht keine Rückgabe der Funktion
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
  */
}

export async function getAllCategory(){
  const categoryRes =  await fetch('https://fakestoreapi.com/products/categories');
  return categoryRes.json()
}


{
  /*Products
  export async function getAllProduct() {
    const productRes = await fetch("https://dummyjson.com/products");
    return productRes.json();

    "https://dummyjson.com/products/category/fragrances" 
   Es scheint, dass das Problem darin liegt, dass du versuchst, 
   Bilder von der API zu laden, 
   aber die API-Daten,
    die du verwendest, 
    enthalten keine Bilder.
     Der Code, den du verwendest, 
     zeigt, dass du die https://dummyjson.com/products/categories-Endpoint verwendest, um Kategorien abzurufen, aber dieser Endpoint liefert nur eine Liste von Kategorien, ohne Bild-URLs oder andere Produktdetails.
  }
  
  */
} 
export async function getAllProduct() {
  const productRes = await fetch('https://fakestoreapi.com/products');
  const data = await productRes.json();
  console.log(data); 
  return data;
}


/*nachdem ich hier die Adressenkette wechsele tritt ein Problem von map in AllProduct auf ,warum? */