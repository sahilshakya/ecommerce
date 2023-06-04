import FeatureProduct from "@/components/FeatureProduct";
import NavBar from "@/components/NavBar";
import NewProducts from "@/components/newProducts";

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ products, product }) {
  return (
    <>
      <NavBar />
      <FeatureProduct product={product} />
      <NewProducts products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "64731841fc2037d6184e527b";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);

  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      product: JSON.parse(JSON.stringify(featuredProduct)),
      products: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
