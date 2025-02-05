import React from "react";
import { Products } from "../../Data/Products";

const Variety = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <div className="bg-gray-50 shadow-sm  border border-gray-200  rounded-sm p-6 w-full">
      <h3 className="text-xl font-semibold mb-6 text-gray-700">
        Types Available
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedProduct.variety.map((variety, index) => (
          <div
            key={index}
            className="relative bg-white  hover:shadow-sm border border-gray-200 rounded-md overflow-hidden transition-shadow duration-300"
          >
            <img
              src={variety.image[0]}
              alt={`${variety.name} image`}
              className="w-full h-45 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {variety.name}
              </h4>
              <button className="absolute bottom-4 right-4 text-sm px-3 py-1 bg-[#ffda31] text-white rounded-full shadow-md  transition-colors duration-300 cursor-default"></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variety;
