import React from "react";
import { Products } from "../../Data/Products";

const Technical = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <div className="border w-[30%] border-gray-200 shadow-md p-6 rounded-sm bg-gradient-to-b hover:from-yellow-100 transform-cpu from-white to-gray-50">
      <h3 className="text-xl font-semibold mb-6 text-gray-700">Technical Details</h3>
      <div className="divide-y divide-gray-300">
        <div className="py-3 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Material:</span>
          <span className="text-gray-800">{selectedProduct.technicals[0]}</span>
        </div>
        <div className="py-3 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Colour:</span>
          <span className="text-gray-800">{selectedProduct.technicals[1]}</span>
        </div>
        <div className="py-3 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Hardness:</span>
          <span className="text-gray-800">{selectedProduct.technicals[2]}</span>
        </div>
        <div className="py-3 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Tensile Strength:</span>
          <span className="text-gray-800">{selectedProduct.technicals[3]}</span>
        </div>
        <div className="py-3 flex justify-between items-center">
          <span className="text-gray-700 font-medium">Load Bearing Capacity:</span>
          <span className="text-gray-800">{selectedProduct.technicals[4]}</span>
        </div>
      </div>
    </div>
  );
};

export default Technical;
