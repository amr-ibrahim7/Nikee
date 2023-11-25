"use client";

import SEO from "@/components/SEO";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <>
      <div className="mx-auto flex h-[65vh] w-full max-w-md flex-col items-baseline justify-center space-y-5">
        <SEO title="Not Found Page" desc="Not Found Page" />
        <h1 className="text-start text-5xl uppercase md:text-4xl">
          Page Not Found
        </h1>
        <div className="space-y-2 text-start text-2xl text-gray-500 md:text-xl">
          <p>We looked everywhere for this page.</p>
          <p>Are you sure the website url is correct?</p>
          <p> Get in touch with site owner.</p>
        </div>
        <Link
          href="/"
          className="w-full max-w-sm rounded-lg border border-black p-4 text-center transition-all duration-500 hover:bg-black hover:text-white"
        >
          Go Back
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
