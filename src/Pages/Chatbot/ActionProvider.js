class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    whichBin() {
        const whichBinMessage = this.createChatBotMessage("Puis-je savoir dans quelle catégorie se trouve votre objet ?", {
            widget: "matterOptions"
        })
        this.updateChatbotState(whichBinMessage)
    }

    isPlastic() {
        const plasticMessage = this.createChatBotMessage("Du plastique vous dîtes ? Je vois, pouvez-vous choisir quel type de plastique ?", {
            widget: "plasticOptions"
        })
        this.updateChatbotState(plasticMessage)
    }

    isGlass() {
        const glassMessage = this.createChatBotMessage("Du verre vous dîtes ? Je vois, pouvez-vous choisir quel type de verre ?", {
            widget: "glassOptions"
        })
        this.updateChatbotState(glassMessage)
    }

    isMetal() {
        const metalMessage = this.createChatBotMessage("Du métal vous dîtes ? Je vois, pouvez-vous choisir quel type de métal ?", {
            widget: "metalOptions"
        })
        this.updateChatbotState(metalMessage)
    }

    isPaperOrCardboard() {
        const pcMessage = this.createChatBotMessage("Du papier ou du carton vous dîtes ? Je vois, pouvez-vous choisir quel type de papier ou carton ?", {
            widget: "pcOptions"
        })
        this.updateChatbotState(pcMessage)
    }

    isNaturalWaste() {
        const naturalWasteMessage = this.createChatBotMessage("Un déchet naturel vous dîtes ? Je vois, pouvez-vous choisir quel type de déchet naturel ?", {
            widget: "naturalWasteOptions"
        })
        this.updateChatbotState(naturalWasteMessage)
    }

    isMedicalWaste() {
        const medicalWasteMessage = this.createChatBotMessage("Un déchet médical vous dîtes ? Je vois, pouvez-vous choisir quel type de déchet médical ?", {
            widget: "medicalWasteOptions"
        })
        this.updateChatbotState(medicalWasteMessage)
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider