import React from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom"
import AuthProvider, { useAuth } from "../providers/AuthProvider";

const Authentication = ( {children}) => {
    const navigate = useNavigate()
    const token = useAuth()
    if (!token)
    {
        navigate("/login");
    }
    return children;
}

export default Authentication;