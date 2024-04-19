import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendMessage = () => {
    if (
      input.email === null ||
      input.email === "" ||
      input.name === null ||
      input.name === "" ||
      input.message === null ||
      input.message === ""
    ) {
      alert("Please enter your details");
    } else {
      console.log(input);
      setInput({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div
    data-aos="fade-down-right" data-aos-delay="100" data-aos-duration="2000" 
      className="w-full h-full text-green-600 bg-lime-300 text-xl "
      id="contact"
    >
        <div className="text-green-700 font-bold text-center text-2xl pt-10">
        REQUEST A CALL BACK
        </div>

      <div className="w-full h-full text-lg  my-14 flex px-5 gap-4 xl:flex-row flex-col text-white">
        <div className="flex flex-col gap-10 w-full md:pl-1 ">
          <div className="flex justify-center items-center gap-10 bg-green-700 py-5 rounded-xl w-full">
            <span className="text-red-800 font-bold ">
              <CgMail size={60} />
            </span>
            <span>brighton@gmail.com</span>
          </div>
          <div className="flex justify-center items-center gap-10 bg-green-700 py-5 rounded-xl">
            <span className="text-blue-900 font-bold ">
              <FaLinkedin size={60} />
            </span>
            <span>https://www.linkedin.com/in/brighton</span>
          </div>
          <div className="flex justify-center items-center gap-10 bg-green-700 py-5 rounded-xl">
            <span className="text-black font-bold ">
              <FaTwitter size={60} />
            </span>
            <span>https://twitter.com/brighton</span>
          </div>
        </div>

        <div className="text-5xl text-center">OR</div>

        <div className="flex flex-col gap-10 w-full  text-white">
          <form action="" className="xl:pr-28 flex flex-col gap-10 w-full">
            <input
              type="text"
              className="bg-transparent border-2 border-green-500 h-20 rounded-2xl w-full p-4 text-black focus:outline-none"
              value={input.name}
              name="name"
              onChange={handleInput}
              placeholder="Your Name"
            />
            <input
              type="email"
              className="bg-transparent border-2 border-green-500 h-20 rounded-2xl w-full p-4 text-black focus:outline-none"
              value={input.email}
              name="email"
              onChange={handleInput}
              placeholder="Your Email"
            />
            <textarea
              type="text"
              name="message"
              className="bg-transparent border-2 border-green-500 h-96 rounded-2xl w-full p-4 text-black focus:outline-none"
              value={input.message}
              onChange={handleInput}
              placeholder="Your Message"
            />
            <div>
              <button
                type="button"
                className="bg-green-800 px-20 py-7 my-5 rounded-3xl hover:bg-green-600 shadow-xl shadow-green-500 focus:outline-none"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
