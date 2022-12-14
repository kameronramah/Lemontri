import React from "react";
import "../style/Options.css";

const PaperCardBoardOptions = (props) => {
    const options = [
        { text: "C’est du papier absorbant.", handler: () => {props.actionProvider.isAbsorbentPaper()}, id: 1 },
        { text: "C’est du papier.", handler: () => {props.actionProvider.isPaper()}, id: 2 },
        { text: "C’est du papier confidentiel.", handler: () => {props.actionProvider.isConfidentialPaper()}, id: 3 },
        { text: "C’est du carton.", handler: () => {props.actionProvider.isCardboard()}, id: 4 },
        { text: "C’est un livre.", handler: () => {props.actionProvider.isBook()}, id: 5 },
        { text: "C’est un carton plié", handler: () => {props.actionProvider.isFoldedCardboard()}, id: 6 },
        { text: "C’est du bois.", handler: () => {props.actionProvider.isWood()}, id: 7 },
        { text: "C’est une cagette.", handler: () => {props.actionProvider.isCrate()}, id: 8 },
        { text: "C’est autre chose.", handler: () => {}, id: 9 }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default PaperCardBoardOptions;
