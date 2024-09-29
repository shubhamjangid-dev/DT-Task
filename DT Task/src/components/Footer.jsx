import React from "react";
import Schedule from "../assets/image.png";
import Questionmark from "../assets/image2.png";
import Meeting from "../assets/image3.png";
function Footer() {
  return (
    <div className="absolute right-0 mr-8 mb-2 space-y-4 p-4 -translate-y-40">
      <div className="w-20 h-20 bg-blue-800 rounded-full flex justify-center items-center">
        <img
          className="w-10 h-10"
          src={Questionmark}
        />
      </div>
      <div className="w-20 h-20 bg-blue-800 rounded-full flex justify-center items-center">
        <img
          className="w-10 h-10"
          src={Meeting}
        />
      </div>
      <div className="w-20 h-20 bg-blue-800 rounded-full flex justify-center items-center">
        <img
          className="w-10 h-10"
          src={Schedule}
        />
      </div>
    </div>
  );
}

export default Footer;
