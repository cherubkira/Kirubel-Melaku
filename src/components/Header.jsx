import React from "react";
import { toast } from "react-toastify";
import { Typography } from "antd";
import Navbar from "./Navbar";

const { Text } = Typography;
const Header = () => {
  const phoneNumber = "+251963379162";

  const handlePhoneIconClick = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Phone number copied to clipboard");
    } catch (error) {
      toast.error("Unable to copy to clipboard");
    }
  };
  return (
    <div className="fixed top-0 w-full flex items-center justify-between md:px-[24px] px-6 lg:px-[136px] 2xl:px-[200px] h-[50px] bg-white  z-[999]">
      <Text strong className="text-primary-900 text-[21px] sm:text-[22px]  ">
        Kirubel Melaku
      </Text>
      <Navbar />
    </div>
  );
};

export default Header;
