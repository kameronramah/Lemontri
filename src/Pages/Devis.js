import {FaChevronLeft} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {Container} from 'react-bootstrap';
import React from 'react';
import citronBureau from "../img/contact1.webp";


const Devis = () => {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = React.useState('Contacter')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Merci pour votre poste')
    const { nameEn, name, prenom, poste, email } = e.target.elements
    let conFom = {
      nameEn: nameEn.value,
      name: name.value,
      prenom: prenom.value,
      poste: poste.value,
      email: email.value,
    }
    console.log(conFom)
  }
  return (
    <Container className="w-100 mx-auto">
      <div  className="d-grid gap-4 col-6 mx-auto mt-5">
        <div class="d-flex justify-content-left align-items-baseline mt-3" onClick={e => navigate("/company-code")}>
            <div class="d-flex justify-content-center align-items-center backButton hoverCursor"><FaChevronLeft /></div>
            <p class="retour hoverCursor">Retour</p>
        </div> 
        <h1>Devenir client LemonTri</h1>
        <form onSubmit={onSubmit}>
          <div className="text-start mx-5">
            <label className="form-label" htmlFor="name">Entreprise :</label>
            <input className="champRemplir form-control" type="text"  required />
          </div>
          <div className="text-start mx-5">
            <label className="form-label" htmlFor="name">Nom:</label>
            <input className="champRemplir form-control" type="text" required />
          </div>
          <div className="text-start mx-5" >
            <label className="form-label" htmlFor="name">Prénom:</label>
            <input className="champRemplir form-control" type="text"  required />
          </div>
          <div className="text-start mx-5">
            <label className="form-label" htmlFor="name">Poste occupé dans l'entreprise:</label>
            <input className="champRemplir form-control" type="text"  required />
          </div>
          <div className="text-start mx-5">
            <label htmlFor="name"> Adresse mail professionnelle:</label>
            <input className="champRemplir form-control" type="email"  required />
          </div>
          <div className="d-grid gap-4 col-6 mx-auto mt-5">
            <button class="btn btn-primary" type="submit">{formStatus}</button>
          </div>
        </form></div>
      <div className="d-flex">
          <img className="citronBureau img-fluid img-thumbnai" src={citronBureau}  alt="test"></img>
          <div className="infoBulle2 text-center">
            Laissez vos coordonnées pour que l’équipe de LemonTri vous contacte. 
            <br/>Nous sommes pressés de faire votre connaissance !
          </div>    
        </div>
    </Container>
  )
}
export default Devis