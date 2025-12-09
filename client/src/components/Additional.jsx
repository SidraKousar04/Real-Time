import React from "react";
import image1 from "../assets/Ellipse 11.svg";
import image2 from "../assets/Ellipse 12.svg";
import image3 from "../assets/Ellipse 13.svg";

function Additional() {
  return (
    <section className="relative py-20 px-6 text-white bg-cover bg-center bg-blend-overlay bg-slate-400/50 w-[98%] m-auto h-screen">
      <div className="max-w-6xl m-auto h-full text-center flex items-center justify-center gap-[100px]">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-600">Not Your Average Realtor</h2>
          <p className="text-lg text-slate-500 mb-10 italic ">
            We’re flipping the script on how campus placements are handled —
            with powerful tools, real-time tracking, and unmatched guidance.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <img
            src={image3}
            alt="Image 3"
            className="rounded-lg w-full sm:w-1/2 "
          />

          <div className="flex flex-col justify-center gap-6">
            <img
              src={image1}
              alt="Image 1"
              className="rounded-lg w-full  "
            />
            <img
              src={image2}
              alt="Image 2"
              className="rounded-lg w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Additional;
