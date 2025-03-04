import React from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
// import About from "./components/about/About";
// import Team from "./components/team/Team";
// import Blog from "./components/blog/Blog";
// import Contact from "./components/contact/Contact";

function App() {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/journal" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
