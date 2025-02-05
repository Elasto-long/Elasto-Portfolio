import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../Data/Products";
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
const ProductDetail = () => {
  const { productId } = useParams();
  const product = Products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const page_header_details = {
    header_name: "Products",
    header_dec: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: product.title, // Dynamic title
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        <Breadcrumbs page_header_details={page_header_details} />

        <div className="flex gap-2 h-full w-full">
          <SideBar selectedProductId={product.id} />

          <div className="w-full h-full p-6">
            <Description product={product.id} />
            <div className="flex flex-col w-full gap-4">
              <div className="flex w-full gap-4">
                <Application product={product.id} />
                <Technical product={product.id} />
              </div>
              <Variety product={product.id} />
            </div>
          </div>
        </div>

        <a href="https://api.whatsapp.com/send?phone=9075358795&text=Hello" className="fixed bottom-4 right-3 cursor-pointer">
          <img src={WhatsAppIcon} alt="whatsapp" height="45px" width="45px" />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
