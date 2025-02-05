import { Link } from "react-router-dom";
import footerImg from "../Assets/images/footer.jpg";
import clientLogo from "../Assets/images/logo-nobg.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center pt-10 md:pt-16 lg:pt-20"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      {/* Logo */}
      <div className="flex justify-center mb-6 md:mb-10 lg:mb-12">
        <img className="h-12 md:h-16 lg:h-20 w-auto" src={clientLogo} alt="logo" />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between text-white w-full px-6 md:px-12 lg:px-20 xl:px-[300px] gap-8 md:gap-12">
        
        {/* Address Section */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Address</div>
          <div className="md:w-72 lg:w-80">
            <p className="flex items-start">
              <LocationOnOutlinedIcon sx={{ color: "#ffd930", marginRight: "8px" }} />
              ELASTOMECH Plot No. A, 28, Anand Nagar, Additional M.I.D.C, Ambernath, Maharashtra 421506
            </p>
          </div>
        </div>

        {/* Products Section with Routing */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Products</div>
          <ul className="flex flex-col gap-1 w-full cursor-pointer">
            {[
              { name: "Dock Fenders", path: "/products/1" },
              { name: "Dock Bumpers", path: "/products/2" },
              { name: "Wheel Chockers", path: "/products/3" },
              { name: "Speed Breakers", path: "/products/4" },
              { name: "House Ramps", path: "/products/5" },
              { name: "Cable Protectors", path: "/products/6" },
              { name: "Rubber Buffers/Stoppers", path: "/products/7" },
              { name: "Tipper-Pads", path: "/products/8" },
              { name: "Wall/Corner Guards", path: "/products/9" },
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-center text-white transition-all duration-300 text-[14px] md:text-[16px] custom-hover-effect">
                <KeyboardArrowRightIcon />
                <Link 
  to={item.path} 
  className="hover:text-[#ffd930]"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  {item.name}
</Link>

              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Contact Us</div>
          <ul className="flex flex-col gap-2 md:gap-3">
            <li className="flex gap-2 items-center hover:text-[#ffd930] text-sm md:text-base lg:text-lg">
              <ForwardToInboxIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="mailto:sales.elastomech@gmail.com">sales.elastomech@gmail.com</a>
            </li>
            <li className="flex gap-2 items-center hover:text-[#ffd930] text-sm md:text-base lg:text-lg">
              <CallOutlinedIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="tel:+91 90753 58795">+91 90753 58795</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#3336] mt-10 p-4 md:p-6 flex items-center text-white">
        <span className="mx-auto text-center text-sm md:text-base">
          © ELASTOMECH, All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
