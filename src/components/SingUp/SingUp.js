

import React from 'react'
import style from './SingUp.module.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {singUpCall} from '../../services/user'
import { useHistory } from "react-router-dom";



const SingUp = (props) => {
  const [userData,setUserData]=React.useState({cin:"",code_fac:"",email:"",moyenne_bac:"",nom:"",pays:"",prenom:"",tel:"",type_bac:"",password:""})
  const [ErroruserData,setErrorUserData]=React.useState({cin:{message:"cin obligatoire",state:false},code_fac:{message:"code_fac obligatoire",state:false},
  email:{message:"email obligatoire",state:false},moyenne_bac:{message:"moyenne_bac obligatoire",state:false},
  nom:{message:"nom obligatoire",state:false},pays:{message:"pays obligatoire",state:false},
  prenom:{message:"prenom obligatoire",state:false},tel:{message:"tel obligatoire ",state:false},
  type_bac:{message:"type_bac obligatoire",state:false},password:{message:"password obligatoire",state:false}})

  let history = useHistory();

  const singupAPI=()=>{
    var testData=false;
    for (let prop in userData) {
      if (userData[prop].length==0){
        testData=true
        setErrorUserData(e=>{
          return {...e,[prop]:{message:ErroruserData[prop].message,state:true}}
        })
      }  else  if(prop=="email"){

        let  re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(userData[prop])){
          testData=true

          setErrorUserData(e=>{
            return {...e,[prop]:{message:"Adresse e-mail non valide",state:true}}
          })
        }

      }else if(prop=="password" && userData[prop].length<8){
        testData=true

        setErrorUserData(e=>{
          return {...e,[prop]:{message:"le mot de passe doit comporter plus de 8 caractères",state:true}}
        })
      }
      else if(prop=="cin" && userData[prop].length<8){
        testData=true

        setErrorUserData(e=>{
          return {...e,[prop]:{message:"cin doit comporter 8 caractères",state:true}}
        })
      }
    }
    if(testData==false){
      singUpCall(userData).then(data=>{
        
        if(data.data.auth==false){
          alert(data.data.message)
        }else{
          props.openSingIn()
        }
      }).catch(error=>{
        alert(error)
      })
    }

  }
  React.useEffect(()=>{
  },[ErroruserData])
  const inputHandler=(e)=>{
    const {name,value}=e.target
    setErrorUserData(e=>{
      return {...e,[name]:{message:ErroruserData[name].message,state:false}}
    })
    setUserData(e=>{
      return {...e,[name]:value}
    })
 
  }

    return (
        									
        <div className={style.Container}>
        <div className={style.close} onClick={()=>props.close()}></div>

                <div className={style.formContainer}>
                <div className={style.header}><h2>Sing Up</h2></div>

                    <form>
                        <div className={style.left}>
                        <TextField type="number" helperText={ErroruserData.cin.state==true&&ErroruserData.cin.message} error={ErroruserData.cin.state==true}   id="filled-required" name="cin" onChange={(e)=>inputHandler(e)} label="cin" defaultValue=""  variant="outlined"/>

                        <TextField helperText={ErroruserData.code_fac.state==true&&ErroruserData.code_fac.message} error={ErroruserData.code_fac.state==true}  id="filled-required"  name="code_fac" onChange={(e)=>inputHandler(e)} label="code fac" defaultValue=""  variant="outlined"/>
                        <TextField helperText={ErroruserData.email.state==true&&ErroruserData.email.message} error={ErroruserData.email.state==true}  id="filled-required"  name="email" onChange={(e)=>inputHandler(e)} label="email" defaultValue=""  variant="outlined"/>
                        <TextField type="number" helperText={ErroruserData.moyenne_bac.state==true&&ErroruserData.moyenne_bac.message} error={ErroruserData.moyenne_bac.state==true}  id="filled-required"  name="moyenne_bac" onChange={(e)=>inputHandler(e)} label="moyenne_bac" defaultValue=""  variant="outlined"/>
                        <TextField helperText={ErroruserData.pays.state==true&&ErroruserData.pays.message} error={ErroruserData.pays.state==true}  id="filled-required"  name="pays" onChange={(e)=>inputHandler(e)} label="pays" defaultValue=""  variant="outlined"/>

                        </div>
                        <div className={style.right}>
                        <TextField helperText={ErroruserData.prenom.state==true&&ErroruserData.prenom.message} error={ErroruserData.prenom.state==true}  id="filled-required"  name="prenom" onChange={(e)=>inputHandler(e)} label="prenom" defaultValue=""  variant="outlined"/>
                        <TextField helperText={ErroruserData.nom.state==true&&ErroruserData.nom.message} error={ErroruserData.nom.state==true}  id="filled-required"  name="nom" onChange={(e)=>inputHandler(e)} label="nom" defaultValue=""  variant="outlined"/>

                        <TextField type="number" helperText={ErroruserData.tel.state==true&&ErroruserData.tel.message} error={ErroruserData.tel.state==true}  id="filled-required"  name="tel" onChange={(e)=>inputHandler(e)} label="tel" defaultValue=""  variant="outlined"/>
                        <TextField helperText={ErroruserData.type_bac.state==true&&ErroruserData.type_bac.message} error={ErroruserData.type_bac.state==true}  id="filled-required"  name="type_bac" onChange={(e)=>inputHandler(e)} label="type_bac" defaultValue=""  variant="outlined"/>
                        <TextField  type="password" helperText={ErroruserData.password.state==true&&ErroruserData.password.message} error={ErroruserData.password.state==true}  id="filled-required"  name="password" onChange={(e)=>inputHandler(e)} label="password" defaultValue=""  variant="outlined"/>

                        </div>
                    </form>
                    <Button onClick={()=>singupAPI()} variant="contained" color="#f88za">Sing Up</Button>

                    <div className={style.goToSingIn}>
                      
                    <p>already have an account  <span onClick={()=>props.openSingIn()}>Sing In</span>  Now</p>
                    </div>
                </div>
        </div>
    )
}

export default SingUp
