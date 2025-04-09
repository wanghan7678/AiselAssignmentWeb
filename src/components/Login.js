import React, {useState} from "react";
import {useAuth} from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, Form} from "react-bootstrap";
import "../theme1.css";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassord] = useState(null);
    const {login} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (event) => {
        event.preventDefault();
        login(email, password);
    };

    return (
<>
<div className="container m-5 d-flex align-items-center" style={{height:"70vh"}}>
    <Card style={{width: 400}}>
            <Card.Body>
                <Card.Title>Sign In</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" placeholder="User Emain" onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassord(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="Login" onClick={(e)=> handleLogin(e)}>
        Login
      </Button>
      <span className="m-5"><a href="Register">Sign Up</a></span>
                </Form>
            </Card.Body>
        </Card>
</div>


</>
    );
};

export default Login;