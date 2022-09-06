import axios from "axios"

const ApiService = (url) =>{
    return axios.get(url)
}

export default ApiService