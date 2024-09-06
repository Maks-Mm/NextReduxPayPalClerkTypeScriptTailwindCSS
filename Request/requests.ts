{/*Category */}

export async function getAllCategory(): Promise<string[]> {
    const categoryRes = await fetch('https://dummyjson.com/products');
    const data = await categoryRes.json();
  
    const categories = data.products.map((product: any) => product.category);
    return Array.from(new Set(categories)); // Duplikate entfernen und als Array zurückgeben
  }
  
  {/*Product
    export async function getAllProduct() {
      const productRes = await fetch('https://dummyjson.com/products/1')
      return (await productRes).json();
    }
    */}

    export async function getAllProduct() {
      const productRes = await fetch('https://dummyjson.com/products/category/smartphones');
      return productRes.json();
  }
  
  
