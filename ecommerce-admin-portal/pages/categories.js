import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import axios from "axios";
import React, { useState, useEffect } from "react";

const categories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);

  const getCategories = async () => {
    setIsLoading(true);
    const resp = await axios.get("/api/categories");
    setCategories(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const saveCategory = async (e) => {
    e.preventDefault();
    const data = {
      name,
      parentCategory,
    };
    console.log(data);
    let resp;

    if (editCategory) {
      data._id = editCategory._id;
      resp = await axios.put("/api/categories", data);
      setEditCategory(null);
      setName("");
      setParentCategory("");
    } else {
      resp = await axios.post("/api/categories", data);
    }
    if (resp.status === 200) {
      getCategories();

      // toaster  success service implement
    } else {
      //toaster error service implement
    }
  };

  const deleteCategoriesHandler = async (cat) => {
    setIsLoading(true); // for loader is shown when loading is true
    const { _id } = cat;
    await axios.delete("/api/categories?_id=" + _id);
    getCategories();
    setIsLoading(false); // after deleting the category loadings is set is false
  };

  const editCateory = (cat) => {
    setEditCategory(cat);
    setName(cat.name);
    setParentCategory(cat?.parent?._id);
  };

  return (
    <Layout>
      <h1>Category</h1>
      <form onSubmit={saveCategory}>
        <div>
          <input
            type="text"
            value={name}
            placeholder="Category name"
            onChange={(e) => setName(e.target.value)}
          />
          <select
            value={parentCategory}
            onChange={(e) => setParentCategory(e.target.value)}
          >
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
      {!editCategory &&
        (isLoading ? (
          <Loader />
        ) : (
          <table className="basic mt-4">
            <thead>
              <tr>
                <td>Category name</td>
                <td>Parent Category</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 &&
                categories.map((cat) => {
                  return (
                    <tr key={cat._id}>
                      <td>{cat.name}</td>
                      <td>{cat?.parent?.name}</td>
                      <td>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={(e) => editCateory(cat)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={(e) => deleteCategoriesHandler(cat)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ))}
    </Layout>
  );
};

export default categories;
