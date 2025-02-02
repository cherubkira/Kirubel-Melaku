import React from "react";
import { Button, Flex, Typography } from "antd";
import { motion } from "framer-motion";
import { Me } from "../utils";
// import backgroundImage from "../assets/back1.png";
import { Link } from "react-scroll";

const { Text } = Typography;
const About = () => {
  return (
    <div
      className=" flex flex-col bg-opacity-60 justify-evenly bg-primary-50 lg:mr-24 mx-6 lg:ml-[96px]  2xl:mx-40  min-h-screen  md:pt-[20px] lg:px-10  rounded-3xl  shadow-lg  "
      style={{
        backgroundColor: "#DDD5CB",
        // backgroundImage: `url(${backgroundImage})`,
      }}
      id="about"
    >
      <div className="  mt-[60px] mb-[40px] 2xl:mt-0 2xl:mb-0  text-center ">
        <Text className="text-[30px]" strong>
          About-Me
        </Text>
      </div>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="flex  flex-col-reverse gap-[50px] lg:gap-[35px] items-center "
      >
        <div className="flex flex-col gap-5 items-center">
          <div
            className="   max-w-[500px] text-justify mx-[10px] sm:mx-0 sm:max-w-[570px] md:max-w-[700px]
              lg:max-w-[750px]  leading-[25px]  xl:max-w-[850px] 2xl:max-w-[950px]"
          >
            <Text>
              👋 Hello! I'm{" "}
              <span className="text-primary-900  ">Kirubel Melaku</span>, a
              creative Full Stack Web Developer based in Addis Ababa, ETHIOPIA,
              and I'm very passionate and dedicated to my work. With years
              experience as a professional Full Stack Developer, I have acquired
              the skills necessary to build great, appealing, and premium
              websites that meet the latest web standards. Detail-orientated Web
              Developer adept at interpreting blueprints, working with others,
              and meeting production deadlines. Skilled at quickly learning new
              processes, technologies, and machinery. Self-motivated with strong
              organizational and time management abilities. Most importantly,
              I'm constantly trying to learn new skills to improve myself and my
              work.🚀
            </Text>
          </div>
          <div>
            <Flex gap="small" vertical style={{ width: "120px" }}>
              <Link
                to="contact"
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
                  className="bg-primary-900  border-0 rounded-md"
                  style={{
                    height: "40px",
                    width: "100px",
                    color: "white",
                    marginBottom: "60px",
                  }}
                >
                  Let's talk
                </motion.button>
              </Link>
            </Flex>
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-[14px] sm:grid sm:grid-cols-3 ">
          {Me.map(({ Icon, title, data, description }, index) => {
            return (
              <div
                key={index}
                className="shadow-xl p-[15px] border-1 bg-white rounded-xl flex flex-col w-[260px] sm:w-[180px] md:w-[210px] 
                  lg:w-[230px] xl:w-[270px] 2xl:w-[320px]  items-center gap-[5px] "
              >
                <Icon className="text-primary-900" />
                <Text className="text-[23px] text-primary-900">{title}</Text>
                <Text className="text-[14px] ">{data}</Text>
                <Text className="text-[14px] ">{description}</Text>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
