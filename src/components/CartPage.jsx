import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = 1; // Replace with dynamic userId if needed

  const fetchCartData = async () => {
    try {
      // Step 1: Get all carts
      const cartRes = await axios.get("https://fakestoreapi.com/carts");

      // Step 2: Filter cart for current user
      const userCart = cartRes.data.filter(cart => cart.userId === userId);

      // Step 3: Extract products with quantity
      const productMap = {};
      userCart.forEach(cart => {
        cart.products.forEach(prod => {
          if (!productMap[prod.productId]) {
            productMap[prod.productId] = prod.quantity;
          } else {
            productMap[prod.productId] += prod.quantity;
          }
        });
      });

      const productIds = Object.keys(productMap);

      // Step 4: Fetch product details
      const productDetails = await Promise.all(
        productIds.map(id => axios.get(`https://fakestoreapi.com/products/${id}`))
      );

      // Step 5: Combine with quantity
      const fullCart = productDetails.map(res => ({
        ...res.data,
        quantity: productMap[res.data.id]
      }));

      setCartItems(fullCart);
    } catch (err) {
      console.error("Error fetching cart data:", err.message);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Loading cart...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
              <div className="mt-2 text-indigo-600 font-bold">₹{Math.floor(item.price * 80)}</div>
              <div className="text-sm mt-1">Quantity: {item.quantity}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;


