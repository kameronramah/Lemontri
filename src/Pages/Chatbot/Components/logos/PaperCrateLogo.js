import React from "react";
import Cagette from '../../../../img/Cagette.webp';
import '../style/LogoTri.css';

const PaperCrateLogo = () => {
    return (
        <div className="logos-tri">
            <img className="logo-tri" src={Cagette} alt="Cagette" />
        </div>
    )
};

export default PaperCrateLogo;