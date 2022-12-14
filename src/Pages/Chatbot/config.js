import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import GlobalOptions from "./Components/GlobalOptions";
import MatterOptions from "./Components/MatterOptions";
import PlasticOptions from "./Components/PlasticOptions";

const config = {
    botName: "Citron",
    initialMessages: [
        createClientMessage('Bonjour, j’ai besoin d’aide.'),
        createChatBotMessage("Bonjour, dîtes nous quel zeste pouvons-nous effectuer pour vous aider ?", {
            'widget': "globalOptions"
        })],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
    widgets: [
        {
            widgetName: "globalOptions",
            widgetFunc: (props) => <GlobalOptions {...props} />
        },
        {
            widgetName: "matterOptions",
            widgetFunc: (props) => <MatterOptions {...props} />
        },
        {
            widgetName: "plasticOptions",
            widgetFunc: (props) => <PlasticOptions {...props} />
        },
    ]
}

export default config