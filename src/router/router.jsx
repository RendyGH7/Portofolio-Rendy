import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Project from "../pages/projects/project";
import About from "../pages/about/about";
import Experience from "../pages/experience/experience";
import Contact from "../pages/contact/contact";
import Navbar from "../components/navbar/navbar";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Router;