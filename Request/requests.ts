export async function getAllCategory(): Promise<string[]> {
    const categoryRes = await fetch('https://dummyjson.com/products');
    const data = await categoryRes.json();
  
    const categories = data.products.map((product: any) => product.category);
    return Array.from(new Set(categories)); // Duplikate entfernen und als Array zurückgeben
  }
  