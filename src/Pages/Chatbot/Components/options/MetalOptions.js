import React from "react";
import "../style/Options.css";

const MetalOptions = (props) => {
    const options = [
        { text: "C’est une canette.", handler: () => {props.actionProvider.isMetalBobbin()}, id: 1 },
        { text: "C’est une pile ou une batterie.", handler: () => {props.actionProvider.isMetalBattery()}, id: 2 },
        { text: "C’est un déchet électronique.", handler: () => {props.actionProvider.isMetalEW()}, id: 3 },
        { text: "C’est un toner ou une cartouche.", handler: () => {props.actionProvider.isMetalPrinterCartridge()}, id: 4 },
        { text: "C’est une bombe aérosols.", handler: () => {}, id: 5 },
        { text: "C’est autre chose.", handler: () => {}, id: 6 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default MetalOptions;
