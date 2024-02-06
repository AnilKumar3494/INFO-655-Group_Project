import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Talks from "./components/talks/Talks";
import Footer from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Talks />
    <Footer />
  </React.StrictMode>
);
