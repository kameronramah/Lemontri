import React from "react";
import Canette from '../../../../img/Canette.webp';
import '../style/LogoTri.css';

const MetalBobbinLogo = () => {
    return (
        <div>
            <img className="logo-tri" src={Canette} alt="Canette" />
        </div>
    )
};

export default MetalBobbinLogo;