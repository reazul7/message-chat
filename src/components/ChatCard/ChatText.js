const ChatText = ({info}) => {
    const date = new Date(info.timestamp*1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return (
        <div className="px-2">
            {/* text-area */}
            <p className={info.direction === "left" ? "text-bg rounded-xl rounded-tl-none" : "text-bg rounded-xl rounded-br-none"}>
                {info.text}
            </p>

            {/* text-info-area */}
            <div className={info.direction === "left" ? "text-owner" : "text-owner flex-row-reverse"}>
                <p className="text-gray-300">
                    {info.senderName}
                </p>
                <p className={info.direction === "left" ? "text-gray-400 ml-auto" : "text-gray-400 mr-auto"}>
                    {formattedTime}
                </p>
            </div>
        </div>
    );
};

export default ChatText;