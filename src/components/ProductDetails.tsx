"use client";
import { FC, useState } from "react";
import { ProductTypeFil } from "@/Types/Products";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import { notifyMsg } from "@/lib/utils";

const ProductDetailsComponent: FC<{ data: ProductTypeFil }> = ({ data }) => {
  const { addToCart } = useCart();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    if (!isClicked) {
      addToCart(data);
      setIsClicked(true);
      notifyMsg("Item added to cart"); // Display a notification or perform any other action
    }
  };
  return (
    <div className="mx-auto w-full max-w-[600px] space-y-3 md:mt-10 md:px-10 md:text-center">
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <h4 className="text-xl">{data.category}</h4>
      <div className="space-y-2">
        <span className="font-bold">Price:{data.price}$</span>
        <div className="font-bold">Quantity:1</div>
        <h6 className="text-[#979490]">Incl. of Taxes</h6>
        <h6 className="text-[#979490]">
          (Also includes all applicable duties)
        </h6>
      </div>
      <div>
        <div className="mb-5 text-lg font-bold">Product Details</div>
        <div className="text-md mb-5">
          <p>{data.description}</p>
        </div>
      </div>
      <button
        onClick={handleClick}
        disabled={isClicked}
        className="mb-3 w-full rounded-full bg-black py-4 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95"
      >
        {isClicked ? "Added to Cart" : "Add To Cart"}
      </button>
      <Link
        href="/products"
        className="mb-10 flex w-full items-center justify-center gap-2 rounded-full border border-black py-4 text-lg font-medium transition-transform hover:opacity-75 active:scale-95"
      >
        Continue Shopping <IoCartOutline size={20} />
      </Link>
    </div>
  );
};

export default ProductDetailsComponent;
