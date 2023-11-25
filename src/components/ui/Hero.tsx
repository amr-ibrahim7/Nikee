"use client";
import type { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiArrowBack } from "react-icons/bi";
import SliderOne from "../../../public/slide-1.jpg";
import SliderTwo from "../../../public/slide-2.jpg";
import SliderThree from "../../../public/slide-3.jpg";
import Image from "next/image";

const SliderImages = [SliderOne, SliderTwo, SliderThree];

const Hero: FC = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      className="relative mx-auto max-w-[1360px] pb-10 text-black dark:text-white"
      renderArrowPrev={(clickHandler) => (
        <div
          onClick={clickHandler}
          className="bg-dark dark:text-dark absolute bottom-0 right-[51px] z-10 flex h-[50px] w-[50px] cursor-pointer items-center justify-center text-white hover:opacity-90 dark:bg-white md:right-[31px] md:h-[30px] md:w-[30px]"
        >
          <BiArrowBack className="text-lg text-black md:text-sm" />
        </div>
      )}
      renderArrowNext={(clickHandler) => (
        <div
          onClick={clickHandler}
          className="bg-dark dark:text-dark absolute bottom-0 right-0 z-10 flex h-[50px] w-[50px] cursor-pointer items-center justify-center text-white hover:opacity-90 dark:bg-white md:h-[30px] md:w-[30px]"
        >
          <BiArrowBack className="rotate-180 text-lg text-black md:text-sm" />
        </div>
      )}
    >
      {SliderImages.map((img, index) => (
        <div key={index}>
          <Image src={img} className="relative" alt="shoes image" />
          <p className="dark:bg-dark absolute bottom-20 left-0 w-[200px] cursor-pointer bg-white p-5 text-2xl font-bold uppercase text-black md:bottom-5 md:w-[120px] md:p-2 md:text-sm">
            Shop Now
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
