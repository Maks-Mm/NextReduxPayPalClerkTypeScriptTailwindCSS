"use client";

import React from "react";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function Cart() {
  //Get our cart items

  const items = useSelector((state: RootState) => state.cart.items);
  //Calculating total quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  //Calculate the total price

  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
  //calculate vat (15%)

  const vat = (+totalPrice * 0.15).toFixed(2);

  //total price with Vat

  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  //console.log({totalPrice,vat,totalPriceWithVat});

  return (
    <div className="mt-8 min-h-[60vh]">
      {/*Check if the cart is empty */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            alt="page.tsx of cart"
            width={400}
            height={400}
            className="object-cover mx-auto"
          />
          <h1 className="mt-8 text-2xl font-semibold">Your Cart is empty</h1>
          <Link href="/">
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
      )}
      {/*if cart item exist  */}
      {items.length>0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
            {/*Cart item  */}
            <div className="round-lg shadow-md overflow-hidden xl:col-span-4">
                <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700">Your Cart ({totalQuantity} Items)</h1>
            </div>
            {/*Cart summary */}
        </div>
      )}
    </div>
  );
}

export default Cart;
