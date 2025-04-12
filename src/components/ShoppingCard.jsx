import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const ShoppingCard = ({ data, updateCartCount }) => {
  const [cart, setCart] = useState([]);

 
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleAddItem = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount(updatedCart.length); 
    toast.success(`${product.title} added to cart!`);
  };

  if (!data || data.length === 0) {
    return (
      <div className="max-w-sm mx-auto p-4 text-center text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((product) => {
        const cartItem = cart.find(item => item.id === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain p-4 bg-gray-50"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1 line-clamp-3">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-indigo-600">
                  ₹{Math.floor(product.price * 80)}
                </span>
                <div className="text-sm text-yellow-500">
                  ⭐ {product.rating?.rate}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => handleAddItem(product)}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                {quantity > 0 ? `Added (${quantity})` : "Add to Cart"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCard;
  



