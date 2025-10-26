/*
 * Author: Stephen Aranda
 * File  : axios-with-auth.jsx
 * Desc  : axios object that contains the authorization token in header
 * 
 * * */
import axios from 'axios';

const AxiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:8000/',
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}

export default AxiosWithAuth;