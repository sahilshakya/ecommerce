import Layout from "@/components/Layout";
import React from "react";

const Products = () => {
  return (
    <div className="flex">
      <Layout></Layout>
      <div>
        <button>
          <Link href="/product/new">Add new Products</Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
