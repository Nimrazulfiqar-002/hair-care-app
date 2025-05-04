import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-green-50 text-gray-800 px-8 py-4 flex justify-between items-center font-serif">
      <h1 className="text-2xl font-bold tracking-wide text-green-700">
        HAIRCARE APP
      </h1>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/problem" className="hover:text-green-600">
            Problem
          </Link>
        </li>
        <li>
          <Link to="/Finddoctor" className="hover:text-green-600">
            Find Doctor
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-600">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
