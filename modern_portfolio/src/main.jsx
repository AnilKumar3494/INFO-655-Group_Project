import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Talks from "./components/talks/Talks";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Services />
    <Talks />
    <Contact />
    <Footer />
  </React.StrictMode>
);
