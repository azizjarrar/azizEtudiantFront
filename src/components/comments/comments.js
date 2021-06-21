import React from 'react'
import style from './comments.module.scss'
import {deleteComments} from '../../services/comments'

const Comments = (props) => {
    const [deletee,setDelete]=React.useState(false)
    const openDelte=()=>{
        setDelete(e=>!e)
    }
    const deleteCommentsFn=()=>{
        deleteComments({id_comment:props.id_comment}).then(data=>{
            window.location.reload();
        })
    }
    return (
        <div className={style.container}>
            <div className={style.userName}><h3>{props.userName}</h3></div>
            <div className={style.comment}><p>{props.comment}</p></div>
            {localStorage.getItem("id_etud")==props.owner&&localStorage.getItem("token")!=undefined&&<div className={style.delete} onClick={()=>{openDelte()}}>&hellip;{deletee&&<div onClick={()=>{deleteCommentsFn()}} className={style.deletecss}><h4>Delete</h4></div>}</div>}         
        </div>
    )
}

export default Comments
