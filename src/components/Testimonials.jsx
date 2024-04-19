import React from "react";

const Testimonials = () => {
  const Details = [
    {
      img: "https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg",
      name: "John Deo",
      feedback:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.",
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJcfgOAc8USRCIZQS-Bo-5eldLn6s5x8h8nY6oQuaeB6KL2hbTC-bSgNd0TTvIJaN-nY&usqp=CAU",
        name: "John Deo",
        feedback:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.",
      },

      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-5GagR_L2PllzfIMhifve6QJKA5exZ4v9zNeBHIYwec0FYe_bK4TSHp1bqnXIH3Riig&usqp=CAU",
        name: "John Deo",
        feedback:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.",
      },
  ];
  return (
    <div className="my-20 px-10">
      <div className="text-center w-full text-3xl font-extrabold my-20 text-green-600">PARENT’S FEEDBACK</div>
      <div className="grid grid-cols-3 gap-10">
      {Details.map((info, i) => {
        return (
          <div key={i} className="bg-white shadow-2xl p-10 flex flex-col justify-center items-center gap-5 hover:scale-75 scale-100 transition-all transform ease-in-out  duration-500 cursor-pointer">
            <img src={info.img} alt=""  className="w-16 h-16 rounded-full"/>
            <p>{info.name}</p>
            <p>{info.feedback}</p>
          </div>
        );
      })}
      </div>
      
    </div>
  );
};

export default Testimonials;
