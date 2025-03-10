"use client";

import React from "react";
import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { addItem, CartItem, clearCart, removeItem } from "@/app/store/cartSlice";
import PayPalButton from "@/components/Helper/PayPalButton";
import { useRouter } from "next/navigation";

function Cart() {

    //router

    const router = useRouter()

  const dispatch = useDispatch();

  // Get our cart items
  const items = useSelector((state: RootState) => state.cart.items);

  // Calculating total quantity
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price
  const totalPrice = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Calculate VAT (15%)
  const vat = (+totalPrice * 0.15).toFixed(2);

  // Total price with VAT
  const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

  // Get authenticate user

  const { user } = useUser();

  // Add item

  const addItemHandler = (item: CartItem) => {
    dispatch(addItem(item));
  };

  //Remove item

  const removeItemHandler = (id: number) => {
    dispatch(removeItem({ id }));
  };

  //handle payment success
  const handleSuccess = (details:any)=>{
    router.push('/success');
    dispatch(clearCart());
  }

  return (
    <div className="mt-8 min-h-[60vh]">
      {/* Check if the cart is empty */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center rounded-lg shadow-md p-6 bg-white">
          <Image
            src="/hero.jpg"
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
      {/* If cart items exist */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12">
          {/* Cart item */}
          <div className="rounded-lg shadow-md overflow-hidden xl:col-span-4">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700">
              Your Cart ({totalQuantity} Items)
            </h1>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                        className="..."
                      />
                    </div>
                    <div>
                      <h1 className="md:text-xl text-base font-bold text-black">
                        {item.title}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Category : {item.category}
                      </h1>
                      <h1 className="md:text-2xl text-lg font-bold text-blue-950">
                        $ {item.price}
                      </h1>
                      <h1 className="md:text-lg text-sm font-semibold">
                        Quantity : {item.quantity}
                      </h1>
                      <div className="flex items-center mt-4 space-x-2">
                        <Button onClick={()=>{addItemHandler(item)}}>Add More</Button>
                        <Button onClick={()=>{removeItemHandler(item.id)}} variant={"destructive"}>Remove</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Cart summary */}
          <div className="xl:col-span-2">
            <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg">
              <h1 className="text-center mt-8 mb-8 text-white text-2xl font-semibold">
                Summary
              </h1>
              <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
              <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>VAT</span>
                <span>${vat}</span>
              </div>
              <div className="flex  mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="w-full h-[1.2px] bg-white bg-opacity-20"></div>
              <div className="flex mt-6  mb-6 text-xl uppercase font-semibold text-white items-center justify-between">
                <span>Total</span>
                <span>${totalPriceWithVat}</span>
                {!user && (
                  <Link href="/sign-in">
                    <Button className="bg-orange-500 w-full">
                      Sign In to Checkout
                    </Button>
                  </Link>
                )}
                {user && (
                  //Paypal Button
                 // <Button className="w-full bg-orange-500">Paypal</Button>
                 <PayPalButton amount={totalPriceWithVat} onSuccess={handleSuccess} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
