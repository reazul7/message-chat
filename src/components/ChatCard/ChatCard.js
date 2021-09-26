import React from 'react';

const ChatCard = ({info}) => {
    console.log(info.text);
    const date = new Date(info.timestamp*1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return (
        <div className={info.direction === "left" ? "flex py-3 px-4" : "flex py-3 px-4  flex-row-reverse"}>
                <div className="img px-2">
                    <img className="rounded-full" style={{width: "50px", height: "50px"}} src={info.senderImageUrl} alt="" />
                </div>
                <div className="px-2">
                    <p className={info.direction === "left" ? "text-bg rounded-xl rounded-tl-none" : "text-bg rounded-xl rounded-br-none"}>{info.text}</p>
                    <div className={info.direction === "left" ? "text-owner" : "text-owner flex-row-reverse"}>
                        <p className="text-gray-300">{info.senderName}</p>
                        <p className={info.direction === "left" ? "text-gray-400 ml-auto" : "text-gray-400 mr-auto"}>{formattedTime}</p>
                    </div>
                </div>
            </div>
    );
};

export default ChatCard;