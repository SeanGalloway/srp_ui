import axios, {type AxiosInstance} from "axios";


const setToken = (email: string, token: string) => {
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
};

const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
};

const getToken = () : string | null => {
    return localStorage.getItem("token");
};

const getEmail = () : string | null => {
    return localStorage.getItem("email");
};

const getClient = (): AxiosInstance => {
    return axios.create({
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
};

export default {
    setToken,
    logout,
    getToken,
    getEmail,
    getClient
}