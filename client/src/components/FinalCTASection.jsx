import React from "react";
import fliprLogo from "../assets/logo.svg";      
import fbIcon from "../assets/icons8-facebook-64.png";                
import instaIcon from "../assets/icons8-instagram-64.png";           
import twitterIcon from "../assets/icons8-twitter-circled-64.png";       
import linkedinIcon from "../assets/icons8-linkedin-64.png";    

const FinalCTASection = () => {
  return (
    <section className="bg-[#172A45] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* LEFT CORNER TEXT */}
        <div className="text-gray-200 text-sm tracking-wide">
          © 2025 Flipr Technology Pvt Ltd
        </div>

        {/* CENTER LOGO */}
        <div>
          <img
            src={fliprLogo}
            alt="Flipr Logo"
            className="w-40 h-auto mx-auto"
            
          />
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-4">
          <img src={fbIcon} alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          <img src={instaIcon} alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          <img src={twitterIcon} alt="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-80 transition" />
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
