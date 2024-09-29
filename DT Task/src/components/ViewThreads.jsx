import React from "react";
import { Info, ChevronUp } from "lucide-react";
import Dropdown from "./Dropdown";
function ViewThreads({ data }) {
  return (
    <div className="w-full h-full">
      <div className="w-full h-12 bg-black text-white items-center flex justify-center">
        <h1 className="">{data.title}</h1>
        <Info className=" w-4 h-4" />
      </div>
      <div className="w-full px-4 py-4 border-b-[1px] border-gray-300">
        <p className="font-light">
          <b>Description : </b>
          {data.description}
        </p>
      </div>
      <div className="w-full p-4">
        {data.content.map(ele => (
          <Dropdown data={ele} />
        ))}
      </div>
    </div>
  );
}

export default ViewThreads;
