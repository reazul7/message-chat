import React from "react";

const ChatImage = ({ info }) => {
  return (
    <div className="img px-2">
      <img
        className="rounded-full"
        style={{ width: "50px", height: "50px" }}
        src={info.senderImageUrl}
        alt={info.senderName}
      />
    </div>
  );
};

export default ChatImage;
