"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import productsData from "@/constants/dataproduct";
import ProductDetailsComponent from "@/components/ProductDetails";
import ProductCarousel from "@/components/ProductCarousel";
import Footer from "@/components/ui/Footer";
import { ProductTypeFil } from "@/Types/Products";

const ProductPage: React.FC = () => {
  const pathname = usePathname();
  const id: string = pathname.substring(1);
  const item = productsData.find(
    (item) => item.id === parseInt(pathname.split("/")[2])
  );

  useEffect(() => {
    // Update the page title and description dynamically
    document.title = `Nike ${item?.title}` || "Product Title";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute(
      "content",
      item?.description || "Product Description"
    );
  }, [item]);

  return (
    <>
      <div className="mx-auto flex w-full max-w-[1360px] flex-col py-[100px]">
        {item ? (
          <div className="mx-auto  flex w-full md:flex-col">
            <ProductCarousel data={item} />
            <ProductDetailsComponent data={item} />
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
