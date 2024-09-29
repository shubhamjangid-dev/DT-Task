import React from "react";
import { X } from "lucide-react";
function NoticeBoard() {
  return (
    <div className="absolute top-24 right-0 w-32 rounded-l-3xl overflow-clip border-2 z-10 bg-white">
      <div className="w-12 h-full bg-black text-white py-4">
        <X className=" mx-auto" />
        <h1
          className="text-md mt-5 mx-auto"
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          Notice Board
        </h1>
      </div>
    </div>
  );
}

export default NoticeBoard;
