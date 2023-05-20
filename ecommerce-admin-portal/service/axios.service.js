import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("/api/products");
  return response;
};

// export const saveCat = async (data) => {
//   const resp = await axios.post("/api/categories", data, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return resp.data;
// };

//same here in categories page
