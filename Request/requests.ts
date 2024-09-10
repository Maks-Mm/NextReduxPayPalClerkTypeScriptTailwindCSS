{/*Category */}

export async function getAllCategory() {
  const categoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  return categoryRes.json();
}

{/*Products */}


export async function getAllProduct() {
  const productRes = await fetch("https://fakestoreapi.com/products");
  const data = await productRes.json();
  console.log(data);
  return data;
}

{/*SingleProduct */}

export async function getSingleProduct(id: string) {
  const singleProductRes = await fetch(`https://fakestoreapi.com/products/1`

  );
  return singleProductRes.json();
}
//https://fakestoreapi.com/products/${id} wenn ich id am Ende abtrenne ,ist die Funktion in Ordnung und keine Fehler veruasacht
{/*Frage :also wenn ich richtig verstehe 
  gibt das id am Ende nicht nur eine Positon eines Artikles von Api 
  sondern ganzen Satz ,
  und wenn ich 1 angebe habe ich nur ein Schtock ,
  wie mache ich so damit ich alle Artikle von der Api herunterlade ? */};

  
  export async function getProductByCategory(category:string){
    const productByCategoryRes = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return  productByCategoryRes.json();
    //'https://fakestoreapi.com/products/category/jewelery' Original
  }