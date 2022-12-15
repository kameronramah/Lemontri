import React from "react";
import Pile from '../../../../img/Pile.webp';
import '../style/LogoTri.css';

const MetalBatteryLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Pile} alt="Piles et batteries" />
        </div>
    )
};

export default MetalBatteryLogo;