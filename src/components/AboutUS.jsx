const AboutUS = () => {
  return (
    <div className="w-full h-auto py-20 px-10 bg-gray-200 flex md:flex-row flex-col justify-between items-center  gap-10">
      <div className="w-full h-full flex justify-center items-center p-10 ">
        <img
          src="https://www.dbgisre.edu.in/wp-content/uploads/2023/07/51281072899_7a851fa21a_o-1-1-scaled.webp"
          alt=""
          className="rounded-md"
        />
      </div>
      <div className="w-full flex flex-col gap-5 py-10">
        <div className="text-3xl font-bold text-green-600">A FEW WORDS ABOUT US</div>
        <p className="text-md">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
        </p>

        <button className="bg-yellow-300 px-6 py-4 hover:scale-90 duration-500">Read More</button>
      </div>
    </div>
  );
};

export default AboutUS;
