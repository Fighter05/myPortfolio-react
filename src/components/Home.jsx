import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1B1C1E]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sitthipon Sinthuwongpusa
        </h1>
        <h2 className="text-4xl sm:text-5xl mt-2 font-bold text-[#8892b0]">
          I’m a Software Engineering Student.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-2xl">
          Welcome to my Portfolio and I hope you enjoy it!
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
              Let’s Talk
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
