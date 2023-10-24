import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ademola-adeyemo" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mcdemzy" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Mc__Demzy" target="_blank">
        <RiTwitterXFill />
      </a>
      {/* <a href="https://drrible.com" target="_blank">
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
