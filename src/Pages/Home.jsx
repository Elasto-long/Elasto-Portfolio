import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Clients from "../Components/Clients";
import InfoTopBar from "../Components/InfoTopBar";
import AboutSection from "../Components/AboutSection";
import FullPageSlider from "../Components/FullPageSlider";
import CounterSection from "../Components/CounterSection";
import ContactForm from "../Components/ContactForm";
import ProductShowcase from "../Components/ProductShowcase";
import WhatsAppIcon from "../Assets/images/whatsapp.png";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

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

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        <div>
          <FullPageSlider />
          <AboutSection />
          <ProductShowcase />
          <CounterSection />
          <Clients />
          <ContactForm />
        </div>
        <Footer />

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
    </>
  );
};

export default Home;
