import axios from "axios";

const API_URL = "http://localhost:5010/user/";
//    return axiosApiInstance.post('/postnrmltopic/getSelectedTopicPosts',{...data},{ headers: {Authorization: 'Bearer ' + token }})

const singin=(data)=>{
  return axios.post(API_URL+"singIn",{...data})
}
const singUpCall=(data)=>{
  return axios.post(API_URL+"singUp",{...data})
}
const getUserData=(token)=>{
  return axios.post(API_URL+"getUserData",{},{ headers: {Authorization: 'Bearer ' + token }})
}
export {getUserData,singin,singUpCall};
