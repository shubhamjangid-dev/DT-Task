import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Board from "./components/Board";
import NoticeBoard from "./components/NoticeBoard";
import Footer from "./components/Footer";

function App() {
  const data = {
    title: "Technical Project Management",
    project: {
      title: "Explore the world of management",
      description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      blocks: [
        {
          title: "Technical Project Management",
          description: "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
          url: "https://www.youtube.com/embed/TiMRwri1xJ8?si=-0N8ZoSL_VRr8xaO",
        },
        {
          title: "Threadbuild",
          description: "Watch the video and thread build, and jot out key threads while watching that video.",
        },
        {
          title: "Structure you pointers ",
          description: "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
        },
        {
          title: "4SA Method",
          description: "To explore more read more",
          content: [
            {
              title: "Introduction",
              description: "The 45A Method, How to bring a idea into progress?",
            },
            {
              title: "Thread A",
              description: "How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?",
            },
          ],
        },
      ],
    },
  };

  return (
    <>
      <Board data={data.project} />
      <NoticeBoard />
      <Header />
      <Layout data={data} />
      <Footer />
    </>
  );
}

export default App;
