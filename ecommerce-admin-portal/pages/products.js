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

  const deleteProduct = async (e, product) => {
    e.preventDefault();
    try {
      await axios.delete("/api/products?id=" + product._id);

      const data = products.filter((prod) => {
        return prod._id !== product._id;
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
            {/* <td>Product image</td> */}

            <td>Product Name</td>
            <td>Product Price</td>
            <td>Product Image</td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr key={product._id}>
                  {/* <td>
                    {}
                  </td> */}

                  <td>{product.title}</td>
                  <td>Rs. {product.price}</td>
                  <td>
                    <div className="w-12 h-16 p-1 border border-gray-300 rounded-lg flex items-center justify-center">
                      <img
                        className="max-w-full max-h-full"
                        src={product.images[0]}
                        alt=""
                      />
                    </div>
                  </td>
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
