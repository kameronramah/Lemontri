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

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider