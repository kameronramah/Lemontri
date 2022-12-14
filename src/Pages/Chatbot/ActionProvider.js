class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
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

    isPlasticCup() {
        const message = this.createChatBotMessage("Les gobelets en plastique peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticCup"
        })
        this.updateChatbotState(message)
    }

    isPlasticBottle() {
        const message = this.createChatBotMessage("Les bouteilles en plastique peuvent être triées dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticBottle"
        })
        this.updateChatbotState(message)
    }

    isPlasticCork() {
        const message = this.createChatBotMessage("Les bouchons en plastique peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticCork"
        })
        this.updateChatbotState(message)
    }

    isPlasticFilm() {
        const message = this.createChatBotMessage("Les films en plastique peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticFilm"
        })
        this.updateChatbotState(message)
    }

    isPlasticGlassine() {
        const message = this.createChatBotMessage("Les papiers en glassine peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoPlasticGlassinePaper"
        })
        this.updateChatbotState(message)
    }

    isGlassItem() {
        const message = this.createChatBotMessage("Le verre peut être trié dans les poubelles comportant ce logo : ", {
            widget: "logoGlassItem"
        })
        this.updateChatbotState(message)
    }

    isGlassAmpul() {
        const message = this.createChatBotMessage("Les néons et les ampoules peut être triés dans les poubelles comportant ce logo : ", {
            widget: "logoGlassAmpul"
        })
        this.updateChatbotState(message)
    }

    isMetalBobbin() {
        const message = this.createChatBotMessage("Les canettes peuvent être triées dans les poubelles comportant ce logo : ", {
            widget: "logoMetalBobbin"
        })
        this.updateChatbotState(message)
    }

    isMetalBattery() {
        const message = this.createChatBotMessage("Les piles et les batteries peuvent être triées dans les poubelles comportant ce logo : ", {
            widget: "logoMetalBattery"
        })
        this.updateChatbotState(message)
    }

    isMetalEW() {
        const message = this.createChatBotMessage("Les déchets électroniques peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoMetalEW"
        })
        this.updateChatbotState(message)
    }

    isMetalPrinterCartridge() {
        const message = this.createChatBotMessage("Les toners et les cartouches peuvent être triés dans les poubelles comportant ce logo : ", {
            widget: "logoMetalPrinterCartridge"
        })
        this.updateChatbotState(message)
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider