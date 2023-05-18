import Layout from "@/components/Layout";
import { getProducts } from "@/service/axios.service";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProdcts] = useState([]);
  useEffect(() => {
    // const response = getProducts();
    // setProdcts(response.data);
  }, []);
  return (
    <Layout>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href="/products/new"
      >
        Add new product
      </Link>

      <table className="mt-10 table-auto basic">
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Product Price</td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.pricecd}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Products;
