import React from "react";
import "./style/Options.css";

const PaperCardBoardOptions = (props) => {
    const options = [
        { text: "C’est du papier absorbant.", handler: () => {}, id: 1 },
        { text: "C’est du papier.", handler: () => {}, id: 2 },
        { text: "C’est du carton.", handler: () => {}, id: 3 },
        { text: "C’est un livre.", handler: () => {}, id: 4 },
        { text: "C’est un carton plié", handler: () => {}, id: 5 },
        { text: "C’est du bois.", handler: () => {}, id: 6 },
        { text: "C’est une cagette.", handler: () => {}, id: 7 },
        { text: "C’est autre chose.", handler: () => {}, id: 8 }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>;
};

export default PaperCardBoardOptions;
