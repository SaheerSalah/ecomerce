"use client";

import { NavLinks } from "@/constants/NavLinks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Link from "next/link";
import {  Heart, ShoppingCart, TextAlignStartIcon, Rocket} from "lucide-react"; 

export default function Navbar() {
  return (
    <nav className="grid shadow-md">
      <div className="p-5 flex justify-between items-center border-b border-gray-200">
        <div>Get up to 50% off new season styles,limited time only</div>
        <div className="flex gap-4">
          <Link href="/" className="text-secondary ">
            help center
          </Link>
          <Link href="/" className="text-secondary">
            order Tracking
          </Link>
        </div>
      </div>
      <div className="div ">
        <div className="p-5 flex justify-between items-center border-b border-gray-200">
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar className="w-96 px-3 py-3" />
        </div>
        <div className="flex  gap-2  ">
          <Link href="/login" className="text-secondary ">
            Login
          </Link>
          <span>|</span>
          <Link href="/register" className="text-secondary">
            Register
          </Link>
        </div>
        <Heart />
        <ShoppingCart />
      </div>
      <div className="flex justify-between p-5">
        <div>
          <TextAlignStartIcon /> SHOP BY GATEGORIES
        </div>
        <nav className=" flex gap-4">
          {NavLinks.map((link) => (
            <div key={link.id} className="relative group">
              {link.title}
            </div>
          ))}
        </nav>
        <span>
          <Rocket />Free International Delivery 
        </span>
      </div>

      </div>
      
    </nav>
  );
}
