import React, { useState } from 'react';
import { Slider, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const conditions = ['New', 'Like New', 'Very Good', 'Good', 'Acceptable'];
  const categories = ['Fiction', 'Non-Fiction', 'Academic', 'Children', 'Comics', 'History'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </h3>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Condition */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Condition</h4>
              <div className="space-y-2">
                {conditions.map((condition) => (
                  <label key={condition} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedConditions.includes(condition)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedConditions([...selectedConditions, condition]);
                        } else {
                          setSelectedConditions(selectedConditions.filter((c) => c !== condition));
                        }
                      }}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{condition}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">All Books</h2>
            <p className="text-gray-600">Showing 1-12 of 100 results</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <Link key={index} to={`/product/${index + 1}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={`https://source.unsplash.com/random/400x500?book&sig=${index}`}
                    alt="Book cover"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Book Title {index + 1}</h3>
                    <p className="text-gray-600 text-sm mb-2">Author Name</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-indigo-600">$19.99</span>
                      <span className="text-sm text-gray-500">Like New</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 rounded-md ${
                    page === 1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 rounded-md bg-white text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;