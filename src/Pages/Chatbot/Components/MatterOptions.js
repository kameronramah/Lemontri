import React from "react";
import "./Options.css";

const MatterOptions = (props) => {
    const options = [
        { text: "C’est du plastique.", handler: () => {props.actionProvider.isPlastic()}, id: 1 },
        { text: "C’est du verre.", handler: () => {}, id: 2 },
        { text: "C’est du métal.", handler: () => {}, id: 3 },
        { text: "C’est du papier ou du carton.", handler: () => {props.actionProvider.whichBin()}, id: 4 },
        { text: "C’est un déchet naturel.", handler: () => {}, id: 5 },
        { text: "C’est un déchet médical.", handler: () => {}, id: 6 },
        { text: "C’est autre chose.", handler: () => {props.actionProvider.whichBin()}, id: 7 }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default MatterOptions;
