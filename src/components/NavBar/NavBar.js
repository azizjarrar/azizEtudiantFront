import { Style } from '@material-ui/icons'
import React from 'react'
import style from  './NavBar.module.scss'
import logo from './logo.png'
import SingIn  from '../SingIn/SingIn'
import SingUp from '../SingUp/SingUp'
import { useHistory } from "react-router-dom";
import {
    Link
  } from "react-router-dom";
const NavBar = (props) => {
    let history = useHistory();

    const [currentPage,setCurrentPage]=React.useState(null)
    const closeFn=()=>{
        setCurrentPage(null)
        console.log("close")
    }
    const openPage=(page)=>{
        setCurrentPage(page)

    }
    React.useEffect(()=>{
        console.log(currentPage)
    },[currentPage])
    function GoTo() {
        history.push("/");
      }
      if(localStorage.getItem("token") != undefined){
        return (
            <nav className={style.navbarCss}>
                <div className={style.logo} onClick={()=>GoTo()}><img src={logo}/></div>
                <div className={style.connexion}>
                    <ul>
                        <Link style={{ textDecoration: 'none' ,color:"black"}} to="/Cartedesejour"><li >Carte de séjour</li></Link>
                        <Link style={{ textDecoration: 'none' ,color:"black"}} to="/profile"><li >Profile</li></Link>
                        <li onClick={()=>{localStorage.removeItem("token");window.location.reload();}}>Log Out</li>

                    </ul>
                </div>

            </nav>
            
        )
      }else{
        return (
            <nav className={style.navbarCss}>
                <div className={style.logo} onClick={()=>GoTo()}><img src={logo}/></div>
                <div className={style.connexion}>
                    <ul>
                        <li onClick={()=>openPage("SingIn")}>Sing In</li>
                        <li onClick={()=>openPage("SingUp")}>Sing Up</li>
                    </ul>
                </div>
               {currentPage=="SingUp"&&<SingUp  close={()=>closeFn()}/>}
               {currentPage=="SingIn"&&<SingIn  close={()=>closeFn()}/>}
            </nav>
            
        )
      }

}

export default NavBar
