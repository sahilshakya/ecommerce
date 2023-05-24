import Layout from "@/components/Layout";
import { getProducts } from "@/service/axios.service";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProdcts] = useState([]);
  useEffect(() => {
    getProducts().then((resp) => {
      setProdcts(resp.data);
    });
  }, []);

  const deleteProduct = async (e, products) => {
    e.preventDefault();
    try {
      await axios.delete("/api/products?id=" + products._id);

      const data = products.filter((prod) => {
        return prod.id !== products._id;
      });
      setProdcts(data);
    } catch (err) {
      console.log(err);
    }
  };
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
                  <td>{product.price}</td>
                  <td>
                    <button
                      onClick={(e) => deleteProduct(e, product)}
                      className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Products;
