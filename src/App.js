import React from "react";
import Nav from "./components/Nav";
import Main from "./Main";
import Footer from "./components/Footer";
import "./App.css";
import "./TestimonialsSection.js";

import { CartProvider } from "./context/CartContext.js";


function App() {
  return (
    <CartProvider>
         <Nav />
         <Main />
        <Footer />
    </CartProvider>
  );
}

export default App;
