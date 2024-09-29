import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
function Dropdown({ data }) {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div className="w-full h-10 flex bg-gray-100 items-center">
        <ChevronUp
          className={`mx-3 ${isHidden ? "rotate-180" : ""}`}
          onClick={() => {
            setIsHidden(prev => !prev);
          }}
        />
        {data.title}
      </div>
      {!isHidden && <p className="font-light py-4 px-2">{data.description}</p>}
    </>
  );
}

export default Dropdown;
