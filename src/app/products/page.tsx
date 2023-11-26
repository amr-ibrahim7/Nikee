"use client";
import { ProductDataArr, ProductTypeFil } from "@/Types/Products";
import type { FC } from "react";
import shoe from "@/constants/data";
import React from "react";
import { IoGridOutline, IoMenuOutline } from "react-icons/io5";
import FilterData from "@/utils/FilterData";
import ProductCardTwo from "@/components/ProductCardTwo";
import { sortOptions } from "@/config/products";

import SEO from "@/components/SEO";

const ProductsPage: React.FC = () => {
  const [grid, setGrid] = React.useState<boolean>(true);
  const {
    filtered,
    handleSelect,
    handleChange,
    setCategoryQuery,
    AllData,
    query,
  } = FilterData({ data: shoe });

  return (
    <>
      <SEO title="All produsts" desc="haha" />
      <div className="my-8 flex w-full md:my-20 md:flex-col">
        <div className="flex flex-col items-start space-y-5">
          <div className="sticky top-20 flex w-full flex-col items-start space-y-5 md:items-center md:justify-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-none"
              onChange={handleChange}
              value={query}
            />
            <h2 className="text-xl font-bold">Category</h2>
            <div className="flex flex-col items-start justify-start space-y-4 md:flex-row md:items-center md:justify-center md:space-x-5 md:space-y-0 md:text-center">
              <button onClick={() => AllData()}>All</button>
              <button onClick={() => setCategoryQuery("Men's Shoes")}>
                Men's Shoes
              </button>
              <button
                onClick={() => setCategoryQuery("Men's Basketball Shoes")}
              >
                Men's Basketball Shoes
              </button>
            </div>
            <button
              onClick={() => AllData()}
              className="rounded-xl bg-red-500 p-2 text-white"
            >
              Clear Filter
            </button>
          </div>
        </div>
        <div className="divider divider-horizontal md:divider-vertical" />
        <div className="flex w-full flex-col space-y-5">
          <div className="flex w-full items-center justify-center space-x-2 md:flex-wrap md:space-y-5">
            <div className="flex items-center space-x-3">
              <div
                onClick={() => setGrid(true)}
                className={`cursor-pointer rounded-md bg-black  p-2 transition-all duration-500 hover:scale-110 ${
                  grid && "bg-red-500"
                }`}
              >
                <IoGridOutline className="text-xl  text-white" />
              </div>
              <div
                onClick={() => setGrid(false)}
                className={`cursor-pointer rounded-md bg-black  p-2 transition-all duration-500 hover:scale-110 ${
                  !grid && "bg-red-500"
                }`}
              >
                <IoMenuOutline className="text-xl text-white " />
              </div>
              <p className="w-[120px]">{filtered.length} Shoes Found</p>
            </div>
            <div className="h-[1px] w-full bg-black md:hidden" />
            <select onChange={handleSelect} className="select select-bordered">
              <option disabled selected>
                Sort By
              </option>
              {sortOptions.map((s, i) => (
                <option key={i} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div
            className={`${
              !grid
                ? "flex w-full flex-col gap-5"
                : "grid w-full grid-cols-fluidTwo gap-10"
            }`}
          >
            {filtered.map((shoe: ProductTypeFil) => (
              <ProductCardTwo key={shoe._id} shoe={shoe} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
