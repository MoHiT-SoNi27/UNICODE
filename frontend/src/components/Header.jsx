import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">UNICODE</div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/codedata" className="hover:text-orange-500">CodeData</Link>
          <Link to="/compete" className="hover:text-orange-500">Compete</Link>
          <Link to="/jobs" className="hover:text-orange-500">Jobs</Link>
          <Link to="/about" className="hover:text-orange-500">About Us</Link>
        </nav>
        <div className="relative">
          <input type="text" className="p-2 rounded bg-gray-800 text-gray-300" placeholder="Type to Search" />
          <button className="absolute right-0 top-0 p-2 bg-orange-500 text-white rounded-r">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
