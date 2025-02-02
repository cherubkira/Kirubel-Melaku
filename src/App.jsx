import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { ConfigProvider } from "antd";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PreLoader from "./components/PreLoader";
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#2196f3",
        },
      }}
    >
      <div className="w-full  min-h-screen bg-white  ">
        <PreLoader />
        <ToastContainer position="top-center" />

        <Header />
        <Navbar />

        <Home />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </div>
    </ConfigProvider>
  );
};

export default App;
