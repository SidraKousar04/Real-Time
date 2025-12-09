import React from "react";
import bgimage from "../assets/6261489.jpg";

const LearnMore = () => {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:  `url(${bgimage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="aabsolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Learn More About Our Vision
        </h1>

        <p className="text-lg text-gray-100 leading-relaxed">
          At Flipr, we empower students with technology-driven placement solutions,
          real-time insights, and opportunities that shape a brighter future.
        </p>
      </div>
    </section>
  );
};

export default LearnMore;
