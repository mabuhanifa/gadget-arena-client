import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../firebase.init";
import './Login.css';


const Login = () => {
    const [signInWithGoogle,user ] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPasserror] = useState("");
    const [emailError, setEmailerror] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const hanldeGoogleSignIn = () => {
        signInWithGoogle()
        .then(()=>{
                navigate(from, { replace: true });
            })

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((password.length < 6) || (!/^[0-9a-zA-Z]+$/.test(password)) ){
            setPasserror("Password must be at least 6 characters and contain only letters and numbers");
            return;
        };
        setPasserror("");

        if (!/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/.test(email)){
            setEmailerror ("Email must be in the valid format");
            return;}
        setEmailerror("");
        createUserWithEmailAndPassword(auth,email, password)
            .then(result => {
                const user = result.user;
                verifyEmail();
                navigate('/inventories', { replace: true });

            })
            .catch((error) => {console.log(error)
            setPasserror(error.message);
            });
        ;
        const verifyEmail =() =>{
          sendEmailVerification(auth.currentUser)
          .then(() => {
            toast.success("Email verification sent");
          })
          
        };
        
    };
    const handlePasswordReset = () => {
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        toast.success("Password reset email sent");
      })

    }
    const handleEmailBlur = (event) => {setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {setPassword(event.target.value)};
    
    return (
    <>
    <div className="w-50 mx-auto mt-5 l_g_f">
    <ToastContainer />
     <div onSubmit={handleSubmit} className="registration w-50 mx-auto mt-5 ">
       <h4 className="text-primary">Please Login To Manage Inventories</h4>
       <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
          <p className="text-danger">{emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
          <p className="text-danger">{passError}</p>
          <p className="text-success">{passError}</p>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
       
        
        <br />
        <Button className="mt-2"onClick={handlePasswordReset} variant="link">Forget Password?</Button><br />
        
        <br />
        <Button className="mt-2 mb-5 px-5 py-2" onClick={hanldeGoogleSignIn}  type="submit"> 
        <FcGoogle className="icon"></FcGoogle> Signin with Google </Button>
      </Form> 
     </div>
    </div>
    </>
  );
};

export default Login;