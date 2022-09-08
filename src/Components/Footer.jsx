import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <footer
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
      ref={ref}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* Logo */}
        <div
          className="flex-1 flex flex-col justify-start mr-10"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Links */}
        <div
          className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              {/* Link header */}
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-3">
                {footerLink.title}
              </h4>
              {/* links */}
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright section - bottom */}
      <div
        className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white mb-3">
          Copyright Ⓒ 2022{" "}
          <a
            href="https://meraj-main-portfolio.pages.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-gradient border-b border-blue-400"
          >
            Meraj Mazidi
          </a>{" "}
          . All Rights Reserved.
        </p>

        {/* social media icons */}
        <div
          className="flex flex-row md:mt-0 mt-6"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {socialMedia.map((social, index) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={index}>
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[30px] h-[30px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                } hover:shadow-lg hover:shadow-blue-400 rounded-md`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
