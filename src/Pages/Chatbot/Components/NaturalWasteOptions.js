import React from "react";
import "./style/Options.css";

const NaturalWasteOptions = (props) => {
    const options = [
        { text: "C’est un végétal.", handler: () => {}, id: 1 },
        { text: "C’est un déchet alimentaire.", handler: () => {}, id: 2 },
        { text: "C’est du bois.", handler: () => {}, id: 3 },
        { text: "C’est de l'engrais.", handler: () => {}, id: 4 },
        { text: "C’est de l'huilde alimentaire.", handler: () => {}, id: 5 },
        { text: "C’est du marc de café.", handler: () => {}, id: 6 },
        { text: "C’est autre chose.", handler: () => {}, id: 7 }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default NaturalWasteOptions;
