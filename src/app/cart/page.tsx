"use client";
import CartItems from "@/components/CartItems";
import EmptyCart from "@/components/EmptyCart";
import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ProductTypeFil } from "@/Types/Products";
import Footer from "@/components/ui/Footer";
import SEO from "@/components/SEO";
const CartPage = () => {
  const { cart, clearCart } = useCart();
  const totalPrice = cart.reduce((acc: number, product: ProductTypeFil) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <SEO title="Cart" desc="See all ur cart products" />
      {cart.length !== 0 ? (
        <div className="z-50 mx-auto w-full max-w-[1360px] px-2.5 md:px-4 ">
          <div className="flex flex-col items-center justify-center">
            <h2 className="my-28 text-3xl font-bold">Shopping Cart</h2>
            <div className="mx-auto flex w-full max-w-[1360px] justify-between pb-[100px] pl-10 lg:max-w-[800px] lg:flex-col lg:items-center lg:px-5">
              <div className="mb-28 flex flex-col">
                <h4 className="mb-5 text-2xl font-bold">Cart Items</h4>
                <CartItems data={cart} />
                <div className="flex items-center justify-between">
                  {cart.length >= 2 && (
                    <button
                      className="my-8 w-full max-w-[150px] rounded-full bg-red-600 p-2 text-white hover:bg-black/80"
                      onClick={() => clearCart()}
                    >
                      Empty Ur Cart
                    </button>
                  )}
                  <Link
                    href="/products"
                    className="my-8 w-full max-w-[170px] rounded-full bg-red-600 p-2 text-center text-white hover:bg-black/80"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex h-full w-[400px] flex-col space-y-5 lg:w-auto lg:pb-10">
                <h4 className="mb-5 text-2xl font-bold">Summary</h4>
                <div className="w-full rounded-xl bg-[#f2f2f2] p-5">
                  <div className="flex justify-between border-b-[1px] border-[#6d6d5d59] pb-2">
                    <h2>SUBTOTAL</h2>
                    <p className="font-bold">{totalPrice}$</p>
                  </div>
                  <p className="w-full py-4">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </p>
                </div>
                <button className="hover:bg-black/80' w-full rounded-full bg-black p-5 text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      <Footer />
    </>
  );
};

export default CartPage;
