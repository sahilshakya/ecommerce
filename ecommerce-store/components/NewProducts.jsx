import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = ({ products }) => {
  return (
    <>
      <div className="text-center text-4xl mt-5"> New Products</div>
      <div className="mt-6 flex flex-wrap gap-10 justify-center">
        {products.map((prod) => {
          return <ProductCard key={prod._id} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default NewProducts;
