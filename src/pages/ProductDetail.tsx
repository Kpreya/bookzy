import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, TrendingDown } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const priceComparison = [
    { seller: 'BookStore A', price: 19.99, condition: 'Like New', rating: 4.5 },
    { seller: 'BookStore B', price: 22.99, condition: 'New', rating: 4.8 },
    { seller: 'BookStore C', price: 17.99, condition: 'Very Good', rating: 4.2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={`https://source.unsplash.com/random/600x800?book&sig=${id}`}
            alt="Book cover"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">The Great Book Title</h1>
            <p className="text-xl text-gray-600">by Author Name</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">(128 reviews)</span>
          </div>

          <div className="border-t border-b border-gray-200 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-indigo-600">$19.99</span>
              <span className="text-lg text-gray-600">Condition: Like New</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border-r hover:bg-gray-50"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border-l hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-50">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Price Comparison */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingDown className="h-5 w-5 mr-2" />
              Price Comparison
            </h2>
            <div className="space-y-3">
              {priceComparison.map((seller, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{seller.seller}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {seller.rating} • {seller.condition}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-600">${seller.price}</div>
                    <button className="text-sm text-indigo-600 hover:text-indigo-700">
                      View Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;