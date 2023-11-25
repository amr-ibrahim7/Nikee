"use client";
import type { ProductType } from "@/Types/Products";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";

interface ProductCardProps {
  shoe: ProductType;
}
const ProductCard: FC<ProductCardProps> = ({ shoe }) => {
  return (
    <div className="card h-96 w-96 bg-base-300 shadow-xl sm:items-center sm:justify-center md:w-80">
      <figure>
        <Link href={`product/${shoe._id}`}>
          <Image
            className="transition-all duration-500 hover:scale-110"
            width={500}
            height={500}
            src={shoe.image}
            alt={shoe.alt}
            priority
          />
        </Link>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex w-full items-center justify-between">
            <h2 className="card-title">{shoe.title}</h2>
            <Link
              href={`product/${shoe._id}`}
              className="bade rounded-full bg-base-100 p-2 hover:bg-black hover:text-white "
            >
              <CgSearch />
            </Link>
          </div>
        </div>
        <p> {shoe.price}$ </p>
      </div>
    </div>
  );
};

export default ProductCard;
