import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Components/config';
import ActionProvider from "./Components/ActionProvider";
import MessageParser from "./Components/MessageParser";
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