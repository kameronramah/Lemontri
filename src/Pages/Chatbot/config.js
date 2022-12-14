import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import GlobalOptions from "./Components/options/GlobalOptions";
import MatterOptions from "./Components/options/MatterOptions";
import PlasticOptions from "./Components/options/PlasticOptions";
import GlassOptions from "./Components/options/GlassOptions";
import MetalOptions from "./Components/options/MetalOptions";
import PaperCardBoardOptions from "./Components/options/PaperCardBoardOptions";
import NaturalWasteOptions from "./Components/options/NaturalWasteOptions";
import MedicalWasteOptions from "./Components/options/MedicalWasteOptions";
import PlasticCupLogo from "./Components/logos/PlasticCupLogo";
import PlasticBottleLogo from "./Components/logos/PlasticBottleLogo";
import PlasticCorkLogo from "./Components/logos/PlasticCorkLogo";
import PlasticFilmLogo from "./Components/logos/PlasticFilmLogo";
import PlasticGlassinePaperLogo from "./Components/logos/PlasticGlassinePaperLogo";
import GlassLogo from "./Components/logos/GlassLogo";
import GlassAmpulLogo from "./Components/logos/GlassAmpulLogo";
import MetalBobbinLogo from "./Components/logos/MetalBobbinLogo";
import MetalBatteryLogo from "./Components/logos/MetalBatteryLogo";
import MetalElectronicWasteLogo from "./Components/logos/MetalElectronicWasteLogo";
import MetalPrinterCartridgeLogo from "./Components/logos/MetalPrinterCartridgeLogo";

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
        {
            widgetName: "logoPlasticCup",
            widgetFunc: (props) => <PlasticCupLogo {...props} />
        },
        {
            widgetName: "logoPlasticBottle",
            widgetFunc: (props) => <PlasticBottleLogo {...props} />
        },
        {
            widgetName: "logoPlasticCork",
            widgetFunc: (props) => <PlasticCorkLogo {...props} />
        },
        {
            widgetName: "logoPlasticFilm",
            widgetFunc: (props) => <PlasticFilmLogo {...props} />
        },
        {
            widgetName: "logoPlasticGlassinePaper",
            widgetFunc: (props) => <PlasticGlassinePaperLogo {...props} />
        },
        {
            widgetName: "logoGlassItem",
            widgetFunc: (props) => <GlassLogo {...props} />
        },
        {
            widgetName: "logoGlassAmpul",
            widgetFunc: (props) => <GlassAmpulLogo {...props} />
        },
        {
            widgetName: "logoMetalBobbin",
            widgetFunc: (props) => <MetalBobbinLogo {...props} />
        },
        {
            widgetName: "logoMetalBattery",
            widgetFunc: (props) => <MetalBatteryLogo {...props} />
        },
        {
            widgetName: "logoMetalEW",
            widgetFunc: (props) => <MetalElectronicWasteLogo {...props} />
        },
        {
            widgetName: "logoMetalPrinterCartridge",
            widgetFunc: (props) => <MetalPrinterCartridgeLogo {...props} />
        },
    ]
}

export default config