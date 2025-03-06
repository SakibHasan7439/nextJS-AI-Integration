'use client';

import { useEffect, useState } from "react";
import HistoryCard from "./HistoryCard";

const chatHistory = () => {
    const [chatHistory, setChatHistory] = useState([]);
    console.log(chatHistory);
    useEffect(() =>{
        const savedChat = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        setChatHistory(savedChat);
    }, []);
    return (
        <div className="mt-36 text-center max-w-5xl w-full mx-auto">
            <div className="mb-8">
                <h1 className="text-xl md:text-4xl font-bold">
                    My Chat History
                </h1>
                <p className="mt-4 md:w-[60%] mx-auto">
                    Access your complete chat history across diverse topics and interactions with different models or characters.
                </p>
            </div>
            {
                chatHistory.map((history, index)=><HistoryCard
                    history={history} key={index}>
                </HistoryCard>)
            }
        </div>
    );
};

export default chatHistory;