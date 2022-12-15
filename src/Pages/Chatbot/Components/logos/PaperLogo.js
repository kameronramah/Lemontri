import React from "react";
import Papier from '../../../../img/Papier.webp';
import PapierCarton from '../../../../img/PapierCarton.webp';
import '../style/LogoTri.css';

const PaperLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Papier} alt="Papier" />
            <img className="logo-tri" src={PapierCarton} alt="Papier et carton" />
        </div>
    )
};

export default PaperLogo;