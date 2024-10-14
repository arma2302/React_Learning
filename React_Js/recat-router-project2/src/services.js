export const isLogin = async (email, password) => {
  const apiUrl = "https://dummyjson.com/auth/login";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    console.log(data);

    localStorage.setItem("token", data.accessToken); // Store token in localStorage
    return { error: null, data };
  } catch (error) {
    return { error: error.message };
  }
};

export const hasToken = () => {
  let token = localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const getProducts = async () => {
  try {
    let response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const result = await response.json();

    return { result };
  } catch (error) {
    return { error: error.message };
  }
};

export const getProduct = async (id) => {
  try {
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const result = await response.json();

    return { result };
  } catch (error) {
    return { error: error.message };
  }
};

export const getCartData = () => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  return { cartData };
};

export const addToCart = (product) => {
  // Retrieve the cart data from localStorage or initialize it as an empty array
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product already exists in the cart based on its id
  let existingProduct = cartData.find((item) => item.id === product.id);

  if (existingProduct) {
    console.log("Product already exists in cart");
  } else {
    // If the product doesn't exist, add it with a quantity of 1
    const newProduct = { ...product, q: 1 }; // Spread the product and add a quantity property
    cartData.push(newProduct);
  }

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cartData));

  return { cartData };
};
export const addItem = (id) => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cartData.find((item) => item.id == id);

  if (existingItem) {
    // Update the item's quantity by mapping over the cart
    const updatedData = cartData.map(
      (item) =>
        item.id == id
          ? {
              ...item,
              q: item.q + 1,
            }
          : item // Return the full item, not just item.q
    );

    // Save the updated cart data to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedData));

    return { cartData: updatedData };
  } else {
    console.log("Product not found in cart.");
  }
};
export const removeItem = (id) => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cartData.find((item) => item.id == id);

  if (existingItem) {
    if (existingItem.q === 1) {
      cartData.filter((item) => item.id == !existingItem.id);
    }
    // Update the item's quantity by mapping over the cart
    const updatedData = cartData.map(
      (item) => (item.id == id ? { ...item, q: item.q - 1 } : item) // Return the full item, not just item.q
    );

    // Save the updated cart data to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedData));

    return { cartData: updatedData };
  } else {
    console.log("Product not found in cart.");
  }
};

export const calculateTotalAmount = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartItems);

  return cartItems.reduce((total, item) => {
    return total + item.price * item.q; // Assuming each item has a price and quantity
  }, 0);
};
