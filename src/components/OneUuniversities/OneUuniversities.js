import React from 'react'
import style from './OneUuniversities.module.scss'
import icon from './graduation-hat.png'
import { Link } from "react-router-dom";
const OneUuniversities = (props) => {
    const link ="CommentsOfuniversities/"+props.id
    return (
        <Link  style={{color:"black",textDecoration:"none"}} to={link} >
        <div  className={style.container}>
            <div className={style.Icon}><img src={icon}/></div>
            <div className={style.UuniversitieName}><h1>{props.UuniversitieName}</h1></div>
            <div className={style.discription}><h2>{props.discription.slice(0,150)}...</h2></div>
        </div>
        </Link>
    )
}

export default OneUuniversities
