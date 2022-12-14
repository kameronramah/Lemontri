import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config';
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import './Components/style/ChatBot.css';

const LemontriChatBot = () => {
    
    return (
        <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            headerText="BESOIN D'AIDE ?"
        />
    )

}

export default LemontriChatBot;