import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-green-900 px-16 py-3 text-white sticky top-0 z-50">
      <strong className="text-xl">BRIGHTON</strong>
      <div className="flex gap-5">
        <a href="/">Home</a>
        <a href="https://aktu.ac.in/syllabus.html" target="blank">
          Syllabus
        </a>
        <a href="https://aktu.ac.in/iccca2020/paper_submission_guidline.html">Guidelines</a>
        <a href="#contact">Contact Us </a>
      </div>
    </div>
  );
};

export default Navbar;
