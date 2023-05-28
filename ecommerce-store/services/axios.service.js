const { default: axios } = require("axios");

const BACKEND_URL = "http://localhost:3000/products?id=";

export const getProductByID = async (id) => {
  const response = await axios.get(BACKEND_URL + `?id=${id}`);
  return response;
};

export const getProducts = async () => {
  const response = await axios.get(BACKEND_URL);
  return response;
};
