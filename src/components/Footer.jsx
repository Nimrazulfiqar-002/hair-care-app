import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-green-800 py-8 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
       
        <div className="text-2xl font-bold font-serif">HairCare App</div>

        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-green-600 transition">Home</a>
          <a href="/about" className="hover:text-green-600 transition">About</a>
          <a href="/contact" className="hover:text-green-600 transition">Contact</a>
          <a href="/privacy" className="hover:text-green-600 transition">Privacy</a>
        </div>

        
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-green-600"><FaFacebookF /></a>
          <a href="#" className="hover:text-green-600"><FaInstagram /></a>
          <a href="#" className="hover:text-green-600"><FaTwitter /></a>
        </div>
      </div>

  
      <div className="text-center text-sm text-green-600 mt-6">
        &copy; {new Date().getFullYear()} HairCare App by Nimra Zulfiqar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
