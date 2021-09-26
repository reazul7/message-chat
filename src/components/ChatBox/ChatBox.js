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
    <div className="bg-blue-900 h-screen">
      {info.map((info, index) => {
        return <ChatCard info={info} />;
      })}
    </div>
  );
};

export default ChatBox;
