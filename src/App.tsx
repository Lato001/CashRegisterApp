import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/products" element={<ProductsPage></ProductsPage>} />
        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/contact" element={<ContactPage></ContactPage>} />
      </Routes>
    </>
  );
}

export default App;
