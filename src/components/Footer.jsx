import { Typography } from "antd";
import React from "react";

const { Text } = Typography;

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className=" flex items-center justify-center text-center h-[60px]">
      <Text
        strong
        className=" text-primary-900  text-[13px] pt-[15px] pb-[10px]"
      >
        @ ALL-RIGHTS RESERVED TO KIRUBEL MELAKU {currentYear}
      </Text>
    </div>
  );
};

export default Footer;
