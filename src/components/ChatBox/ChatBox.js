import React, { useEffect, useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import FakeData from "../FakeData/FakeData";

const ChatBox = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(FakeData);
  }, []);
  console.log(info);

  return (
    <div className="ChatBox-bg h-full">
      <div className="container mx-auto pt-5 md:pt-16">
        {info.map((info, index) => {
            return <ChatCard info={info} />;
        })}
      </div>
    </div>
  );
};

export default ChatBox;
