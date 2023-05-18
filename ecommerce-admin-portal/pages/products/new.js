import Layout from "@/components/Layout";
import React from "react";

const newProduct = () => {
  return (
    <div>
      <Layout>
        <h1>Add new Product</h1>
        <form>
          <label>Product Name</label>
          <input type="text" placeholder="Enter Produt name" />

          <label>Category</label>
          <select>
            <option value="">Uncategorized</option>
            <option value="">Categorized</option>
          </select>
          <label>Photos</label>
          <div className="flex flex-wrap ">
            <div className="w-20 h-20 cursor-pointer  flex justify-center items-center bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              <input type="file" className="hidden" />
            </div>
            <input />
          </div>
          <label>Description</label>
          <input type="text" placeholder="Product Description"></input>

          <label>Price</label>
          <input type="number" placeholder="Product price"></input>

          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Save
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default newProduct;
