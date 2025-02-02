import React, { useEffect, useRef } from "react";
import me from "../assets/me.svg";
import Me from "../assets/kira1.png";
import { Button, Flex, Typography } from "antd";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Link } from "react-scroll";

const { Text } = Typography;

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<span >A Full Stack Web Developer</span>"],
      typeSpeed: 90,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      id="home"
      className="flex  flex-col pt-[100px] md:pt-0 gap-10 md:gap-0 md:flex-row lg:flex-row items-center  md:justify-between lg:mr-24 mx-6 lg:ml-[96px]   lg:px-10  2xl:mx-40  min-h-screen "
    >
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.9 }}
        className="flex flex-col gap-[30px] items-center md:items-start text-center md:text-start"
      >
        <div>
          <h1>
            <Text strong className="text-[30px]">
              Hey,
            </Text>
          </h1>

          <Text strong className="text-[30px]">
            I am Kirubel , <span className="text-primary-900" ref={el} />
          </Text>
        </div>
        <Text className=" text-[20px]">
          I transform ideas into elegant web solutions with full-stack expertise
        </Text>
        <Flex gap="small" vertical style={{ width: "180px" }}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
                rotate: "2.5deg",
              }}
              className="bg-primary-900  border-0 rounded-md px-[7px]"
              style={{ height: "40px", width: "155px", color: "white" }}
            >
              Explore projects
            </motion.button>
          </Link>
        </Flex>
      </motion.div>
      <div>
        <motion.img
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.9 }}
          src={Me}
          alt="programmer"
          className="w-[500px] mb-[50px] md:mb-0 "
        />
      </div>
    </div>
  );
};

export default Home;
