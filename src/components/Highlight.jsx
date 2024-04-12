import React from "react";

const Highlight = () => {
  const Images = [
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC_0514-1-1-768x512.webp",
    },
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/51279604717_3863c37525_o-1-768x512.webp",
    },
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC_0319-1-768x512.webp",
    },
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC_0528-1-1-768x512.webp",
    },
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC6738-1-768x512.webp",
    },
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC_0347-1-1-768x512.webp",
    },
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC_0484-1-1-1-768x512.webp",
    },
    {
      img: "https://www.dbgisre.edu.in/wp-content/uploads/2023/07/DSC_7019-1-768x512.webp",
    },
  ];
  return (
    <div className="bg-blue-600 p-10 my-10 ">
      <div className="text-white font-extrabold text-4xl text-center my-10">
        Our Highlights
      </div>
      <div className="grid grid-cols-4 gap-10">
        {Images.map((image) => {
          return (
            <div>
              <img src={image.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlight;
