import React from "react";
import "../style/Options.css";

const MedicalWasteOptions = (props) => {
    const options = [
        { text: "C’est un masque.", handler: () => {props.actionProvider.isMask()}, id: 1 },
        { text: "C’est un déchet infectueux.", handler: () => {props.actionProvider.isInfectiousWaste()}, id: 2 },
        { text: "C’est autre chose.", handler: () => {}, id: 3 }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default MedicalWasteOptions;
