class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    goodBye() {
        const message = this.createChatBotMessage("Au revoir, à bientôt !");
        this.updateChatbotState(message)
    }

    moreInfos() {
        const message = this.createChatBotMessage("Très bien, dîtes nous quel zeste pouvons-nous effectuer pour vous aider ?", {
            widget: "globalOptions"
        })
        this.updateChatbotState(message)
    }

    async contact() {
        const message = this.createChatBotMessage("Pour nous contacter vous pouvez nous joindre par mail via l'adresse email suivante : assistance@lemontri.fr.")
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    whichBin() {
        const message = this.createChatBotMessage("Puis-je savoir dans quelle catégorie se trouve votre objet ?", {
            widget: "matterOptions"
        })
        this.updateChatbotState(message)
    }

    isPlastic() {
        const message = this.createChatBotMessage("Du plastique vous dîtes ? Je vois, pouvez-vous choisir quel type de plastique ?", {
            widget: "plasticOptions"
        })
        this.updateChatbotState(message)
    }

    isGlass() {
        const message = this.createChatBotMessage("Du verre vous dîtes ? Je vois, pouvez-vous choisir quel type de verre ?", {
            widget: "glassOptions"
        })
        this.updateChatbotState(message)
    }

    isMetal() {
        const message = this.createChatBotMessage("Du métal vous dîtes ? Je vois, pouvez-vous choisir quel type de métal ?", {
            widget: "metalOptions"
        })
        this.updateChatbotState(message)
    }

    isPaperOrCardboard() {
        const message = this.createChatBotMessage("Du papier ou du carton vous dîtes ? Je vois, pouvez-vous choisir quel type de papier ou carton ?", {
            widget: "pcOptions"
        })
        this.updateChatbotState(message)
    }

    isNaturalWaste() {
        const message = this.createChatBotMessage("Un déchet naturel vous dîtes ? Je vois, pouvez-vous choisir quel type de déchet naturel ?", {
            widget: "naturalWasteOptions"
        })
        this.updateChatbotState(message)
    }

    isMedicalWaste() {
        const message = this.createChatBotMessage("Un déchet médical vous dîtes ? Je vois, pouvez-vous choisir quel type de déchet médical ?", {
            widget: "medicalWasteOptions"
        })
        this.updateChatbotState(message)
    }

    async isPlasticCup() {
        const message = this.createChatBotMessage("Les gobelets en plastique peuvent être triés dans les poubelles comportant ces logos : ", {
            widget: "logoPlasticCup"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isPlasticBottle() {
        const message = this.createChatBotMessage("Les bouteilles en plastique peuvent être triées dans les poubelles comportant ces logos : ", {
            widget: "logoPlasticBottle"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isPlasticCork() {
        const message = this.createChatBotMessage("Les bouchons en plastique peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticCork"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isPlasticFilm() {
        const message = this.createChatBotMessage("Les films en plastique peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticFilm"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isPlasticGlassine() {
        const message = this.createChatBotMessage("Les papiers en glassine peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticGlassinePaper"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isGlassItem() {
        const message = this.createChatBotMessage("Le verre peut être trié dans les poubelles comportant ce logo : ", {
            widget: "logoGlassItem"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isGlassAmpul() {
        const message = this.createChatBotMessage("Les néons et les ampoules peut être triés dans les poubelles comportant ce logo : ", {
            widget: "logoGlassAmpul"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isMetalBobbin() {
        const message = this.createChatBotMessage("Les canettes peuvent être triées dans les poubelles comportant ces logos : ", {
            widget: "logoMetalBobbin"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isMetalBattery() {
        const message = this.createChatBotMessage("Les piles et les batteries peuvent être triées dans les poubelles comportant ce logo : ", {
            widget: "logoMetalBattery"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isMetalEW() {
        const message = this.createChatBotMessage("Les déchets électroniques peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoMetalEW"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isMetalPrinterCartridge() {
        const message = this.createChatBotMessage("Les toners et les cartouches peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoMetalPrinterCartridge"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isMetalAerosol() {
        const message = this.createChatBotMessage("Les bombes aérosols peuvent être triées dans les poubelles comportant ce logo : ", {
            widget: "logoMetalAerosol"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isAbsorbentPaper() {
        const message = this.createChatBotMessage("Les papiers absorbants peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPaperAbsorbent"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isPaper() {
        const message = this.createChatBotMessage("Les papiers peuvent être triés dans les poubelles comportant ces logos : ", {
            widget: "logoPaper"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isConfidentialPaper() {
        const message = this.createChatBotMessage("Les papiers confidentiels peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPaperConfidential"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isCardboard() {
        const message = this.createChatBotMessage("Les cartons peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPaperCardboard"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isBook() {
        const message = this.createChatBotMessage("Les livres peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPaperBook"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isFoldedCardboard() {
        const message = this.createChatBotMessage("Les cartons pliés peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPaperFoldedCardboard"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isWood() {
        const message = this.createChatBotMessage("Le bois peut être trié dans les poubelles comportant ce logo : ", {
            widget: "logoPaperWood"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isCrate() {
        const message = this.createChatBotMessage("Les cagettes peuvent être triées dans les poubelles comportant ce logo : ", {
            widget: "logoPaperCrate"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isVegetal() {
        const message = this.createChatBotMessage("Les végétaux peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoNaturalWasteVegetal"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isFoodWaste() {
        const message = this.createChatBotMessage("Les déchets alimentaires peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoNaturalWasteFood"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isFertilizer() {
        const message = this.createChatBotMessage("L'engrais peut être trié dans les poubelles comportant ce logo : ", {
            widget: "logoNaturalWasteFertilizer"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isOil() {
        const message = this.createChatBotMessage("L'huile alimentaire peut être triée dans les poubelles comportant ce logo : ", {
            widget: "logoNaturalWasteOil"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isCoffee() {
        const message = this.createChatBotMessage("Le marc de café peut être trié dans les poubelles comportant ce logo : ", {
            widget: "logoNaturalWasteCoffee"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isMask() {
        const message = this.createChatBotMessage("Les masques peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoMedicalWasteMask"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    async isInfectiousWaste() {
        const message = this.createChatBotMessage("Les déchets infectieux peuvent être triés dans les poubelles comportant ce logo : ", {
                widget: "logoMedicalWasteInfectious"
        })
        this.updateChatbotState(message)
        await this.delay(2000);
        const message2 = this.createChatBotMessage("Besoin d’autre chose ?", {
            widget: "moreInfosOptions"
        })
        this.updateChatbotState(message2)
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }

    delay = ms => new Promise(res => setTimeout(res, ms));
}

export default ActionProvider