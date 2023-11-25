import Image from "next/image";
import React from "react";
import EmptyImg from "../../public/empty-cart.png";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <>
      <div className="mx-auto flex w-[400px] flex-col items-center justify-center px-5 py-[100px] text-center md:w-auto">
        <Image src={EmptyImg} alt="empty image" priority />
        <h2 className="text-xl font-bold">Your Cart is Empty</h2>
        <p className="w-full py-4">
          Looks like you have not added anything in your cart. Go ahead and
          explore top categories.
        </p>
        <Link
          href="/products"
          className="w-[200px] rounded-full bg-black p-5 text-white hover:bg-black/80"
        >
          Continue Shopping
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
