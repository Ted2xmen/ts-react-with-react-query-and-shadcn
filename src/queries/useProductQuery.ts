import { fetchProducts } from "@/api/fetchProducts";
import { useQuery } from "react-query";

const useProductQuery = () => {
  const { isLoading, data, error, isError } = useQuery(
    ["products"],
    fetchProducts,
    {
      cacheTime: 50000,
    }
  );

  return {
    error,
    isLoading,
    data,
    isError,
  };
};

export default useProductQuery;
