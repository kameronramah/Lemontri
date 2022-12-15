import React from "react";
import PapierConfidentiel from '../../../../img/PapierConfidentiel.webp';
import '../style/LogoTri.css';

const PaperConfidentialLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={PapierConfidentiel} alt="Papiers confidentiels" />
        </div>
    )
};

export default PaperConfidentialLogo;