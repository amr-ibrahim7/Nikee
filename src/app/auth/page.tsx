import React from "react";
import { SiNike } from "react-icons/si";
import { FaGooglePlusSquare } from "react-icons/fa";
import Footer from "@/components/ui/Footer";
import SEO from "@/components/SEO";

const SignIn = () => {
  return (
    <>
      <SEO title="SignIn" desc="Auth signin page" />
      <div className="z-50 mx-auto w-full max-w-[1360px] px-2.5 md:px-4">
        <div className="my-6 flex h-[70vh] flex-col items-center justify-center border">
          <SiNike className="text-8xl" />
          <h2 className="text-3xl">Welcome to SignIn Page!</h2>
          <button className="mt-8 flex items-center justify-center space-x-4 rounded-md bg-black p-2 text-3xl text-white transition-all duration-500 hover:bg-[#c5c0c0] hover:text-black">
            <FaGooglePlusSquare className="mr-2 text-5xl" /> Sign in With Google
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
