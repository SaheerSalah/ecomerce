"use client";

import { NavLinks } from "@/constants/NavLinks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { Heart, ShoppingCart, TextAlignStartIcon, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="grid shadow-md">
      <div className="p-2 flex justify-between items-center border-b border-gray-200">
        <div>Get up to 50% off new season styles,limited time only</div>
        <div className="flex gap-4">
          <Link href="/" className="">
            help center
          </Link>
          <Link href="/" className="">
            order Tracking
          </Link>
        </div>
      </div>
      <div className="div ">
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div>
            <Logo />
          </div>
          <div>
            <SearchBar className="w-96 px-3 py-3" />
          </div>
          <div className="flex  gap-4  ">
            <div className="flex gap-2">
              <Link href="/login" className="">
                Login
              </Link>
              <span>|</span>
              <Link href="/register" className="">
                Register
              </Link>
            </div>
            <div className=" flex gap-5">
              <Heart />
              <ShoppingCart />
              <ThemeToggle/>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center ">
            <TextAlignStartIcon /> SHOP BY GATEGORIES
          </div>
          <nav className=" flex gap-4">
            {NavLinks.map((link) => (
              <div key={link.id} className="relative group">
                {link.title}
              </div>
            ))}
          </nav>
          <span className="flex gap-2">
            <Rocket />
            Free International Delivery
          </span>
        </div>
      </div>
    </nav>
  );
}
