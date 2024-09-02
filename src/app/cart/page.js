'use client';
import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cartItems, removeItem } = useCart();

  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-2xl font-bold mb-4 mt-16 ">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className=''>Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-center w-full">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="relative p-4 m-4 border rounded-lg shadow-md w-64"
            >
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
              <div className="mt-2 text-lg font-semibold">{item.title}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
              <div className="text-lg font-bold mt-1">{item.price}</div>

              <button
                onClick={() => removeItem(item.title)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
