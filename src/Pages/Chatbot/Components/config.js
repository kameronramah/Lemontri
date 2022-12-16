import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import GlobalOptions from "./options/GlobalOptions";
import MatterOptions from "./options/MatterOptions";
import PlasticOptions from "./options/PlasticOptions";
import GlassOptions from "./options/GlassOptions";
import MetalOptions from "./options/MetalOptions";
import PaperCardBoardOptions from "./options/PaperCardBoardOptions";
import NaturalWasteOptions from "./options/NaturalWasteOptions";
import MedicalWasteOptions from "./options/MedicalWasteOptions";
import PlasticCupLogo from "./logos/PlasticCupLogo";
import PlasticBottleLogo from "./logos/PlasticBottleLogo";
import PlasticCorkLogo from "./logos/PlasticCorkLogo";
import PlasticFilmLogo from "./logos/PlasticFilmLogo";
import PlasticGlassinePaperLogo from "./logos/PlasticGlassinePaperLogo";
import GlassLogo from "./logos/GlassLogo";
import GlassAmpulLogo from "./logos/GlassAmpulLogo";
import MetalBobbinLogo from "./logos/MetalBobbinLogo";
import MetalBatteryLogo from "./logos/MetalBatteryLogo";
import MetalElectronicWasteLogo from "./logos/MetalElectronicWasteLogo";
import MetalPrinterCartridgeLogo from "./logos/MetalPrinterCartridgeLogo";
import MetalAerosolLogo from "./logos/MetalAerosolLogo";
import PaperAbsorbentLogo from "./logos/PaperAbsorbentLogo";
import PaperLogo from "./logos/PaperLogo";
import PaperConfidentialLogo from "./logos/PaperConfidentialLogo";
import PaperCardBoardLogo from "./logos/PaperCardBoardLogo";
import PaperBookLogo from "./logos/PaperBookLogo";
import PaperFoldedCardboardLogo from "./logos/PaperFoldedCardboardLogo";
import PaperWoodLogo from "./logos/PaperWoodLogo";
import PaperCrateLogo from "./logos/PaperCrateLogo";
import NaturalWasteVegetalLogo from "./logos/NaturalWasteVegetalLogo";
import NaturalWasteFoodLogo from "./logos/NaturalWasteFoodLogo";
import NaturalWasteFertilizerLogo from "./logos/NaturalWasteFertilizerLogo";
import NaturalWasteOilLogo from "./logos/NaturalWasteOilLogo";
import NaturalWasteCoffeeLogo from "./logos/NaturalWasteCoffeeLogo";
import MedicalWasteMaskLogo from "./logos/MedicalWasteMaskLogo";
import MedicalWasteInfectiousLogo from "./logos/MedicalWasteInfectiousLogo";
import MoreInfosOptions from "./options/MoreInfosOptions";

const config = {
    initialMessages: [
        createClientMessage('Bonjour, j’ai besoin d’aide.'),
        createChatBotMessage("Bonjour, dîtes nous quel zeste pouvons-nous effectuer pour vous aider ?", {
            'widget': "globalOptions"
        })],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#D9D9D9",
        }
    },
    widgets: [
        {
            widgetName: "globalOptions",
            widgetFunc: (props) => <GlobalOptions {...props} />
        },
        {
            widgetName: "moreInfosOptions",
            widgetFunc: (props) => <MoreInfosOptions {...props} />
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
        {
            widgetName: "logoMetalAerosol",
            widgetFunc: (props) => <MetalAerosolLogo {...props} />
        },
        {
            widgetName: "logoPaperAbsorbent",
            widgetFunc: (props) => <PaperAbsorbentLogo {...props} />
        },
        {
            widgetName: "logoPaper",
            widgetFunc: (props) => <PaperLogo {...props} />
        },
        {
            widgetName: "logoPaperConfidential",
            widgetFunc: (props) => <PaperConfidentialLogo {...props} />
        },
        {
            widgetName: "logoPaperCardboard",
            widgetFunc: (props) => <PaperCardBoardLogo {...props} />
        },
        {
            widgetName: "logoPaperBook",
            widgetFunc: (props) => <PaperBookLogo {...props} />
        },
        {
            widgetName: "logoPaperFoldedCardboard",
            widgetFunc: (props) => <PaperFoldedCardboardLogo {...props} />
        },
        {
            widgetName: "logoPaperWood",
            widgetFunc: (props) => <PaperWoodLogo {...props} />
        },
        {
            widgetName: "logoPaperCrate",
            widgetFunc: (props) => <PaperCrateLogo {...props} />
        },
        {
            widgetName: "logoNaturalWasteVegetal",
            widgetFunc: (props) => <NaturalWasteVegetalLogo {...props} />
        },
        {
            widgetName: "logoNaturalWasteFood",
            widgetFunc: (props) => <NaturalWasteFoodLogo {...props} />
        },
        {
            widgetName: "logoNaturalWasteFertilizer",
            widgetFunc: (props) => <NaturalWasteFertilizerLogo {...props} />
        },
        {
            widgetName: "logoNaturalWasteOil",
            widgetFunc: (props) => <NaturalWasteOilLogo {...props} />
        },
        {
            widgetName: "logoNaturalWasteCoffee",
            widgetFunc: (props) => <NaturalWasteCoffeeLogo {...props} />
        },
        {
            widgetName: "logoMedicalWasteMask",
            widgetFunc: (props) => <MedicalWasteMaskLogo {...props} />
        },
        {
            widgetName: "logoMedicalWasteInfectious",
            widgetFunc: (props) => <MedicalWasteInfectiousLogo {...props} />
        },
    ]
}

export default config