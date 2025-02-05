import React, { useState } from "react";
import { Products } from "../../Data/Products";
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';

const Description = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="border relative border-gray-200 shadow-sm p-6 mb-4 rounded-md bg-white">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        {selectedProduct.title}
      </h3>
      <p className="text-gray-700 text-md font-medium">
        {selectedProduct.description}
      </p>
      {/* <img src={Products.image} alt="" srcset="" /> */}
      <div onClick={() => setIsModalOpen(true)} className="absolute right-1 top-1 rounded-sm !bg-[#ffda31] text-[#010d14] !font-[600] cursor-pointer !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:!bg-black  hover:text-[#fff]"><DirectionsRoundedIcon className="mr-2" />Want a custom product ?</div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Container */}
          <div className="bg-white w-[90%] max-w-4xl rounded-xl shadow-lg p-6 relative transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-800">How does it work?</h2>
              <p className="text-gray-500 mt-2">
                Explore the steps below to understand the process in a simple way.
              </p>
            </div>

            {/* Steps Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  📱
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 1</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Register your account and set up your profile.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  👤
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 2</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Connect with the community or team.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  📄
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 3</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Upload your documents or tasks for review.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  ⭐
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 4</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Get feedback and achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Description;
