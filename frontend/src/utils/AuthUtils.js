import axios from "axios"
import Toast from "./Toast"

const baseUrl = process.env.REACT_APP_SERVER_URL
const AuthUtils = {

    'login': async (email, password) => {
        const res = await axios.post(`${baseUrl}/auth/login`, {
            "email": email,
            "password": password
        })

        if (res.status == 200) {
            const { token } = res.data;

            const user = AuthUtils.parseJwt(token);
            console.log('user :', user);
            localStorage.setItem('token', token);

            return user

        } else if (res.status == 401) {
            Toast.success('Invalid Credentials')
            return false
        }
    },


    'signup': async (email, password, role) => {
        const res = await axios.post(`${baseUrl}/auth/register`, {
            "email": email,
            "password": password,
            "role": role
        })

        if (res.status == 201) {
            Toast.success('Registered successfully')
            return true
        } else {
            return false
        }
    },
    parseJwt: (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            return null;
        }
    }

}

export default AuthUtils