import axios from "axios";

const CART_API_URL = "http://localhost:9090/back1/api/cart";

// Add product to cart
export const addToCart = async (userId, productId) => {
  return await axios.post(`${CART_API_URL}/add`, {
    userId,
    productId,
    quantity: 1,
  });
};

// Get all cart items for a user
export const getCartItems = async (userId) => {
  const response = await axios.get(`${CART_API_URL}/user/${userId}`);
  return response.data;
};

// Clear entire cart for a user
export const clearCart = async (userId) => {
  return await axios.delete(`${CART_API_URL}/clear/${userId}`);
};

// Remove a single item from the cart
export const removeCartItem = async (cartItemId) => {
  try {
    await axios.delete(`${CART_API_URL}/remove/${cartItemId}`);
  } catch (error) {
    console.error("Error removing item from cart", error);
  }
};
