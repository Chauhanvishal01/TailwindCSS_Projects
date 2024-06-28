import React from "react";
import mainImage from "../assets/main.png";

function Hero() {
  return (
    <main className="container m-auto w-full  p-20 flex gap-5 ">
      <div className="left-section w-1/2">
        <h1 className="font-semibold text-3xl ">
          Best way to revise for your next coding interview
        </h1>
        <p>
          Get everything in a single guide: Data structures, algorithms,
          patterns, visualizers, questions, examples, solutions, explanations,
          and much more!
        </p>
        <button>Buy FREE through GUMROAD</button>

        <div class="quotes">
          <p>
            "Highly recommended if you're interviewing or preparing these days -
            this guide will help you revise concepts and practice things before
            the interview."
          </p>
        </div>
      </div>
      <div className="right-section w-1/2 max-h-full flex justify-center items-center">
        <img src={mainImage} alt="Image Here.." className=" w-60 " />
      </div>
    </main>
  );
}

export default Hero;
