'use client';
import Image from "next/image";
import TextBlock from "./TextBlock";
import ChatInput from "./ChatInput";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const MainContent = () => {
  const [chatHistory, setChatHistory] = useState([]);
  return (
    <main className="lg:max-w-4xl w-full mx-auto overflow-auto p-8">
      {
        chatHistory.length > 0 ?
        <InfiniteScroll dataLength={chatHistory.length}><div className="space-y-4 mb-32">
        {chatHistory.map((msg, index) => (
          <p key={index} className={msg.sender === "You" ? " w-fit text-right bg-blue-100 p-4 rounded-xl" : "text-left p-4 rounded-xl"}>
          {msg.text}
          </p>
        ))}
      </div>
      </InfiniteScroll> 
        :
        <div>
          <Image
            src={"/ai_logo.avif"}
            className="mx-auto mt-16"
            alt="website logo"
            width={100}
            height={100}
          ></Image>
          <h2 className="text-2xl text-center mb-3 font-bold text-blue-900">EchoGPT</h2>
          <p className="md:text-lg md:w-[70%] text-center mx-auto mb-20">
            Interact with EchoGPT, an AI that reflects your input for quick ideas,
            summaries, or feedback. Perfect for brainstorming or rapid
          </p>
          <div className="flex items-center mb-4 gap-4 justify-between flex-col md:flex-row">
            <TextBlock
              heading={"unlock your creative flow"}
              description={
                "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects."
              }
            ></TextBlock>
            <TextBlock
              heading={"build a resume that shines"}
              description={
                "Craft a resume tailored to highlight your experience and match the job you want, designed to grab the attention of potential."
              }
            ></TextBlock>
          </div>
          <div className="flex mb-32 gap-4 items-center justify-between flex-col md:flex-row">
              <TextBlock
                heading={"set a challenge that transforms you"}
                description={
                  "Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow."
                }
              ></TextBlock>
              <TextBlock
                heading={"Write Irresistible Social Content"}
                description={
                  "Generate catchy, clever captions for your photos or videos, perfect for increasing engagement and sparking conversations."
                }
              ></TextBlock>
            </div>
        </div>
      }
            <ChatInput
              setChatHistory={setChatHistory}>
            </ChatInput>
    </main>
  );
};

export default MainContent;
