import React, { useState } from 'react';
import axios from 'axios';

const ShoppingCard = ({ data }) => {
  const [itemCounts, setItemCounts] = useState({});

  const handleAddItem = async (productId) => {
    try {
      const cart = { userId: 1, productId };
      const res = await axios.post("https://fakestoreapi.com/carts", {
      cart
      });

     

      setItemCounts(prevCounts => ({
        ...prevCounts,
        [productId]: (prevCounts[productId] || 0) + 1
      }));
    } catch (err) {
      console.error("Error adding item to cart:", err);
    }
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
      {data.map((product) => (
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
              onClick={() => handleAddItem(product.id)}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              {itemCounts[product.id] ? `Added (${itemCounts[product.id]})` : "Add to Cart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCard;

  



