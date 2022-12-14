import React from "react";
import Film from '../../../../img/Film.webp';
import '../style/LogoTri.css';

const PlasticFilmLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Film} alt="Film en plastique" />
        </div>
    )
};

export default PlasticFilmLogo;
