import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = ({ products }) => {
  return (
    <>
      <div className="m-4">
        <div className="text-xl text-center text-purple-600"> New Products</div>
        <div className="flex flex-wrap mt-6 gap-3 ">
          {products.map((prod) => {
            return <ProductCard key={prod._id} prod={prod} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NewProducts;
