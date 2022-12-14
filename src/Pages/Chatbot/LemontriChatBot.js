import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const LemontriChatBot = () => {
    
    return (
        <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
        />
    )

}

export default LemontriChatBot;