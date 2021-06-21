import React,{useState,useEffect} from 'react'
import style from './profile.module.scss'
import TextField from '@material-ui/core/TextField';
import {getUserData} from '../../services/user'
import avatar from './avatar.png'
const Profile = () => {
    const [userData,setUserData]=React.useState({})

    useEffect(()=>{
        getUserData(localStorage.getItem("token")).then(data=>{
            console.log(data.data.data[0])
            setUserData({...data.data.data[0]})
        })
    },[])
    const changeHandler=(data)=>{
        /*setUserData(e=>{
            return {...e,[data.target.name]:data.target.value}
        })*/
    }

    return (
        <div className={style.container}>
            <div className={style.formContainer}>
                <div className={style.userImageContainer}>
                    <div className={style.image}>
                                <img src={avatar}/>
                    </div>
                </div>
                <form>
      
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" cin"  variant="filled"    value={userData.cin} onChange={(e)=>{changeHandler(e)}} /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" code_fac"  variant="filled"    value={userData.code_fac} name="code_fac" onChange={(e)=>{changeHandler(e)}} /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" email"  variant="filled"    value={userData.email} name="email" onChange={(e)=>{changeHandler(e)}} /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" moyene_bac"  variant="filled"    value={userData.moyenne_bac} name="moyenne_bac" onChange={(e)=>{changeHandler(e)}}   /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" nom"  variant="filled"    value={userData.nom} name="nom" onChange={(e)=>{changeHandler(e)}}    /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" prenom"  variant="filled"    value={userData.prenom} name="prenom" onChange={(e)=>{changeHandler(e)}} /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" password"  variant="filled"    value={"**********"} name="password" onChange={(e)=>{changeHandler(e)}} /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" pays"  variant="filled"    value={userData.pays} name="pays" onChange={(e)=>{changeHandler(e)}} /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" tel"  variant="filled"    value={userData.tel} name="tel" onChange={(e)=>{changeHandler(e)}} /></div>
                <div className={style.inputContainer}><TextField defaultValue={" "} disabled id="filled-disabled" label=" type_bac"  variant="filled"    value={userData.type_bac} name="type_bac" onChange={(e)=>{changeHandler(e)}} /></div>

                </form>
                {/*<button>update</button>*/}

            </div>
        </div>
    )
}

export default Profile
