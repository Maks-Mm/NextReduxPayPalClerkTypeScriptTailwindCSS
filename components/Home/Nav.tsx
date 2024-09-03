"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBox from "../Helper/SearchBox";
import { RiHeartLine } from "react-icons/ri";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { UserIcon } from "lucide-react";



function Nav() {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={140} height={140} />
          </Link>
        </div>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <SearchBox />
          <RiHeartLine size={26} cursor={"pointer"} className="ml-4" />
          {/*ShoppingCartButton */}
          <ShoppingCartButton/>
          {/*User button */}
          <UserIcon size={26} cursor={"pointer"}/>
        </div>
      </div>
    </div>
  );
}

export default Nav;
