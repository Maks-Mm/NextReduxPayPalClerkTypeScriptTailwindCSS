"use client";

import React from "react";
import { addItem, CartItem } from "@/app/store/cartSlice";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";
import { removeItem } from "@/app/store/cartSlice";

type Props = {
  items: CartItem[];
};

function CartSidebar({ items }: Props) {
  const dispatch = useDispatch();

  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (id: number) => dispatch(removeItem({ id }));

  return (
    <div className="mt-6 h-full mb-6">
      {/*Heading */}
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {/*if there is no cart */}
      {items.length === 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image
            src="/images/cart.svg"
            width={200}
            height={200}
            alt="CartSidebarImage"
            className="object-cover mx-auto"
            priority
          />
          <h1 className="mt-8 text-2xl font-semibold"></h1>
        </div>
      )}
      {/*if there is cart items */}

      {items.length > 0 && (
        <div>
          {items?.map((item) => {
            return (
              <div
                className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4"
                key={item.id}
              >
                {/*Cart item image */}
                <div className="">
                  <Image
                    src={item?.image}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-cover mb-4"
                  />
                </div>
                <div>
                  {/*title */}
                  <h1 className="text-sm w-4/5 font-semibold truncate">
                    {item?.title}
                  </h1>
                  {/*price */}
                  <h1 className="text-base text-blue-950 font-bold">
                    ${(item?.price * item?.quantity).toFixed(2)}
                  </h1>
                  {/*Quantity */}
                  <h1 className="text-base font-bold mb-2">
                    Quantity :{item?.quantity}
                  </h1>
                  {/*Two button one for add and one for remove */}
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => {
                        removeCartHandler(item.id);
                      }}
                      size={"sm"}
                      variant={"destructive"}
                    >
                      Remove
                    </Button>
                    <Button
                      onClick={() => {
                        addCartHandler(item);
                      }}
                      size={"sm"}
                      className=""
                    >
                      {" "}
                      Add{" "}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href="/cart">
            <SheetClose>
              <Button className="w-full mb-6 mt-6">View All Cart</Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
