import React from "react";
import contentImg from "../assets/content.png";
import tickImg from "../assets/tick.png";
function Middlesection() {
  return (
    <div className="w-full  mx-auto lg:w-1/2 " style={{ height: "70vh" }}>
      <h1 className="text-center  -tracking-tight text-2xl m-10">
        What's Included
      </h1>
      <section className="flex justify-center gap-10 ">
        <div className="w-1/3 lg:w-[350px]">
          <img src={contentImg} alt="Image here..." />
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="flex gap-3">
            <img src={tickImg} alt="" className="h-4 mt-1" />
            <span className="text-gray-500">15+ algo patterns discussed</span>
          </div>
          <div className="flex  gap-3">
            <img src={tickImg} alt="" className="h-4" />
            <span className="text-gray-500">
              Detailed solution and explanation
            </span>
          </div>
          <div className="flex  gap-3">
            <img src={tickImg} alt="" className="h-4" />
            <span className="text-gray-500">
              Awesome resources,article,blogs
            </span>
          </div>
          <div className="flex  gap-3">
            <img src={tickImg} alt="" className="h-4" />
            <span className="text-gray-500">
              Visualizers and animations included
            </span>
          </div>
          <div className="flex  gap-3">
            <img src={tickImg} alt="" className="h-4" />
            <span className="text-gray-500">100 pages of quality content</span>
          </div>
          <div className="flex  gap-3">
            <img src={tickImg} alt="" className="h-4" />
            <span className="text-gray-500">
              Concepts explained for beginners
            </span>
          </div>
          <div className="flex  gap-3">
            <img src={tickImg} alt="" className="h-4" />
            <span className="text-gray-500">All in one revision guide</span>
          </div>
          <button className="py-3 px-3 font-bold w-[200px]   bg-orange-500 text-white rounded-full ml-10 mt-6 ">
            Download for free
          </button>
        </div>
      </section>
    </div>
  );
}

export default Middlesection;
