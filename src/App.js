import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/index";
import About from "./components/pages/About/index";
import Footer from "./components/Footer";
import ReadMore from "./components/pages/ReadMore";

function App() {
  return (
    <>
      <Header />
      {/* <ReadMore /> */}
      <Home />
      <About /> 
      <Footer />
    </>
  );
}

export default App;
