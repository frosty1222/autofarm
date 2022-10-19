import axios from "axios";
const setHeaderToken = (token)=>{
    if(token){
        axios.defaults.headers ={
            token: "Bearer " + token,
        };
    }else{
        delete axios.defaults.headers.Authorization;
    }
}
export default setHeaderToken;