import React from 'react'
import style from './CommentsOfuniversities.module.scss'
import image from './imageOfFac.jpg'
import Comments from '../comments/comments'
import Button from '@material-ui/core/Button';
import { useParams} from "react-router-dom";
import {getOneuniversities} from '../../services/universities'
import {getComments,addComments,deleteComments} from '../../services/comments'
const CommentsOfuniversities = () => {
    let { id } = useParams();
    const [universities,setUniversities]=React.useState({})
    const [comments,setComment]=React.useState([])
    const [addCommentData,setAddCommentData]=React.useState()

        React.useEffect(()=>{
            getOneuniversities({id:id}).then(data=>{
                setUniversities(data.data.data[0])
            })
            getComments({facultes_id:id}).then(data=>{
                if(data.data.data==undefined){
                    setComment([])

                }else{
                    setComment([...data.data.data])
                }
            })
        },[])

        const commentHandler=(e)=>{
            setAddCommentData(e.target.value);
        }
        const addComment=(e)=>{
            addComments({description:addCommentData,facultes_id:id}).then(data=>{
                getComments({facultes_id:id}).then(data=>{
                    if(data.data.data==undefined){
                        setComment([])
    
                    }else{
                        setComment([...data.data.data])
                    }
                })

            })
        }
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.description}>
                    <h1>{universities.nom}</h1>
                    <h2>{universities.description}</h2>
                </div>
                <div className={style.img}><img src={image}/>
                </div>
            </div>
            {localStorage.getItem("token")!=undefined&&<div className={style.addComment}>
            <input  onChange={(e)=>{commentHandler(e)}} name="description" placeholder="add your comment" />
            <Button  onClick={e=>{addComment()}} variant="contained" color="#f88za">Add Comment</Button>
            </div>}
            <div className={style.review}>
                {comments.map(e=><Comments  date={e.date} owner={e.owner} id_comment={e.id_comment} userName={e.firstname  + " " + e.lastname} comment={e.description}></Comments>).reverse()}
               

            </div>
        </div>
    )
}

export default CommentsOfuniversities
