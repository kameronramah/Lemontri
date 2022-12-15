import React from "react";
import "../style/Options.css";

const MoreInfosOptions = (props) => {
    const options = [
        { text: "Oui, s'il vous plaît.", handler: () => {props.actionProvider.moreInfos()}, id: 1 },
        { text: "Non, merci.", handler: () => {props.actionProvider.goodBye()}, id: 2 },
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default MoreInfosOptions;
