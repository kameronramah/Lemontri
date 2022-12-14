import React from "react";
import "./Options.css";

const GlobalOptions = (props) => {
    const options = [
        { text: "C’est un gobelet.", handler: () => {props.actionProvider.whichBin()}, id: 1 },
        { text: "C’est une bouteille.", handler: () => {}, id: 2 },
        { text: "C’est un bouchon", handler: () => {}, id: 3 },
        { text: "C’est du film plastique.", handler: () => {props.actionProvider.whichBin()}, id: 1 },
        { text: "C’est de la glassine", handler: () => {}, id: 2 },
        { text: "C’est autre chose.", handler: () => {}, id: 3 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default GlobalOptions;
