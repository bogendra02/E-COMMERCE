import axios from "axios";

const API_BASE_URL = "http://localhost:9090/back1/api/products";

// Fetch products by category (or all if empty)
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Construct full URL to access product image
export const getProductImageUrl = (imagePath) => {
  return `${API_BASE_URL}/images/${imagePath}`;
};
