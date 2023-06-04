import CartContext from "@/context/CartContext";

import Link from "next/link";
import React, { useContext } from "react";

const FeatureProduct = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const addToCart = (e, id) => {
    e.preventDefault();
    addProduct(id);
  };
  return (
    <>
      <div className="bg-gray-900 text-white py-10 ps-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="mt-8 order-2 md:order-1 ">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {product.title}
            </h1>
            <p className="text-gray-300 text-sm mb-4">{product.description}</p>
            <div>
              <Link href={"/products/1"}>
                <label className="cursor-pointer text-blue-600">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Read More
                  </button>
                </label>
              </Link>
              <Link href={"/products/1"}>
                <button
                  onClick={(e) => addToCart(e, product._id)}
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add to Cart
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 ">
            <img
              src={product.images[0]}
              alt="prod img"
              className="w-84 mx-auto h-64"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
