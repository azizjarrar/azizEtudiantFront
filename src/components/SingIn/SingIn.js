import React from 'react'
import style from './Singin.module.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {singin} from '../../services/user'


const Singin = (props) => {


  const [authData,setAuthData]=React.useState({})
  const changeHandler=(e)=>{
    const {name,value}=e.target
    setAuthData(e=>{
      return {...e,[name]:value}
    })
  }
  const singinApi=()=>{

    singin(authData).then(data=>{
      if(data.data.auth==true){
        localStorage.setItem("id_etud",data.data.data.id_etud)
        localStorage.setItem("cin",data.data.data.cin)
        localStorage.setItem("nom",data.data.data.nom)
        localStorage.setItem("prenom",data.data.data.prenom)
        localStorage.setItem("token",data.data.token)
        window.location.reload();
      }else{
        alert("login incorrect")
      }
    }).catch(error=>{
      console.log(error)
    })
  }
    return (
    <div className={style.Container}>
        <div className={style.close} onClick={()=>props.close()}></div>
        <div className={style.formContainer}>
            <div className={style.header}><h2>Sing In</h2></div>
                <form>
                        <TextField required id="filled-required" name="cin" onChange={(e)=>{changeHandler(e)}} label="cin" defaultValue=""  variant="outlined"/>
                        <TextField required id="filled-required" name="password" onChange={(e)=>{changeHandler(e)}}  type="password" label="password" defaultValue=""  variant="outlined"/>
                        <Button variant="contained" color="#f88za" onClick={() => singinApi()}>Sing In</Button>
                </form>
                <div className={style.goToSingUp}>
                    <p>you don't have account go  now <span onClick={()=>props.openSingUp()}>Sing Up</span>  Now</p>
                </div>
        </div>
    </div>
    )
}

export default Singin