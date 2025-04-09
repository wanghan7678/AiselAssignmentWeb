import React from "react";
import { createContext, useContext, useState, useEffect, useMemo} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_LOGIN, API_ADD_USER } from "../constants/ApiUrls";

const AuthContext = createContext(null);

const AuthProvider = ( {children}) => 
{
    const navigate = useNavigate();
    const redirectPath = "/patients";
    const registerPath = "/register";
    const loginPath = "/login";

    const [user, setUser] = useState(
        {
            username: localStorage.getItem("email"),
            role: localStorage.getItem("role"),
        }
    );
    const [token, setToken_] = useState(localStorage.getItem("token"))

    const setToken = (newToken) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token.token;
        }
    }, [token]);


    const login = (username, password) =>
    {
        delete axios.defaults.headers.common["Authorization"]
        axios.post(API_LOGIN,
            {
            "email":username,
            "password":password
        }
        )
        .then((response) => {
            if (response.data.access)
            {
                setUser({username: response.data.email, role: response.data.role});
                setToken({token: response.data.access})
                localStorage.setItem("role", response.data.role);
                localStorage.setItem("username", response.data.email);
                localStorage.setItem("token", response.data.access);
                navigate(redirectPath, {replace: true});
            }
            

        })
        .catch((error)=>{
            console.log('error:', error);
            navigate(loginPath, {replace: true});
        });
    };

    const logout = () =>
    {
        setUser(null);
    };

    const register = (role, email, phone, password) =>
    {
        axios.post(API_ADD_USER, {
            email,
            phone,
            role,
            password
        }
        )
        .then((response) => {
            if (response.data.access)
            {
                setUser({username: response.data.email, role: response.data.role});
                setToken({token: response.data.access});
               
            }
            navigate(redirectPath, {replace: true});

        })
        .catch((error)=>{
            
        });
    }

    return <AuthContext.Provider value={{token, user, login, logout, register}}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () =>
{
    return useContext(AuthContext);   
}
export default AuthProvider;