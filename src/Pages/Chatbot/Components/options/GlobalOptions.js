import React from "react";
import "../style/Options.css";

const GlobalOptions = (props) => {
    const options = [
        { text: "J’aimerais savoir dans quelle poubelle jeter mon déchet", handler: () => {props.actionProvider.whichBin()}, id: 1 },
        { text: "J’aimerais contacter LemonTri", handler: () => {props.actionProvider.contact()}, id: 2 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default GlobalOptions;
