'use client';
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const itemData = [
    {
      img: '/images/team2.jpeg',
      title: 'First Team',
      description: 'Our first team jersey',
      price: '$50',
      status: 'available',
    },
    {
      img: '/images/team3.jpeg',
      title: 'Books',
      description: 'UEBL Wolves notebook',
      price: '$15',
      status: 'sold',
    },
    {
        img: '/images/team2.jpeg',
        title: 'First Team',
        description: 'Our first team jersey',
        price: '$50',
        status: 'available',
      },
      {
        img: '/images/team3.jpeg',
        title: 'Books',
        description: 'UEBL Wolves notebook',
        price: '$15',
        status: 'sold',
      },
      {
        img: '/images/team2.jpeg',
        title: 'First Team',
        description: 'Our first team jersey',
        price: '$50',
        status: 'available',
      },
      {
        img: '/images/team3.jpeg',
        title: 'Books',
        description: 'UEBL Wolves notebook',
        price: '$15',
        status: 'sold',
      },
      {
        img: '/images/team2.jpeg',
        title: 'First Team',
        description: 'Our first team jersey',
        price: '$50',
        status: 'available',
      },
      {
        img: '/images/team3.jpeg',
        title: 'Books',
        description: 'UEBL Wolves notebook',
        price: '$15',
        status: 'sold',
      },
      {
        img: '/images/team2.jpeg',
        title: 'First Team',
        description: 'Our first team jersey',
        price: '$50',
        status: 'available',
      },
      {
        img: '/images/team3.jpeg',
        title: 'Books',
        description: 'UEBL Wolves notebook',
        price: '$15',
        status: 'sold',
      },
      {
        img: '/images/2018.jpeg',
        title: 'First Team',
        description: 'Our first team jersey',
        price: '$50',
        status: 'available',
      },
      {
        img: '/images/2022.jpeg',
        title: 'Books',
        description: 'UEBL Wolves notebook',
        price: '$15',
        status: 'available',
      },
  ];
  

export default function ShopPage() {
  const { cartItems, addItem, removeItem } = useCart();
  const [popup, setPopup] = useState({ visible: false, message: '' });

  useEffect(() => {
    let timeout;
    if (popup.visible) {
      timeout = setTimeout(() => {
        setPopup({ ...popup, visible: false });
      }, 3000); 
    }

    return () => clearTimeout(timeout); 
  }, [popup.visible]);

  const handleToggleCart = (item) => {
    if (cartItems.some(cartItem => cartItem.title === item.title)) {
      // Remove item from cart
      removeItem(item.title);
      setPopup({ visible: true, message: `${item.title} removed from cart` });
    } else {
      // Add item to cart
      addItem(item);
      setPopup({ visible: true, message: `${item.title} added to cart` });
    }
  };

  const closePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-wrap justify-center w-full">
        {itemData.map((item, index) => (
          <div
            key={index}
            className="relative p-4 m-4 border rounded-lg shadow-md w-64"
          >
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-2 text-lg font-semibold">{item.title}</div>
            <div className="text-sm text-gray-500">{item.description}</div>
            <div className="text-lg font-bold mt-1">{item.price}</div>

            {/* Status Indicator */}
            <div
              className={`absolute top-2 right-2 px-2 py-1 rounded-full text-sm text-white ${
                item.status === 'available' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {item.status}
            </div>

            {/* Add/Remove to Cart Button */}
            <button
              onClick={() => handleToggleCart(item)}
              className={`mt-4 px-4 py-2 rounded-md w-full ${cartItems.some(cartItem => cartItem.title === item.title) ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              disabled={item.status === 'sold'}
            >
              {cartItems.some(cartItem => cartItem.title === item.title) ? 'Remove from Cart' : item.status === 'available' ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
        ))}
      </div>

      {/* Popup Notification */}
      {popup.visible && (
        <div className="fixed top-4 right-4 bg-green-400 text-white p-4 rounded-lg shadow-lg mt-16">
          <p>{popup.message}</p>
          <button onClick={closePopup} className="mt-2 px-4 py-2 bg-white-600 rounded text-white hover:bg-gray-700">
            Close
          </button>
        </div>
      )}
    </div>
  );
}

