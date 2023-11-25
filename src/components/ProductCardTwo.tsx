import { ProductTypeFil } from "@/Types/Products";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
interface ProductCardProps {
  shoe: ProductTypeFil;
}

const ProductCardTwo: FC<ProductCardProps> = ({ shoe }) => {
  return (
    <div className="card image-full h-96 w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={shoe.image}
          alt={shoe.alt}
          width={500}
          height={500}
          priority
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{shoe.title}</h2>
        <p>{shoe.price}</p>
        <div className="card-actions justify-end">
          <Link href={`product/${shoe._id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
