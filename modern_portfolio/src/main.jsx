import React from "react";
import ReactDOM from "react-dom/client";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

import "./index.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
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

    {/* Wu */}
    <About />
    <Experience />

    {/* Dan */}
    <Projects />
    <Services />

    {/* AK */}
    <Talks />
    <Contact />
    <Nav />

    {/* Musa */}
    <Footer />
  </React.StrictMode>
);
