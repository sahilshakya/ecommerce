import CartContext from "@/context/CartContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavBar = () => {
  const { cartProduct } = useContext(CartContext);

  return (
    <>
      <header className="bg-gray-200">
        <div className="container mx-auto py-4 flex justify-between">
          <div className="flex gap-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <Link href="/">
              <label className="text-black text-xl font-bold cursor-ponter ms-2 cursor-pointer">
                Shopmandu
              </label>
            </Link>
          </div>
          <nav className="nav flex gap-5">
            <Link href="/products">
              <label className="cursor-pointer">Products</label>
            </Link>
            <Link href="/categories">
              <label className="cursor-pointer">Categories</label>
            </Link>
            <Link href="/cart">
              <label className="cursor-pointer">
                Cart ({cartProduct.length})
              </label>
            </Link>
            <Link href="/account">
              <label className="cursor-pointer">Account</label>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
