import React from "react";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Image from "next/image";

function Footer() {
  return (
    <div className="pt-20 pb-12">
      {/* Grid-System definieren */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1. Spalte */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            Online Store WDW
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            soluta ipsam veniam! Voluptatibus ullam itaque labore minus vero ex
            laborum voluptates, rerum neque doloribus, dicta cumque saepe, natus
            dolorum nobis!
          </p>
          <p className="text-sm mt-6 text-black">
            + 49 (0) 176 – 442 648 65 <br /> OnlineStoreShopping@gmail.com
          </p>

          <br />
          <p>Social Media</p>
          {/* Soziale Medien */}
          <span className="flex space-x-2 items-center">
            <GrInstagram size={20} />
            <ImFacebook2 size={20} />
            <IoLogoYoutube size={28} />
            <FaSquareWhatsapp size={25} />
            <AiFillTikTok size={28} />
          </span>
        </div>

        {/* 2. Spalte */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Information</h1>
          <p className="footer__link">About us</p>
          <p className="footer__link">Privacy Police</p>
          <p className="footer__link">Return Police</p>
          <p className="footer__link">Dropshipping</p>
          <p className="footer__link">Shipping Police</p>
        </div>
        {/*3rd part */}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Account</h1>
          <p className="footer__link">Dashboard</p>
          <p className="footer__link">My Orders</p>
          <p className="footer__link">Account Details</p>
          <p className="footer__link">Track Orders</p>
        </div>
        {/* 4rd part*/}
        <div className="lg:mx-auto">
          <h1 className="footer__title">Shop</h1>
          <p className="footer__link">Affiliate</p>
          <p className="footer__link">Best Sellers</p>
          <p className="footer__link">Latest Products</p>
          <p className="footer__link">Sale Products</p>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">
          © mmpryshchepa copyright 2024
        </p>
        <Image
          src="/images/VisaCardPayPal.png"
          width={230}
          height={230}
          alt="pay"
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
}

export default Footer;
