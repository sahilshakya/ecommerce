import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState, useEffect } from "react";

const categories = () => {
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const resp = await axios.get("/api/categories");
    setCategories(resp.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const saveCategory = (e) => {
    e.preventDefault();
    const data = {
      name,
      parentCategory,
    };
    console.log(data);
  };

  return (
    <div className="flex">
      <Layout>
        <h1>Category</h1>
        <form onSubmit={saveCategory}>
          <div>
            <input
              type="text"
              placeholder="Category name"
              onChange={(e) => setName(e.target.value)}
            />
            <select>
              <option> No parent Categories </option>
              {categories.length > 0 &&
                categories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Save
            </button>
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default categories;
