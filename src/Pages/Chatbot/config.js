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
import MetalAerosolLogo from "./Components/logos/MetalAerosolLogo";
import PaperAbsorbentLogo from "./Components/logos/PaperAbsorbentLogo";
import PaperLogo from "./Components/logos/PaperLogo";
import PaperConfidentialLogo from "./Components/logos/PaperConfidentialLogo";
import PaperCardBoardLogo from "./Components/logos/PaperCardBoardLogo";
import PaperBookLogo from "./Components/logos/PaperBookLogo";
import PaperFoldedCardboardLogo from "./Components/logos/PaperFoldedCardboardLogo";
import PaperWoodLogo from "./Components/logos/PaperWoodLogo";
import PaperCrateLogo from "./Components/logos/PaperCrateLogo";
import NaturalWasteVegetalLogo from "./Components/logos/NaturalWasteVegetalLogo";
import NaturalWasteFoodLogo from "./Components/logos/NaturalWasteFoodLogo";
import NaturalWasteFertilizerLogo from "./Components/logos/NaturalWasteFertilizerLogo";
import NaturalWasteOilLogo from "./Components/logos/NaturalWasteOilLogo";
import NaturalWasteCoffeeLogo from "./Components/logos/NaturalWasteCoffeeLogo";
import MedicalWasteMaskLogo from "./Components/logos/MedicalWasteMaskLogo";
import MedicalWasteInfectiousLogo from "./Components/logos/MedicalWasteInfectiousLogo";
import MoreInfosOptions from "./Components/options/MoreInfosOptions";

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