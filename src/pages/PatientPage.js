import React from "react";
import PatientInfo from "../components/PatientInfo";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";

const PatientPage = () =>
{
    const [searchParams] = useSearchParams();
    const patient_id = searchParams.get('patient_id')
    return (
        <>
        <Header></Header>
        <PatientInfo patient_id={patient_id}></PatientInfo>

        </>
);
}

export default PatientPage;