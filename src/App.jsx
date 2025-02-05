import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About.jsx";
// import Product from "./Components/Product/Product.jsx";
import ContactPage from "./Components/ContactPage.jsx";
import Product from "./Components/Product/Product.jsx";
import ProductDetail from "./Components/Product/ProductDetail.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
