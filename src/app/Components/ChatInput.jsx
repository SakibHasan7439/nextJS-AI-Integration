'use client';
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const ChatInput = ({setChatHistory}) => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleChatInputSubmit = async(e) =>{
        e.preventDefault();
        if(!message){
            return;
        }
        const userMessage = {sender: "You", text: message};
        setChatHistory((prevChat)=> [...prevChat, userMessage]);

        // save message to local storage
        const savedMessage = JSON.parse(localStorage.getItem('chatHistory') || '[]');
        savedMessage.push(userMessage);
        localStorage.setItem('chatHistory', JSON.stringify(savedMessage));

        setMessage("");
        setLoading(true);

        try {
            const response = await axios.post(
                `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
                {
                    contents: [{
                        parts: [{
                            text: message
                        }]
                    }]
                }
            );

            const botMessage = {
                sender: "EchoGPT",
                text:response.data.candidates?.[0]?.content?.parts[0].text || "Sorry I couldn't process it."
            };
            setChatHistory((prevChat)=> [...prevChat, botMessage]);
            // saving chat in history
            savedMessage.push(botMessage);
            localStorage.setItem('chatHistory', JSON.stringify(savedMessage));


        } catch (err) {
            console.log("error fetching response: ", err);
            const errorMessage = {
                sender:"EchoGPT", 
                text:"Error fetching response"
            };
            setChatHistory((prevChat)=> [...prevChat, errorMessage])
            savedMessage.push(errorMessage);
            localStorage.setItem('chatHistory', JSON.stringify(savedMessage));
        }finally{
            setLoading(false);
        }
    }
    return (
        <div className="border left-1/2 max-w-[835px] -translate-x-1/2 rounded-lg p-4 w-full fixed bottom-0 bg-white">
            <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center gap-4">
                    <Image 
                        src={'/ai_logo.avif'} 
                        alt="website logo" 
                        width={20} height={20}
                    />
                    <p className="pr-2 border-r-2 border-r-gray-200">EchoGPT</p>
                    <Image 
                        src={'/icons8-rocket-99.png'} 
                        alt="rocket logo" 
                        width={20} height={20}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Image 
                        src={'/icons8-add-50.png'} 
                        alt="rocket logo" 
                        width={20} height={20}
                    />
                    <Image 
                        src={'/icons8-history-50.png'} 
                        alt="rocket logo" 
                        width={20} height={20}
                    />
                </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 pb-8 w-full">
                <form onSubmit={handleChatInputSubmit} className="flex">
                    <textarea 
                        type="text" 
                        name="chat"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)} 
                        placeholder="Ask a question..." 
                        className="flex-1 overflow-hidden outline-0" />

                    <button 
                        type="submit" 
                        className="cursor-pointer"
                        disabled={loading}>
                        <Image 
                            src={'/icons8-send-64.png'} 
                            alt="send chat input icon" 
                            width={20} height={20}
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInput;