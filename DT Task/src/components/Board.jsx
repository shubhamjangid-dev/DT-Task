import React, { useState } from "react";
import { CircleArrowLeft } from "lucide-react";
function Board({ data }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={`absolute top-20 left-0 ${isCollapsed ? "w-32" : "w-80"} h-full rounded-b-3xl rounded-tr-2xl overflow-clip border-2 z-10 bg-white`}>
      <div className="w-full h-12 bg-black text-white items-center flex justify-end ">
        <CircleArrowLeft
          className={`mr-4 ${isCollapsed ? "rotate-180" : ""} `}
          onClick={() => {
            setIsCollapsed(prev => !prev);
          }}
        />
      </div>
      {isCollapsed && (
        <div className="flex justify-center mt-8">
          <div className="w-16 h-16 rounded-2xl border-[1px] text-indigo-500  border-indigo-500 text-center text-4xl py-2">1</div>
        </div>
      )}
      {!isCollapsed && (
        <div className="flex justify-center mt-8">
          <ul className="list-disc pl-4">
            <li className="font-bold mb-4">{data.title}</li>
            <ul className="list-disc font-light">
              {data.blocks.map(listItem => (
                <li className="pl-6">{listItem.title}</li>
              ))}
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Board;
