import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Variety from "./Variety";
import Technical from "./Technical";
import Description from "./Description";
import Application from "./Application";
import NavBar from "../NavBar";
import InfoTopBar from "../InfoTopBar";
import Breadcrumbs from "../Breadcrumbs";
import WhatsAppIcon from "../../Assets/images/whatsapp.png";
import Footer from "../Footer";

const Product = () => {
  const [product, setProduct] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(1);

  // Handle scroll event to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after scrolling down 300px
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleProductChange = (product_id) => {
    setProduct(product_id);
    setSelectedProductId(product_id);
    console.log(product);
  };
  const page_header_details = {
    header_name: "Products",
    header_dec: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: "Product Page"
  }
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        <Breadcrumbs page_header_details={page_header_details} />

        <div className="flex gap-2 h-full w-full">

          <SideBar selectedProductId={selectedProductId} handleProductChange={handleProductChange} />
          <div className="w-full h-full p-6">
            <Description product={product} />
            <div className="flex flex-col w-full gap-4">
              <div className="flex w-full gap-4">
                <Application product={product} />
                <Technical product={product} />
              </div>
              <Variety product={product} />
            </div>

          </div>
        </div>
        <a href="https://api.whatsapp.com/send?phone=9075358795&text=Hello" className=" fixed bottom-4 right-3 cursor-pointer">
          <img src={WhatsAppIcon} alt="whatsapp" height="45px" width="45px" />
        </a>
        {/* Scroll to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className=" fixed bottom-[5rem] right-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Product;
