import React from "react";
import Bouteille from '../../../../img/Bouteille.webp';
import BouteilleCanette from '../../../../img/BouteilleCanette.webp';
import BouteilleCanetteGobelet from '../../../../img/CanetteBouteille.webp';

import '../style/LogoTri.css';

const PlasticBottleLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Bouteille} alt="Bouteilles en plastique" />
            <img className="logo-tri" src={BouteilleCanette} alt="Bouteilles en plastique et canettes" />
            <img className="logo-tri" src={BouteilleCanetteGobelet} alt="Bouteilles, gobelets en plastique et canettes" />
        </div>
    )
};

export default PlasticBottleLogo;
