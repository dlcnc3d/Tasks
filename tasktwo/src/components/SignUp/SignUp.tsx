import {
  Box,
  Button,
  Card,
  Paper,
  TextField,
} from "@material-ui/core";
import { Group, Label } from "@material-ui/icons";

import React, { useRef, useState } from "react";
import { useAuthData } from "../../context/auth.context";
import Alert from '@material-ui/lab/Alert';

//import { auth } from "../../core/firebase/firebase";


export const SignUp = () => {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {signUp, currentUser} = useAuthData();

  const  handleSubmit= async(e: any)=> {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      //await auth.createUserWithEmailAndPassword(emailRef.current!.value, passwordRef.current!.value);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Paper>
      <Box p={1} />
      <Card>
      
        <h2>Sign Up</h2>
        <Box p={1} />
        {currentUser && currentUser.email}
        {error && <Alert
        variant='outlined'
        severity="error"
        >{error}</Alert>}
        <Box p={1} />
        <form  onSubmit={handleSubmit}>
        <div id="email">
          <TextField 
          label="name" 
          variant="outlined" 
          ref={nameRef} 
          required />
        </div>
        <Box p={1} />

        <div id="email">
          <TextField
            label="email"
            type="email"
            variant="filled"
            ref={emailRef}
            required
          />


        </div>
        <Box p={1} />

        <div id="password">
          <TextField
            label="password"
            type="password"
            variant="outlined"
            ref={passwordRef}
            required
          />
        </div>
        <Box p={1} />
        <div id="passwordConfirm">
          <TextField
            label="passwordConfirm"
            type="password"
            variant="outlined"
            ref={passwordConfirmRef}
            required
          />
        </div>
        <Box p={1} />
        <Button 
        disabled={loading}
        type="submit" 
        variant="outlined">
          submit
        </Button>
      

      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
      </form>
      </Card>
    </Paper>
  );
};
