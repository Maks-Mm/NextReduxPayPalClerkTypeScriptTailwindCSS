"use client"; // Dies weist Next.js an, dass diese Komponente im Client-Side Rendering gerendert werden soll

import { addItem, CartItem } from "@/app/store/cartSlice";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/typing";
import React from "react";
import { useDispatch } from "react-redux";

// Definiere die Props für die AddToCart-Komponente
interface AddToCartProps {
  product: Product; // Der Produkttyp sollte hier angegeben werden
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const dispatch = useDispatch(); // useDispatch hook von Redux
  const { toast } = useToast(); // Benutze das Toast-Hook

  const addCartHandler = () => {
    // Handler-Funktion, um den Artikel zum Warenkorb hinzuzufügen
    toast({
      description: "Item added to the cart", // Erfolgsmeldung
      variant: 'success'
    });
    dispatch(addItem(product)); // Dispatch des addItem Actions
  };

  return (
    <Button
      onClick={addCartHandler} // Direkt die Handler-Funktion aufrufen
      className="mt-6"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
