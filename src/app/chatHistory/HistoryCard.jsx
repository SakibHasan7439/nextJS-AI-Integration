const HistoryCard = ({history}) => {
    return (
        <div>
            <p className={`${history.sender === "EchoGPT"? "border-b border-b-gray-300 border-l border-l-gray-300 border-r-gray-300 border-r mb-4": "border-t border-t-gray-200 border-l-gray-300 border-l border-r border-r-gray-300"} text-left p-2`}><strong>{history?.text}</strong></p>
        </div>
    );
};

export default HistoryCard;