import React from "react";
import { Info, ChevronUp } from "lucide-react";
import Dropdown from "./Dropdown";
function ViewThreads({ data }) {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-12 bg-black text-white items-center flex justify-center">
        <h1 className="">{data.asset_title}</h1>
        <Info className="absolute right-5 w-6 h-6" />
      </div>
      <div className="w-full px-4 py-4 border-b-[1px] border-gray-300">
        <p className="font-light">
          <b>Description : </b>
          {data.asset_description}
        </p>
      </div>
      <div className="w-full p-4">
        no content in link
        {/* {data.content.map(ele => (
          <Dropdown data={ele} />
        ))} */}
      </div>
    </div>
  );
}

export default ViewThreads;
