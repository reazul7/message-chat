import ChatImage from "./ChatImage";
import ChatText from "./ChatText";

const ChatCard = ({ info }) => {
    return (
        <div
            className={
                info.direction === "left" ? "flex py-3 px-4" : "flex py-3 px-4  flex-row-reverse"
            }
        >
            {/* chat-image-area */}
            <ChatImage info={info} />

            {/* chat-text-area */}
            <ChatText info={info} />
        </div>
    );
};

export default ChatCard;
