import axios from "axios";

export const fetchProducts = () => {
  return axios.get("https://api.escuelajs.co/api/v1/products");
};
