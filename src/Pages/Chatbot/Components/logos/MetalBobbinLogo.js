import React from "react";
import Canette from '../../../../img/Canette.webp';
import BouteilleCanette from '../../../../img/BouteilleCanette.webp';
import BouteilleCanetteGobelet from '../../../../img/CanetteBouteille.webp';
import '../style/LogoTri.css';

const MetalBobbinLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Canette} alt="Canette" />
            <img className="logo-tri" src={BouteilleCanette} alt="Bouteilles en plastique et canettes" />
            <img className="logo-tri" src={BouteilleCanetteGobelet} alt="Bouteilles, gobelets en plastique et canettes" />
        </div>
    )
};

export default MetalBobbinLogo;