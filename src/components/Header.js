import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-between items-center px-6">
      <h1 className="text-2xl font-bold">Binnus</h1>
      <nav>
        <a href="#home" className="mx-4 text-gray-600">Home</a>
        <a href="#products" className="mx-4 text-gray-600">Products</a>
        <a href="#contact" className="mx-4 text-gray-600">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
