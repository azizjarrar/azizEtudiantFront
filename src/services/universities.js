import axios from "axios";

const API_URL = "http://localhost:5010/universities/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const getmetiers=(data)=>{
  return axios.post(API_URL+"getmetiers",{...data})
}
const getspecialites=(data)=>{
  return axios.post(API_URL+"getspecialites",{...data})

}
const getuniversities=(data)=>{
  return axios.post(API_URL+"getuniversities",{...data})
}
const getOneuniversities=(data)=>{
  return axios.post(API_URL+"getOneuniversities",{...data})

}
export {getOneuniversities,getmetiers,getspecialites,getuniversities};
