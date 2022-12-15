import React from "react";
import Engrais from '../../../../img/engrais.webp';
import '../style/LogoTri.css';

const NaturalWasteFertilizerLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Engrais} alt="Engrais" />
        </div>
    )
};

export default NaturalWasteFertilizerLogo;