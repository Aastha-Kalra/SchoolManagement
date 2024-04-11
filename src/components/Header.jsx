import React from "react";
import { BiMobile } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="w-full h-16 bg-green-600 p-4 text-white text-md justify-between flex items-center">
      <div className="flex gap-4 cursor-pointer">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
      </div>

      <div className="flex justify-center items-center gap-5">
        <span className="flex justify-center items-center">
          <BiMobile /> +91 123456789
        </span>

        <span className="justify-center items-center hidden sm:flex">
          <CgMail /> brighton@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Header;
