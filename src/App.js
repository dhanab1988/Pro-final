import React from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./Main";
import Footer from "./components/Footer";

import "./App.css";
import "./TestimonialsSection.js";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
