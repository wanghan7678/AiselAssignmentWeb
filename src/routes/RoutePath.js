import React from "react";
import {Routes, Route} from "react-router-dom"
import Authentication from "./Authentication";
import LoginPage from "../pages/LoginPage";
import PatientListPage from "../pages/PatientListPage";
import PatientPage from "../pages/PatientPage";

const RoutePath = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LoginPage/>}></Route>
            <Route exact path="/login" element={<LoginPage/>}></Route>
            <Route path="/patients" element={
                <Authentication>
                    <PatientListPage/>
                </Authentication>
            }></Route>
            <Route path="/patient" element={
                <Authentication>
                    <PatientPage/>
                </Authentication>
            }></Route>
        </Routes>
    );
};

export default RoutePath;