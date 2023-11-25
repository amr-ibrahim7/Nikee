import Image from "next/image";
import type { FC } from "react";
import UpdateBg from "../../public/UpdateBg.png";
import Link from "next/link";

const UpdateBanner: FC = () => {
  return (
    <div className="flex items-center justify-between py-24 md:flex-col">
      <Image src={UpdateBg} alt="update image" priority />
      <div className="flex flex-col items-start space-y-5 text-lg md:items-center md:text-center">
        <h2 className="text-5xl font-bold md:text-3xl">
          Shop the future of <br /> Fashion to stay update
        </h2>
        <p className="w-full max-w-lg">
          Indugle in comfort and style with our range of plush furnture and cozy
          accents
        </p>
        <Link
          href="/products"
          className="w-full max-w-xs rounded-lg bg-[#6a7da0] p-2 text-center text-white transition-all duration-300 hover:bg-black"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default UpdateBanner;
