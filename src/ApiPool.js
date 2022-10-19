import axios from 'axios';
function ApiPool(baseUrl,token,id){
    const instance = axios.create({
        baseURL:baseUrl,
        headers: {
            'token':token
        },
        });
        return instance.post(id)
}
export default ApiPool;