import { useEffect, useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import FakeData from "../FakeData/FakeData";

const ChatBox = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        setInfo(FakeData);
    }, []);

    return (
        <div className="ChatBox-bg h-full">
            <div className="container mx-auto pt-5 md:pt-16">
                {info.map((info, index) => {
                    return <ChatCard info={info} key={index} />;
                })}
            </div>
        </div>
    );
};

export default ChatBox;
