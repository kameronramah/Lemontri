import React from "react";
import Bouchon from '../../../../img/Bouchon.webp';
import '../style/LogoTri.css';

const PlasticCorkLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Bouchon} alt="Bouchon en plastique" />
        </div>
    )
};

export default PlasticCorkLogo;
