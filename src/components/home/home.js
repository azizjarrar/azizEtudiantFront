import { Style } from "@material-ui/icons";
import React  from "react";
import background from './background.jpg'
import arrowDown from './down-chevron.png'
import style from './home.module.scss'
import OneUuniversities from '../OneUuniversities/OneUuniversities'
import Aboutus from '../aboutus/Aboutus'
import Select from 'react-select'
import {getmetiers,getuniversities,getspecialites} from '../../services/universities'
 const Home = ()=>{
    const [optionsOne,setOptionsOne]=React.useState([])
    const [optionsTwo,setOptionsTwo]=React.useState([])

    const [pickedmetie,setPickedmetie]=React.useState(()=>null)
    const [pickedspecialites,setpickedspecialites]=React.useState(()=>null)
    const [universities,setUniversities]=React.useState([])


    const [descmetie,setmetie]=React.useState("")
    const [descspecialites,setspecialites]=React.useState()

    React.useEffect(()=>{
        getmetiers().then(data=>{
            setOptionsOne(data.data.data.map((e=>{
                return {value:e.id,label:e.nom,desc:e.description}
            }))) 
        })
    },[])
    const pickedMetiesFn=(e)=>{
        setPickedmetie(e.value)
        setmetie(optionsOne.filter(data=>data.value==e.value)[0].desc)
    }
    const pickedspecialitesFn=(e)=>{
        setpickedspecialites(e.value)
        setspecialites(optionsTwo.filter(data=>data.value==e.value)[0].desc)
    }
    React.useEffect(()=>{
        getspecialites({metier_id:pickedmetie}).then(data=>{
            setOptionsTwo([...data.data.data.map((e=>{
                return {value:e.id,label:e.nom,desc:e.description}
            }))])
            
        })

    },[pickedmetie])
    React.useEffect(()=>{
        getuniversities({specialites:pickedspecialites}).then(data=>{
            setUniversities([...data.data.data])       
        })
    },[pickedspecialites])


    return (
    <div className={style.bodyContainer}>
    <div className={style.container} style={{backgroundImage:`url(${background})`}}>
        <div className={style.title}>
                <h1>africa universities</h1>
                <h3>UniversAfrica apporte la solution aux étudiants africains soucieux à l'orientation universitaire . </h3>
                <a href="#goTo"><div  className={style.arrowDown}><img src={arrowDown}/></div></a>
        </div>
    </div>
    <Aboutus/>
    <div className={style.listOfUniversities}>
        <div className={style.lineDesign1}></div>
        <div className={style.lineDesign2}></div>
        <div className={style.lineDesign3}></div>
        <div className={style.lineDesign4}></div>
        <div   className={style.header}>
        <h1>africa universities </h1>
        </div>
        <div className={style.navsearchForUniversiti}>
        <div className={style.selectContainer}><h1>metiers</h1>
            <div  className={style.selectItem}>
                <Select    onChange={(e)=>{pickedMetiesFn(e)}} instanceId={"idunique"} id={"gzegzegze"} options={optionsOne} />
                
            </div>
        </div>
        {pickedmetie!=null&&<div className={style.selectContainer}><h1>specialites</h1>
            <div   className={style.selectItem}>
                <Select    onChange={(e)=>{pickedspecialitesFn(e)}} instanceId={"idunique"} id={"gzegzegze"} options={optionsTwo}/>
            </div>
        </div>}

        </div>
        <div className={style.description}>
            <div className={style.descriptionText}>
                <p>
                {descmetie}
                </p>
            </div>
            <div className={style.descriptionText}>
            <p>
                {descspecialites}
                </p>
            </div>
        </div>
        <div className={style.listOfUniversitiesContainer}>
            {universities.map(e=><OneUuniversities id={e.id} UuniversitieName={e.nom} discription={e.description}/>)}
           
        </div>
    </div>
    </div>
    );
  
}
export default Home