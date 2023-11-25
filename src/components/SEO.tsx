"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import type { FC } from "react";

interface SEOProps {
  title: string | undefined;
  desc: string | undefined;
}

const SEO: FC<SEOProps> = ({ title, desc }) => {
  const router = useRouter();

  useEffect(() => {
    // Update the page title and description dynamically
    document.title = `Nike Store - ${title || "Default Title"}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute("content", desc || "Default Description");
  }, [title, desc]);
  return (
    <Head>
      <title>{"Nike Store - " + title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
