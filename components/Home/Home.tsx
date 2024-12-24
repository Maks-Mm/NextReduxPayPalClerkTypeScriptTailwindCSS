import React from "react";
import Hero from "./Hero";
import Category from "./Category";
import AllProduct from "./AllProduct";
import Footer from "./Footer";



function Home() {
  const params = { id: "123" };

  return (
    <div>
      <Hero />
      <Category />
      <AllProduct />
      <Footer />
    </div>
  );
}

export default Home;
