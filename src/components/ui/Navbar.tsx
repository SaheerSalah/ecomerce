"use client";

import { NavLinks } from "@/constants/NavLinks";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="grid ">
      <div className="p-11 border-b-2 flex justify-between">
        <div>
          <Logo />
        </div>
        <div>
          <SearchBar className="w-96" />
        </div>
        <div className="flex  gap-4 ">
          <Link href="/login" className="text-secondary  ">
            Login
          </Link>
          <Link href="/register" className="text-secondary">
            Register
          </Link>
        </div>
      </div>
      <div className="div">
        <nav className="">
          {NavLinks.map((link) => (
            <div key={link.id} className="relative group">
              {link.title}
            </div>
          ))}
        </nav>
      </div>
    </nav>
  );
}
