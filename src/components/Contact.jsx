import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { TbBrandTelegram } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Form, Input, Button, notification, Typography } from "antd";
import Footer from "./Footer";

const { TextArea } = Input;
const { Text } = Typography;
const Contact = () => {
  const onFinish = (values) => {
    const isValid = Object.values(values).every(
      (value) => value?.trim()?.length >= 1
    );

    if (!isValid) {
      console.log("Form has empty fields!");
      return;
    }

    console.log("Form submitted:", values);
  };

  const copyNumber = () => {
    navigator.clipboard.writeText("+251954617508");
    alert("Phone number copied!");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white">
        {/* Section Title */}
        <h3 className="text-primary-900 uppercase tracking-wide text-lg font-semibold">
          Contact Me
        </h3>
        <h2 className="text-4xl font-bold text-center d_bg_secondary_color mt-2">
          Let's Chat & Build Something Amazing!
        </h2>

        {/* Icons Row for Small Screens */}
        <div className="w-full flex justify-center gap-4 md:hidden mt-6">
          {[
            { icon: HiOutlineMail, link: "mailto:kiracherub866@gmail.com" },
            { icon: SiGithub, link: "https://github.com/cherubkira" },
            {
              icon: FaLinkedin,
              link: "https://www.linkedin.com/in/kirubel-melaku54",
            },

            { icon: TbBrandTelegram, link: "https://t.me/CherubKIA1" },
            { icon: BsTelephone, link: "#" },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-primary-900 rounded-lg shadow-lg hover:scale-105 transition"
            >
              <Icon size={28} className="text-white" />
            </a>
          ))}
        </div>

        {/* Content Wrapper */}
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 mt-12">
          {/* Contact Info (Hidden on Small Screens) */}
          <div className="w-full md:w-2/5 flex-col gap-6 hidden md:flex">
            <p className="text-lg d_bg_secondary_color font-medium">
              Let's create something together
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: HiOutlineMail,
                  text: "Email",
                  link: "mailto:kiracherub866@gmail.com",
                },
                {
                  icon: SiGithub,
                  text: "GitHub",
                  link: "https://github.com/cherubkira",
                },
                {
                  icon: FaLinkedin,
                  text: "Linkedin",
                  link: "https://www.linkedin.com/in/kirubel-melaku54",
                },
                {
                  icon: TbBrandTelegram,
                  text: "Telegram",
                  link: "https://t.me/CherubKIA1",
                },
                { icon: BsTelephone, text: "Phone", link: "#" },
              ].map(({ icon: Icon, text, link }, index) => (
                <a
                  key={index}
                  href={link === "#" ? undefined : link}
                  target={link !== "#" ? "_blank" : undefined}
                  onClick={link === "#" ? copyNumber : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-primary-900 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-900 rounded-lg">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{text}</p>
                    <p className="text-sm text-primary-900">
                      Go to {text.toLowerCase()}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-3/5 bg-white p-6 rounded-xl shadow-lg ">
            <Text strong className="text-lg text-primary-900">
              Send a message
            </Text>
            <Form
              layout="vertical"
              name="contact"
              onFinish={onFinish}
              autoComplete="off"
              className="mt-4"
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your full name!" },
                  {
                    pattern: /^[A-Za-z\s]+$/, // Only allows letters and spaces
                    message: "Name can only contain letters (A-Z, a-z)",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-primary-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-primary-900"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="johndoe@gmail.com"
                  className="w-full px-4 py-3 border border-primary-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-primary-900"
                />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="I want to build an e-commerce website..."
                  allowClear
                  className="w-full px-4 py-3 border border-primary-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-900 text-primary-900"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-3/12 bg-primary-900 hover:bg-primary-900 text-white font-bold py-3 rounded-lg transition-all"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
