import axios from "axios";

const API_URL = "http://localhost:5010/comments/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getComments=(data)=>{
  return axios.post(API_URL+"getComments",{...data})
}
const addComments=(data)=>{
  return axios.post(API_URL+"addComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token")}})
}
const deleteComments=(data)=>{
  return axios.post(API_URL+"deleteComments",{...data},{ headers: {Authorization: 'Bearer ' + localStorage.getItem("token") }})
}
export {getComments,addComments,deleteComments};
