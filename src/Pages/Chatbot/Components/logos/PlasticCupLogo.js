import React from "react";
import GobeletPlastique from '../../../../img/GobeletPlastique.webp';
import '../style/LogoTri.css';

const PlasticCupLogo = () => {
    return (
        <div>
            <img className="logo-tri" src={GobeletPlastique} alt="Gobelet en plastique" />
        </div>
    )
};

export default PlasticCupLogo;
