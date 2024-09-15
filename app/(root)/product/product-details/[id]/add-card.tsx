"use client";

import { addItem, CartItem } from "@/app/store/cartSlice";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/typing";
import React from "react";
import { useDispatch } from "react-redux";

function AddToCart({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const {toast} = useToast()

  const addCartHandler = () => {
    toast({
      description:"Item Add to the cart",
      variant:'success'
    })
    dispatch(addItem(product));
  }

  return (
    <Button
      onClick={() => {
        addCartHandler();
      }}
      className="mt-6"
    >
      AddToCart
    </Button>
  );
}

export default AddToCart;
