import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Container, Table } from "react-bootstrap";
import axios from "axios";
import { API_PATIENT_GET} from "../constants/ApiUrls";
import { useAuth } from "../providers/AuthProvider";

const PatientInfo = (props) =>
{

    let patient_id = props.patient_id;
    const role = localStorage.getItem("role")

    const [patientInfo, setPatientInfo] = useState({
        patient_id: patient_id,
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        dob: ''
    })
    useEffect(()=>
    {
        if (patient_id ){
            axios.post(API_PATIENT_GET  + patient_id + "/")
            .then((response)=>{
                setPatientInfo(response.data.results);
            })
        }
    }, []);
    
    const titleClass = ["text-dark", "fw-bold"]
    if (role > 1)
    {
        return(
            <>
                <Card className="ps-3">
                    <Card.Body>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Nr:</span>
                            <Container>
                            {patientInfo.patient_id}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Last Name:</span>
                            <Container>
                            {patientInfo.last_name}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>first_name:</span>
                            <Container>
                            {patientInfo.first_name}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Email:</span>
                            <Container>
                            {patientInfo.email}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Phone:</span>
                            <Container>
                            {patientInfo.phone_number}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Date of birth:</span>
                            <Container>
                            {patientInfo.dob}
                            </Container>
                        </Row>
                    </Card.Body>
                </Card>
            </>
        )
    }
    else{
        return(
            <>
                            <Card className="ps-3">
                    <Card.Body>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Nr:</span>
                            <Container>
                            {patientInfo.patient_id}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Last Name:</span>
                            <Container>
                            {patientInfo.last_name}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>first_name:</span>
                            <Container>
                            {patientInfo.first_name}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Email:</span>
                            <Container>
                            {patientInfo.email}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Phone:</span>
                            <Container>
                            {patientInfo.phone_number}
                            </Container>
                        </Row>
                        <Row className="m-2">
                            <span className={titleClass.concat(' ')}>Date of birth:</span>
                            <Container>
                            {patientInfo.dob}
                            </Container>
                        </Row>
                    </Card.Body>
                </Card>
                <Row>
                    <Col><Button>Edit</Button></Col>
                    <Col></Col>
                    <Col><Button>delete</Button></Col>
                </Row>
            </>
        )
    }
};

export default PatientInfo;