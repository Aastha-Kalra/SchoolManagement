import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Images = [
  {
    imageUrl:
      "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC_0395-1-1-1-1-scaled.webp",
  },
  {
    imageUrl: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/sre3.jpg",
  },
  {
    imageUrl: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/sre5.jpg",
  },
];
let count = 0;
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  const removeAnim = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnim);
    startSlider();
  });
  const startSlider = () => {
    setInterval(() => {
      handleNext();
      handlePrev();
    }, 12000);
  };
  const handlePrev = () => {
    const productsLength = Images.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleNext = () => {
    count = (count + 1) % Images.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div className="w-full pb-4" id="home">
      <div ref={slideRef} className="w-full relative">
        <div className="">
          <img
            src={Images[currentIndex].imageUrl}
            alt=""
            className="w-full h-[86vh]"
          />
        </div>

        <div className="absolute w-full top-80 flex justify-between">
          <button
            onClick={handlePrev}
            className="text-green-800 font-bolder text-4xl px-4 py-4"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="text-green-800 font-bolder text-4xl px-4 py-4"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
