import React from "react";
import "../style/Options.css";

const GlassOptions = (props) => {
    const options = [
        { text: "C'est du verre.", handler: () => {props.actionProvider.isGlassItem()}, id: 1 },
        { text: "C'est un néon ou une ampoule.", handler: () => {props.actionProvider.isGlassAmpul()}, id: 2 },
        { text: "C’est autre chose.", handler: () => {}, id: 3 }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default GlassOptions;
