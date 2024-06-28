import React from "react";
import mainImage from "../assets/main.png";

function Hero() {
  return (
    <main className="relative">
      <div className="container m-auto w-full  p-20 flex gap-6 lg:gap-0">
        <div className="left-section w-2/3 mt-[-50px] lg:mt-20">
          <h1 className="font-semibold text-4xl leading-snug ">
            Best way to revise for your next coding interview
          </h1>
          <p className="text-[#4c527d]  text-md  lg:my-6 ">
            Get everything in a single guide: Data structures, algorithms,
            patterns, visualizers, questions, examples, solutions, explanations,
            and much more!
          </p>
          <button className="w-full h-10 px-6 bg-gray-200 my-4 font-bold rounded hover:bg-pink-400">
            Buy FREE through GUMROAD
          </button>

          <div class="quotes mt-3 border-l-2 border-orange-500 py-8 px-5 bg-gray-200 lg:py-3">
            <p className="text-gray-700 italic">
              "Highly recommended if you're interviewing or preparing these days
              - this guide will help you revise concepts and practice things
              before the interview."
            </p>
          </div>
        </div>
        <div className="right-section w-2/6 max-h-full flex justify-center items-center lg:w-2/3">
          <img
            src={mainImage}
            alt="Image Here.."
            className=" w-60 lg:w-96  lg:scale-110"
          />
        </div>
      </div>
      <div className="dots w-14 h-10 flex ml-80  justify-evenly  lg:absolute  lg:bottom-12 left-52">
        <span className="h-3 w-3 rounded-full bg-gray-400"></span>
        <span className="h-3 w-3 rounded-full bg-gray-500"></span>
        <span className="h-3 w-3 rounded-full bg-gray-500"></span>
      </div>
    </main>
  );
}

export default Hero;
