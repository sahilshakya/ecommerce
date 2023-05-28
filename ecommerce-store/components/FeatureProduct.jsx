import Link from "next/link";
import React from "react";

const FeatureProduct = ({ product }) => {
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
                  Read More
                </label>
              </Link>
              <Link href={"/products/1"}>
                <label className="cursor-pointer text-green-400">
                  Add to Cart
                </label>
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
