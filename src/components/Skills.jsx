import React from "react";
import { langs } from "../utils";
import { motion } from "framer-motion";
import backgroundImage from "../assets/black-thread-light.png";
import { Typography } from "antd";
const { Text } = Typography;
const Skills = () => {
  return (
    <div className="   min-h-screen pt-[50px] pb-[60px] " id="skills">
      <div
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="pt-[30px] pb-[40px] px-[15px] rounded-3xl shadow-sm "
      >
        <div className="lg:mr-24 mx-6 lg:ml-[96px]  2xl:mx-40  lg:px-10 ">
          <div className="  text-center">
            <Text className="text-[30px]" strong>
              Skills
            </Text>
          </div>
          <div className="grid grid-cols-3  sm:grid-cols-4 gap-[20px] md:grid-cols-5  lg:grid-cols-6 mt-[30px]   ">
            {langs.map(({ name, logo }, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ delay: index * 0.07 }}
                  key={index}
                  className="flex flex-col items-center gap-[10px]"
                >
                  <div
                    className="rounded-full shadow-2xl bg-white flex items-center justify-center h-[80px] w-[80px] sm:h-[100px] 
              sm:w-[100px]"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="h-[42px] w-[42px] sm:h-[50px] sm:w-[50px]"
                    />
                  </div>
                  <Text>{name}</Text>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
