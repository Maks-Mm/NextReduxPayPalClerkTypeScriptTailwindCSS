import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuccessPage() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center flex-col">
      <Image src="/images/verify.png" width={200} height={300} alt="PhotoInSuccessPage" />
      <h1 className="mb-8 text-3xl mt-2 font-bold uppercase text-green-600">
        Order Successful
      </h1>
      <Link href="/">
        <Button>Go To Home</Button>
      </Link>
    </div>
  );
}

export default SuccessPage;
