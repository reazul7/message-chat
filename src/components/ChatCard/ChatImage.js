const ChatImage = ({ info }) => {
  return (
    <div className="img px-2">
      <img
        className="rounded-full w-10 h-10"
        src={info.senderImageUrl}
        alt={info.senderName}
      />
    </div>
  );
};

export default ChatImage;
