"use client";

import React from "react";
import { CartItem } from "@/app/store/cartSlice";
import Image from "next/image";

type Props = {
  items: CartItem[];
};

function CartSidebar({ items }: Props) {
  return (
    <div className="mt-6 h-full mb-6">
      <h1 className="text-center font-bold text-lg mb-6">Your Cart</h1>
      {items.length === 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <img
            src="https://media.istockphoto.com/id/1987775073/de/vektor/warenkorb-schwarzes-linienzeichnungssymbol.jpg?s=2048x2048&w=is&k=20&c=J_W0AT4W73djkos9LoHYXzb5et4NxYo6JuwDqdcaUKM="
            width={200}
            height={200}
            alt="CartSidebarImage"
            className="object-cover mx-auto"
           // priority // Priorisiert das Laden des Bildes
          />
          <p className="text-gray-500 mt-4">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
