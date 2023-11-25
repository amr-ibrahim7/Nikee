import { ProductDetailsTy } from "@/Types/Products";
import type { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
interface ProductPageProps {
  product: ProductDetailsTy | undefined;
}
const ProductCarousel: FC<{ data: ProductDetailsTy }> = ({ data }) => {
  return (
    <div className="top-[50px] mx-auto w-full max-w-[600px] text-[20px] text-white lg:px-10">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        renderThumbs={() =>
          data.images?.map((img: string, idx: number) => (
            <Image
              key={idx}
              src={img}
              width={500}
              height={600}
              alt="Thumbs imgs"
              priority
            />
          ))
        }
      >
        {data.images?.map((img: string, idx: number) => (
          <Image
            key={idx}
            width={500}
            height={500}
            src={img}
            alt="shoes image"
            priority
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
