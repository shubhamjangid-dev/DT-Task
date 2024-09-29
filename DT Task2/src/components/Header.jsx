import React from "react";
import { Home, Wrench, Bell, EllipsisVertical } from "lucide-react";
function Header() {
  return (
    <div className="w-full h-20 flex bg-gray-100 drop-shadow-lg px-10 items-center justify-between">
      <div>
        <img src="https://deepthought.education/assets/images/logo/logo.svg"></img>
      </div>
      <div className="flex">
        <div className="w-8 h-8 flex bg-blue-400 rounded-full mx-2 justify-center items-center">
          <Home className="text-white h-4 w-4" />
        </div>
        <div className="w-8 h-8 flex bg-blue-400 rounded-full mx-2 justify-center items-center">
          <Wrench className="text-white h-4 w-4" />
        </div>
        <div className="w-8 h-8 flex bg-blue-400 rounded-full mx-2 justify-center items-center">
          <Bell className="text-white h-4 w-4" />
        </div>
        <div className="w-8 h-8 flex bg-gray-400 rounded-full mx-2 justify-center items-center"></div>
        <div className="w-8 h-8 flex rounded-full mx-1 justify-center items-center">
          <EllipsisVertical className="text-blue-400 h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Header;
