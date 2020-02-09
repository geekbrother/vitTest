// Axois services for API requests
import axios from 'axios';

// Global constants

// api host
const APIhost = 'http://195.242.161.52:8888';

// Login function
// return True if succesfull, False if denied.
export default async function Login(username, password){

    const loginData = {
        username,
        password
    }

    try {
        let response = await axios.post(`${APIhost}/login`, loginData);
        let auth = response.data;
        if (auth.Auth === 'Denied') return false;
        if (auth.Auth  ===  "Logged") return true;
    }catch (e) {
        console.log(e)
        return false;
    }
}