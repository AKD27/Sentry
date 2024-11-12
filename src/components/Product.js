import React from 'react';
import * as Sentry from '@sentry/react';

const Product = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$20", image: "path/to/image1.jpg" },
    { id: 2, name: "Product 2", price: "$25", image: "path/to/image2.jpg" },
    { id: 3, name: "Product 3", price: "$30", image: "path/to/image3.jpg" },
  ];

  return (
    <section id="products" className="container mx-auto py-20 px-6">
      <h3 className="text-3xl font-bold text-center mb-12">Featured Products</h3>
      <Sentry.ErrorBoundary fallback={<p>Sorry, something went wrong.</p>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-6 text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
            <h4 className="text-xl font-semibold">{product.name}</h4>
            <p className="text-gray-500">{product.price}</p>
            <button 
            onClick={() => {throw new Error("This is your first error!");}}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      </Sentry.ErrorBoundary>
    </section>
  );
};

export default Product;
