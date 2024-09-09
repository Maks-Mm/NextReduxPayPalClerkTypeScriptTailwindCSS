import React from 'react'
import Hero from './Hero'
import Category from './Category'
import AllProduct from './AllProduct'
import Footer from './Footer'
import ProductDetails from '@/app/(root)/product/product-details/[id]/page'

function Home() {
  
  const params = { id: '123' }; 

  return (
    <div>
      <ProductDetails params={params} />
      <Hero />
      <Category />
      <AllProduct />
      <Footer />
    </div>
  )
}

export default Home;
