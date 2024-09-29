import React from "react";
import { Info } from "lucide-react";
function VideoCard({ data }) {
  return (
    <div className="w-full h-full ">
      <div className="relative w-full h-12 bg-black text-white items-center flex justify-center">
        <h1 className="">{data.asset_title}</h1>
        <Info className="absolute right-5 w-6 h-6" />
      </div>
      <div className="w-full px-4 py-4 border-b-[1px] border-gray-300">
        <p>
          <b>Description : </b>
          {data.asset_description}
        </p>
      </div>
      <iframe
        className="w-full h-72"
        src={data.asset_content}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoCard;
