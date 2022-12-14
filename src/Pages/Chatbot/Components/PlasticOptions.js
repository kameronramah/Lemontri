import React from "react";
import "./style/Options.css";

const GlobalOptions = (props) => {
    const options = [
        { text: "C’est un gobelet.", handler: () => {}, id: 1 },
        { text: "C’est une bouteille.", handler: () => {}, id: 2 },
        { text: "C’est un bouchon.", handler: () => {}, id: 3 },
        { text: "C’est du film plastique.", handler: () => {}, id: 4 },
        { text: "C’est de la glassine", handler: () => {}, id: 5 },
        { text: "C’est autre chose.", handler: () => {}, id: 6 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default GlobalOptions;
