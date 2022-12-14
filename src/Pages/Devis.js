import React from 'react'
const Devis = () => {
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
    <div >
      <h2 >DEMANDER UN DEVIS</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">
            Nom:
          </label>
          <input  type="text"  required />
        </div>
        <div >
          <label  htmlFor="name">
            Prénom:
          </label>
          <input  type="text"  required />
        </div>
        <div>
        <label  htmlFor="name">
            Poste:
          </label>
          <input  type="text"  required />
        </div>
        <div>
        <label  htmlFor="name">
        Adresse mail:
          </label>
          <input  type="email"  required />
        </div>
        <button  type="submit" >

          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Devis