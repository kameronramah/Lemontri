import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import GlobalOptions from "./Components/GlobalOptions";
import MatterOptions from "./Components/MatterOptions";
import PlasticOptions from "./Components/PlasticOptions";
import GlassOptions from "./Components/GlassOptions";
import MetalOptions from "./Components/MetalOptions";
import PaperCardBoardOptions from "./Components/PaperCardBoardOptions";
import NaturalWasteOptions from "./Components/NaturalWasteOptions";
import MedicalWasteOptions from "./Components/MedicalWasteOptions";

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
        {
            widgetName: "glassOptions",
            widgetFunc: (props) => <GlassOptions {...props} />
        },
        {
            widgetName: "metalOptions",
            widgetFunc: (props) => <MetalOptions {...props} />
        },
        {
            widgetName: "pcOptions",
            widgetFunc: (props) => <PaperCardBoardOptions {...props} />
        },
        {
            widgetName: "naturalWasteOptions",
            widgetFunc: (props) => <NaturalWasteOptions {...props} />
        },
        {
            widgetName: "medicalWasteOptions",
            widgetFunc: (props) => <MedicalWasteOptions {...props} />
        },
    ]
}

export default config