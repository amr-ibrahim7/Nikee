import { ProductDataArr } from "@/Types/Products";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import type { FC } from "react";
import { BsTrash3 } from "react-icons/bs";

const CartItems: FC<ProductDataArr> = ({ data }) => {
  const { deleteFromCart, updateQuantity, updateSize } = useCart();
  return (
    <>
      {data.map((shoes) => (
        <div className="flex w-[800px] items-center justify-between border-b-[1px] py-4 md:w-full md:flex-col">
          <div className="flex h-full w-full items-center justify-between md:flex-col md:text-center">
            <Image
              src={shoes.image}
              width={120}
              height={120}
              className="mr-5"
              alt={shoes.title}
              priority
            />
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold md:mt-3 md:text-xl">
                  {shoes.title}
                </h2>
                <span className="text-[#6d6d6d]">{shoes.category}</span>
              </div>
              <div className="mt-5 flex space-x-16 text-[#6d6d6d]">
                <div className="flex items-center">
                  <div className="mr-2 font-bold">Sizes:</div>
                  <select
                    className="select select-primary w-fit rounded-md"
                    onChange={(e) => updateSize(shoes.id, e.target.value)}
                  >
                    {shoes.sizes.map((s, i) => (
                      <option key={i} value={s} className="text-black">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 font-bold">Quantity:</div>
                  <select
                    className="select select-primary w-fit rounded-md"
                    onChange={(e) =>
                      updateQuantity(shoes.id, parseInt(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((q, i) => (
                      <option className="text-black" key={i} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex h-[90px] w-full flex-col items-end justify-between  text-[#6d6d6d] md:mt-5 md:h-full md:flex-row">
              <h2 className="font-bold">Price : {shoes.price}$</h2>
              <BsTrash3
                onClick={() => deleteFromCart(shoes.id)}
                className="cursor-pointer text-xl hover:text-black"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItems;
