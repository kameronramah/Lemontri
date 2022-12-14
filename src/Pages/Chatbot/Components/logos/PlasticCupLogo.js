import React from "react";
import GobeletPlastique from '../../../../img/GobeletPlastique.webp';
import GobeletBouteilleCanette from '../../../../img/CanetteBouteille.webp';
import '../style/LogoTri.css';

const PlasticCupLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={GobeletPlastique} alt="Gobelet en plastique" />
            <img className="logo-tri" src={GobeletBouteilleCanette} alt="Gobelets, bouteilles en plastique et canettes" />
        </div>
    )
};

export default PlasticCupLogo;
