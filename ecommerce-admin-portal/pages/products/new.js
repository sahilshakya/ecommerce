import Layout from "@/components/Layout";
import { BounceSpinLoader } from "@/components/Loader";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

const newProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const [isuploading, setISUploading] = useState(false);

  const router = useRouter();

  const categ = async () => {
    const resp = await axios.get("/api/categories");
    setCategories(resp.data);
  };
  useEffect(() => {
    categ();
  }, []);

  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, category, price, images };
    console.log(data);
    await axios.post("/api/products", data);
    router.push("/products");
  };

  const uploadImages = async (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setISUploading(true);
      const data = new FormData();

      for (let file of files) {
        data.append("file", file);
      }
      const resp = await axios.post("/api/upload", data);
      //store oldimages aswell as new images
      setImages((oldImages) => {
        console.log("oldimages", oldImages);
        console.log("newimages", [...oldImages, ...resp.data.links]);
        return [...oldImages, ...resp.data.links]; // can also do oldImages.concat(newImages)
      });
      setISUploading(false);
    }
  };
  const setImageOrder = (images) => {
    setImages(images);
  };
  return (
    <div>
      <Layout>
        <h1>Add new Product</h1>
        <form>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter Produt name"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label>Category</label>
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Uncategorized</option>
            {categories.length > 0 &&
              categories.map((category) => {
                return (
                  <option key={category._id} value="category._id">
                    {category.name}
                  </option>
                );
              })}
          </select>
          <label>Photos</label>
          <div className="mb-2 flex flex-wrap ">
            <ReactSortable
              list={images}
              className="flex flex-wrap gap-1"
              setList={setImageOrder}
            >
              {images.length > 0 &&
                images.map((image) => {
                  return (
                    <div key={image}>
                      <img src={image} className="h-20 mx-1" />
                    </div>
                  );
                })}
            </ReactSortable>
            {isuploading && (
              <div className="h-20 m-3 text-center">
                <BounceSpinLoader></BounceSpinLoader>
              </div>
            )}
            <label className="w-20 h-20 cursor-pointer  flex justify-center items-center bg-gray-300">
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
              <input type="file" className="hidden" onChange={uploadImages} />
            </label>
          </div>
          <label>Description</label>
          <textarea
            placeholder="Product description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label>Price</label>
          <input
            type="number"
            placeholder="Product price"
            onChange={(e) => setPrice(e.target.value)}
          ></input>

          <button
            onClick={saveProduct}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Save
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default newProduct;
