"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchBox from "../Helper/SearchBox";

function Nav() {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={140} height={140} />
        </Link>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <SearchBox />
        </div>
        <div className="flex items-center">Nav</div>
      </div>
    </div>
  );
}

export default Nav;
