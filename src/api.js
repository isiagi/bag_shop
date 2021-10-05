import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:5000/api/v1/user/',
    headers: { 
        'Content-Type':'application/json',
        'Acess-Control-Allow-Origin':'*',
        'Accept': "application/json"
    }
})

//usage
// await instance.get(url,data)  'Authorization':`Bearer ${token}`,