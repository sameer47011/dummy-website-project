// import { useState } from "react";
// import "./App.css";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrders from "./pages/PlaceOrders";
// import Orders from "./pages/Orders";
// import Navbar from "./components/Navbar";
// import { Route, Routes,BrowserRouter } from "react-router-dom";
// import ProductsItem from "./pages/ProductsItem";

// function App() {
//   return (
//     <>
//       <div className="px-4 sm:px-[5vm] md:px[7vw lg:px-[9vw]">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/product:productId" element={<Product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/place-order" element={<PlaceOrders />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="/productsItem" element={<ProductsItem />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrders from "./pages/PlaceOrders";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import ProductsItem from "./pages/ProductsItem";

function App() {
  return (
    // <BrowserRouter>
      <div className="px-4 sm:px-[5vm] md:px[7vw lg:px-[9vw]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrders />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/productsItem" element={<ProductsItem />} />
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;
