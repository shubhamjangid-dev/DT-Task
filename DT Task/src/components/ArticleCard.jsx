import React from "react";
import { Info, CornerUpLeft, CornerUpRight, Expand, Ellipsis } from "lucide-react";
function ArticleCard({ data }) {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-12 bg-black text-white items-center flex justify-center">
        <h1 className="">{data.title}</h1>
        <Info className="absolute right-5 w-6 h-6" />
      </div>
      <div className="w-full px-4 py-4 border-b-[1px] border-gray-300">
        <p>
          <b>Description : </b>
          {data.description}
        </p>
      </div>
      <div className="w-full p-5">
        <h1 className="w-full mb-3 ">Title</h1>
        <input
          type="text"
          className="w-full h-10 drop-shadow-lg"
        />
        <h1 className="w-full mb-3 mt-5 ">Content</h1>
        <div className="w-full drop-shadow-lg">
          <div className="w-full drop-shadow-lg">
            <div className="w-full text-sm text-gray-600 space-x-4 px-3 py-2 font-light bg-white ">
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Insert</span>
              <span>Format</span>
              <span>Tools</span>
              <span>Table</span>
              <span>Help</span>
            </div>
            <div className="w-full text-sm flex text-gray-600 space-x-4 px-3 py-2 font-light bg-white items-center">
              <span>
                <CornerUpLeft />
              </span>
              <span>
                <CornerUpRight />
              </span>
              <span>
                <Expand />
              </span>
              <h1 className="h-5 w-24 bg-gray-100 text-[12px] px-2">Paragraph</h1>
              <span>
                <Ellipsis />
              </span>
            </div>
          </div>
          <textarea className="w-full p-2 h-96" />
        </div>
      </div>
    </div>
  );
}
export default ArticleCard;
