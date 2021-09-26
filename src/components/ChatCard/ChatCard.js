import moment from 'moment';
import React from 'react';

const ChatCard = ({info}) => {
    console.log(info.text);
    const date = new Date(info.timestamp*1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return (
        <div className={info.direction === "left" ? "flex py-3 px-4" : "flex py-3 px-4 justify-end"}>
            <div className="img px-2">
                <img className="rounded-full" style={{width: "50px", height: "50px"}} src={info.senderImageUrl} alt="" />
            </div>
            <div>
                <p className="bg-blue-400 rounded font-medium text-white py-1 px-2">{info.text}</p>
                <div className="flex text-sm">
                    <p className="text-gray-200">{info.senderName}</p>
                    <p className="text-gray-400">{formattedTime}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatCard;