import React from 'react'
import style from './Cartedesejour.module.scss'
import moduleName from 'module'
const Cartedesejour = () => {
    return (
        <div className={style.container}>
            <div className={style.header}><h1>What You Need</h1></div>
            <div className={style.needContainer}>
                <h3><span>1</span>Attestation de scolarité ou d'inscription pour l'année scolaire ou universitaire en cours.</h3>
                <h3><span>2</span>Attestation d'un revenu.</h3>
                <h3><span>3</span>Copie du passeport encore valide.</h3>
                <h3><span>4</span>04 photos d'identité.</h3>
                <h3><span>5</span>Justificatif d'hébergement.</h3>
                <h3><span>6</span>Remplir le formulaire de la demande de visa - Carte de séjour.</h3>
            </div>
        </div>
    )
}

export default Cartedesejour
