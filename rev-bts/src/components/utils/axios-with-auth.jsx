/*
 * Author: Stephen Aranda
 * File  : axios-with-auth.jsx
 * Desc  : axios object that contains the authorization token in header
 * 
 * * */
import axios from 'axios';

const AxiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://bitcoin-transaction-system-be-72349974fde7.herokuapp.com/',
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}

export default AxiosWithAuth;