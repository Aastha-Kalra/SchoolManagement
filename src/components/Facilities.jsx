import React from "react";
import { SiSmartthings } from "react-icons/si";
import { MdScience } from "react-icons/md";
import { MdLocalLibrary } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaMusic } from "react-icons/fa6";
const Facilities = () => {
  const services = [
    {
      icon: <SiSmartthings />,
      heading: "Smart classrooms",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },

    {
      icon: <MdScience />,
      heading: "Laboratories",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      icon: <MdLocalLibrary />,
      heading: " Library",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      icon: <RiComputerLine />,
      heading: "Computer Lab",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      icon: <FaMusic />,
      heading: " Library",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
    {
      icon: <MdLocalLibrary />,
      heading: " Sports and Music facilities",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
    },
  ];
  return (
    <div className="px-24 mt-14">
      <div className="text-3xl font-extrabold text-green-700">
        WHAT WE OFFER
      </div>

      <p className="text-lg">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem
      </p>

      <div className="grid grid-cols-2 gap-10 my-10">
        {services.map((ser, i) => {
          return (
            <>
              <div
                className=" shadow-green-300 shadow-2xl flex justify-center gap-10 items-center rounded-md p-10"
                key={i}
              >
                <div className="text-8xl">{ser.icon}</div>
                <div>
                  <span className="font-bold text-xl text-justify">
                    {ser.heading}
                  </span>
                  <p>{ser.text}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
