import React from "react";
import "./style/Options.css";

const MatterOptions = (props) => {
    const options = [
        { text: "C’est du plastique.", handler: () => {props.actionProvider.isPlastic()}, id: 1 },
        { text: "C’est du verre.", handler: () => {props.actionProvider.isGlass()}, id: 2 },
        { text: "C’est du métal.", handler: () => {props.actionProvider.isMetal()}, id: 3 },
        { text: "C’est du papier ou du carton.", handler: () => {props.actionProvider.isPaperOrCardboard()}, id: 4 },
        { text: "C’est un déchet naturel.", handler: () => {props.actionProvider.isNaturalWaste()}, id: 5 },
        { text: "C’est un déchet médical.", handler: () => {props.actionProvider.isMedicalWaste()}, id: 6 },
        { text: "C’est autre chose.", handler: () => {}, id: 7 }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default MatterOptions;
