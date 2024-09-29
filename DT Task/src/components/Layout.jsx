import React from "react";
import Card from "./ArticleCard";
import VideoCard from "./VideoCard";
import ThreadBuild from "./ThreadBuild";
import ArticleCard from "./ArticleCard";
import ViewThreads from "./ViewThreads";

function Layout({ data }) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="w-full flex justify-between py-4">
        <h1 className="text-3xl text-blue-700 font-bold">{data.title}</h1>
        <button className="bg-blue-700 text-sm text-white px-4 py-1.5 rounded-lg">Submit Task</button>
      </div>
      <div className="w-full py-4 bg-gray-200 rounded-md px-8 mt-6">
        <h1 className="text-xl font-bold py-1">{data.project.title}</h1>
        <p className="text-md font-light py-2">{data.project.description}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-8 p-8">
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <VideoCard data={data.project.blocks[0]} />
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <ThreadBuild data={data.project.blocks[1]} />
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <ArticleCard data={data.project.blocks[2]} />
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <ViewThreads data={data.project.blocks[3]} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
