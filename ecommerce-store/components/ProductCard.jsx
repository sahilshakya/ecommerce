import CartContext from "@/context/CartContext";
import React, { useContext } from "react";

const ProductCard = ({ prod }) => {
  const { addProduct } = useContext(CartContext);
  const addToCart = (e, id) => {
    e.preventDefault();
    addProduct(id);
  };
  return (
    <>
      <div class="w-full max-w-sm border-gray-200 rounded-lg  dark:bg-gray-100 text-black">
        <a>
          <img
            class="p-8 rounded-t-lg h-64 w-84"
            src={prod.images[0]}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900">
              {prod.title}
            </h5>
          </a>

          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900">${prod.price}</span>
            <button
              onClick={(event) => addToCart(event, prod._id)}
              class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="tooltip-animation"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {prod.title}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default ProductCard;
