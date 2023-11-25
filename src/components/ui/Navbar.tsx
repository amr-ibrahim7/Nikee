"use client";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { SiNike } from "react-icons/si";
import { useCart } from "@/context/CartContext";
import { ProductTypeFil } from "@/Types/Products";

export default function Navbar() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc: number, product: ProductTypeFil) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div className="navbar sticky top-0 z-50 bg-base-100">
      <MaxWidthWrapper>
        <div className="flex flex-1 items-center space-x-10 md:space-x-5">
          <Link href="/" className="text-5xl normal-case">
            <SiNike />
          </Link>
          <Link href="/" className="text-xl font-bold">
            Home
          </Link>
          <Link href="/products" className=" text-xl font-bold">
            Products
          </Link>
        </div>
      </MaxWidthWrapper>
      <div className="flex items-center">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge indicator-item badge-sm">
                {cart.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cart.length} Items</span>
              <span className="text-info">Subtotal: {totalPrice}$</span>
              <div className="card-actions">
                <Link href="/cart" className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link href="/auth" className="btn  btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}
