import React from "react";
import Card from "./ArticleCard";
import VideoCard from "./VideoCard";
import ThreadBuild from "./ThreadBuild";
import ArticleCard from "./ArticleCard";
import ViewThreads from "./ViewThreads";

function Layout({ data }) {
  const task = data.tasks[0];
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="w-full flex justify-between py-4">
        <h1 className="text-3xl text-blue-700 font-bold">{data.title}</h1>
        <button className="bg-blue-700 text-sm text-white px-4 py-1.5 rounded-lg">Submit Task</button>
      </div>
      <div className="w-full py-4 bg-gray-200 rounded-md px-8 mt-6">
        <h1 className="text-xl font-bold py-1">{task.task_title}</h1>
        <p className="text-md font-light py-2">{data.task_description}</p>
      </div>
      <div className="w-full grid grid-cols-2 gap-8 p-8">
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <VideoCard data={task.assets[0]} />
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <ThreadBuild data={task.assets[1]} />
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <ArticleCard data={task.assets[2]} />
        </div>
        <div className="w-full h-[500px] rounded-2xl overflow-auto border-[1px] border-gray-400">
          <ViewThreads data={task.assets[3]} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
