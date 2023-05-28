import FeatureProduct from "@/components/FeatureProduct";
import NavBar from "@/components/NavBar";
import NewProducts from "@/components/NewProducts";
import { getProductByID, getProducts } from "@/services/axios.service";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [product, setProduct] = useState({
    _id: "646db9d61e549014fcd962bc",
    title: "Mansoon by subin bhattarai",
    description: "Contact us for more info",
    price: 270,
    images: [
      "https://res.cloudinary.com/face-images-kann/image/upload/v1684912591/dmg19gitmz4vlsr2xszo.jpg",
    ],
    category: "646db83d1e549014fcd96291",
    createdAt: "2023-05-24T07:16:38.795Z",
    updatedAt: "2023-05-24T07:16:38.795Z",
    v: 0,
  });

  const [products, setProducts] = useState([
    {
      _id: "646db9d61e549014fcd962bc",
      title: "Mansoon by subin bhattarai",
      description: "Contact us for more info",
      price: 270,
      images: [
        "https://res.cloudinary.com/face-images-kann/image/upload/v1684912591/dmg19gitmz4vlsr2xszo.jpg",
      ],
      category: "646db83d1e549014fcd96291",
      createdAt: "2023-05-24T07:16:38.795Z",
      updatedAt: "2023-05-24T07:16:38.795Z",
      v: 0,
    },
    {
      _id: "646de32cdcef9bdfc6d78a53",
      title: "Camera - Sony",
      description: "High Quality Camera ....\n",
      price: 500,
      images: [
        "https://res.cloudinary.com/face-images-kann/image/upload/v1684923160/fqb6u6kawymcqufnldhf.jpg",
      ],
      category: "646db7f81e549014fcd96286",
      createdAt: "2023-05-24T10:13:00.212Z",
      updatedAt: "2023-05-24T10:13:00.212Z",
      v: 0,
    },
  ]);

  const id = "646db9d61e549014fcd962bc";
  useEffect(() => {
    getProductByID(id).then((values) => {
      console.log(values.data);
      setProduct(values.data);
    });
    getProducts().then((values) => {
      setProducts(values.data);
    });
  }, []);
  return (
    <>
      <NavBar />
      <FeatureProduct product={product} />
      <NewProducts products={products} />
    </>
  );
}
