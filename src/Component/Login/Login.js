import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
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
                //const user = result.user;
                verifyEmail();
            })
            .catch((error) => {console.log(error)
            setPasserror(error.message);
            });
        ;
        const verifyEmail =() =>{
          sendEmailVerification(auth.currentUser)
          .then(() => {
            toast("Email verification sent");
          })
          
        };
        
    };
    const handlePasswordReset = () => {
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        toast("Password reset email sent");
      })

    }
    const handleEmailBlur = (event) => {setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {setPassword(event.target.value)};
    return (
        <div>
             <>
    <div>
     <div onSubmit={handleSubmit} className="registration w-50 mx-auto mt-5">
       <h2 className="text-primary">Please Login</h2>
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
        <h4 className="mt-2">New to SnapMaster ? Go to  <Link  to="/signup">Signup Page</Link>   </h4>
        <br />
        <Button className="mt-2 csbtn" onClick={hanldeGoogleSignIn}  type="submit"> 
        <FcGoogle className="google" ></FcGoogle>Signin with Google </Button>
      </Form> 
     </div>
    </div>
    </>
        </div>
    );
};

export default Login;