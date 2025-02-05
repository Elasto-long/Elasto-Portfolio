import React from "react";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Products } from "../../Data/Products";

const SideBar = ({ selectedProductId }) => {
  return (
    <div className="w-[20%] h-auto border-r bg-white shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-700">Type of Products</h2>
      <div className="space-y-4">
        {Products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`} // Navigate to a new page
            className={`flex justify-between items-center py-3 px-5 rounded-sm cursor-pointer transition-all duration-200 font-medium shadow-sm
            ${selectedProductId === product.id
              ? "bg-[#ffda31] text-black shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="truncate">{product.title}</span>
            <ChevronRightRoundedIcon
              className={`${selectedProductId === product.id ? "text-black" : "text-gray-500"}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
