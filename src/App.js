import "./styles/reset.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="MainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path='Products' element={<Products />} />
          <Route path="Products/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
