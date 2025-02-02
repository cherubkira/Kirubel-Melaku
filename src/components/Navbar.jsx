import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Tooltip } from "antd";
import { FaBrain } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  const [windowSizeNav, setWindowSizeNav] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSizeNav(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed bottom-10  flex items-center justify-center w-full lg:top-0   lg:right-7 lg:h-screen lg:w-16 z-[999] ">
      <div className=" rounded-full px-5 lg:px-1 py-1 lg:py-6 bg-white opacity-85 lg:opacity-100 border-2 border-primary-50 shadow-2xl flex lg:flex-col items-center gap-4 z-[999] ">
        <Tooltip
          title={windowSizeNav >= 1024 ? "Home" : ""}
          placement="left"
          color="#0d47a1"
          Styles={{ position: "fixed" }}
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            className={`   rounded-full p-3 lg:hover:bg-primary-900 group
             
                  text-primary-900 lg:hover:text-white cursor-pointer transition-opacity duration-1000 text-[12px]`}
          >
            {" "}
            <MdHome className="" size={20} />
          </Link>
        </Tooltip>
        <Tooltip
          title={windowSizeNav >= 1024 ? "About" : ""}
          placement="left"
          color="#0d47a1"
          overlayStyle={{ position: "fixed" }}
        >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            className={`   rounded-full p-3 lg:hover:bg-primary-900 group
             
                  text-primary-900 lg:hover:text-white cursor-pointer transition-opacity duration-1000 text-[12px]`}
          >
            {" "}
            <IoPerson className="" size={20} />
          </Link>
        </Tooltip>
        <Tooltip
          title={windowSizeNav >= 1024 ? "Skills" : ""}
          placement="left"
          color="#0d47a1"
          overlayStyle={{ position: "fixed" }}
        >
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            className={`   rounded-full p-3 lg:hover:bg-primary-900 group
             
                  text-primary-900 lg:hover:text-white cursor-pointer transition-opacity duration-1000 text-[12px]`}
          >
            {" "}
            <FaBrain className="" size={20} />
          </Link>
        </Tooltip>
        <Tooltip
          title={windowSizeNav >= 1024 ? "Projects" : ""}
          placement="left"
          color="#0d47a1"
          overlayStyle={{ position: "fixed" }}
        >
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            className={`   rounded-full p-3 lg:hover:bg-primary-900 group
             
                  text-primary-900 lg:hover:text-white cursor-pointer transition-opacity duration-1000 text-[12px]`}
          >
            {" "}
            <FaProjectDiagram className="" size={20} />
          </Link>
        </Tooltip>
        <Tooltip
          title={windowSizeNav >= 1024 ? "Contact" : ""}
          placement="left"
          color="#0d47a1"
          overlayStyle={{ position: "fixed" }}
        >
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
            className={`   rounded-full p-3 lg:hover:bg-primary-900 group
             
                  text-primary-900 lg:hover:text-white cursor-pointer transition-opacity duration-1000 text-[12px]`}
          >
            {" "}
            <IoMdMail className="" size={20} />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
