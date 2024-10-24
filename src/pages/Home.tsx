import React from 'react';
import { ArrowRight, Star, TrendingUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Next Favorite Book
            </h1>
            <p className="text-xl mb-8">
              Discover thousands of second-hand books at unbeatable prices
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Browse Books
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Fiction', 'Non-Fiction', 'Academic', 'Children'].map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="group"
            >
              <div className="bg-indigo-50 rounded-lg p-6 text-center transition-all duration-200 group-hover:bg-indigo-100">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Books</h2>
          <Link
            to="/products"
            className="text-indigo-600 hover:text-indigo-500 font-semibold flex items-center"
          >
            View all
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((book) => (
            <Link key={book} to={`/product/${book}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={`https://source.unsplash.com/random/400x500?book&sig=${book}`}
                  alt="Book cover"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.5</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Book Title {book}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">Author Name</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-indigo-600">
                      $19.99
                    </span>
                    <span className="text-sm text-gray-500">Like New</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Bookzie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: 'Best Prices',
                description:
                  'Compare prices across multiple sellers to get the best deal',
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: 'Quality Assured',
                description:
                  'All books are verified for quality and condition before listing',
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: 'Huge Selection',
                description:
                  'Thousands of books across multiple categories and genres',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;