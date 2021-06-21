import React from 'react'
import style from './Aboutus.module.scss'
import image from './image.png'

const Aboutus = () => {
    return (
        <div id="goTo" className={style.container}>
            <div className={style.background}>
                <div className={style.header}>
                    <h1>About Us</h1>
                </div>
                <div className={style.desContainer}>
                <div className={style.bubels1}></div>
                <div className={style.bubels2}></div>

                    <div className={style.leftside}>
                            <h2>
                            <span>&#x279C;</span>UniversAfrica apporte la solution aux étudiants africains soucieux à l'orientation universitaire .
                            </h2>

                        <h2>
                        <span>&#x279C;</span>UniversAfrica vous assure l'assistance et le suivi durant vos parcours d'études en Tunisie.    
                        </h2>
                        <h2>
                        <span>&#x279C;</span>La Tunisie avec son écosystème des universités publiques et privées se distingue par sa compétitivité et la qualité de l'enseignement supérieur qui mise sur les technologies et les nouveaux métiers.                                                                 
                        </h2>
                        <h2>
                        <span>&#x279C;</span>UniversAfrica est la première plateforme qui vous assiste étape par étape commençant par le choix de votre futur université tunisienne répondant à vos besoins jusqu'au l'obtention de votre  diplôme , et votre insertion dans la vie professionnelle.
                        </h2>
                    </div>
                    <div className={style.rightside}>
                            <img src={image}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
