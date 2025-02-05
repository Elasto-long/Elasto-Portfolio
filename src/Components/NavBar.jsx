import { Link, useLocation } from "react-router-dom";
import clientLogo from "../Assets/images/logo.png";
import ModalDesign from "./Modal";
import { useState } from "react";

const NavBar = () => {
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <header className="menu-area sticky top-[-1px] bg-white shadow z-[999]">
        <div className="container mx-auto flex justify-between items-center py-6 max-[780px]:px-[20px]">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="logo-area">
              <img
                className="normal-logo h-[70px]"
                src={clientLogo}
                alt="logo"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 hidden md:flex justify-center space-x-6 text-gray-800 font-medium">
            <Link
              to="/"
              className={`text-[19px] ${
                isActive("/") ? "text-[#ffda31]" : "hover:text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-[19px] ${
                isActive("/about") ? "text-[#ffda31]" : "hover:text-gray-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`text-[19px] ${
                isActive("/products") ? "text-[#ffda31]" : "hover:text-gray-600"
              }`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`text-[19px] ${
                isActive("/contact") ? "text-[#ffda31]" : "hover:text-gray-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Button */}
            <div
              onClick={handleOpen}
              className="!bg-[#ffda31] text-[#010d14] !font-[600] cursor-pointer !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:!bg-black !rounded-none hover:text-[#fff] max-[780px]:hidden"
            >
              Find A Distributor
            </div>

            {/* Hamburger Icon */}
            <button
              id="nav-expander"
              className="md:hidden flex items-center justify-center"
            >
              <div className="grid grid-cols-3 gap-[5px] w-5 h-5">
                {[...Array(9)].map((_, index) => (
                  <span
                    key={index}
                    className="w-1.5 h-1.5 bg-black rounded-full"
                  ></span>
                ))}
              </div>
            </button>
          </div>
        </div>
      </header>
      {open && (
        <ModalDesign
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default NavBar;
