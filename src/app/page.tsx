"use client";

import MarqueeSwiper from "@/components/MarqueeSwiper";
import Hero from "@/components/ui/Hero";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import shoe from "@/constants/data";
import { ProductType } from "@/Types/Products";
import ProductCard from "@/components/ProductCard";
import { responsiveCarousel } from "@/config/responsive";
import UpdateBanner from "@/components/UpdateBanner";
import BannerImg from "../../public/banner.jpg";
import Image from "next/image";
import FooterAction from "@/components/FooterAction";
import Footer from "@/components/ui/Footer";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        desc="Nike store for shoes developed with nextjs, typescript, tailwind,"
      />
      <main className="h-[500px]">
        <Hero />
        <MarqueeSwiper />
        <div className="my-5 flex flex-col items-center justify-center space-y-4 pt-14 md:text-center">
          <h2 className="text-4xl font-bold md:text-2xl ">
            Explore more of our product
          </h2>
          <p className="w-full max-w-[25rem] text-center text-gray-500 md:max-w-[20rem] ">
            All the collection we need, you can find from us without any hassle
          </p>
        </div>
        <Carousel
          className="py-8 "
          responsive={responsiveCarousel}
          containerClass="carousel-container"
          itemClass="px-[10px]"
          autoPlaySpeed={2500}
          autoPlay={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
        >
          {shoe.slice(0, 9).map((shoe: ProductType) => (
            <ProductCard shoe={shoe} key={shoe.id} />
          ))}
        </Carousel>
        <UpdateBanner />
        <Image
          className="w-full"
          src={BannerImg}
          alt="BannerImg image"
          priority
        />
        <div className="customDivider" />
        <FooterAction />
        <Footer />
      </main>
    </>
  );
}
