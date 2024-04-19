import React, {useState } from "react";
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
  const handlePrev = () => {
    const productsLength = Images.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };
  const handleNext = () => {
    count = (count + 1) % Images.length;
    setCurrentIndex(count);
  };

  return (
    <div className="w-full pb-4" id="home">
      <div className="w-full relative">
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
            className="text-yellow-300 font-bolder text-4xl px-4 py-4"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="text-yellow-300 font-bolder text-4xl px-4 py-4"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
