import React from "react";
import { motion } from "framer-motion";
import products from "../data/products.json";

const ProductList = ({ selectedProblem }) => {
  if (!selectedProblem || !products[selectedProblem]) return null;

  return (
    <motion.div
      className="bg-green-100 p-6 rounded-xl shadow-lg mt-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Recommended Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products[selectedProblem].map((product, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-start gap-4 transition-transform hover:scale-105"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            <img
              src={product.image} 
              alt={product.name}
              className="w-24 h-24 object-fit rounded-md shadow-sm"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-green-800">
                {product.name}
              </h3>
              <p className="text-sm text-green-600 mb-2">Brand: {product.brand}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {Object.entries(product.prices).map(([store, price]) => (
                  <li key={store} className="flex justify-between">
                    <span>{store}:</span>
                    <span className="font-medium">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductList;
