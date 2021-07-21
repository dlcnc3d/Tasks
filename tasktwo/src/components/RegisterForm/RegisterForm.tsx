import React, { useRef, useState } from "react";

import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { Label } from "@material-ui/icons";

import { useForm } from "react-hook-form";
import useStyles from "./RegisterForm.styles";

import { useAuthData } from "../../context/auth.context";
import Alert from "@material-ui/lab/Alert";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  onClose: () => void;
};

export const RegisterForm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { register, watch, getValues, handleSubmit } = useForm<FormValues>();
  const password = React.useRef({});
  password.current = watch("password", "");

  //  const nameRef = useRef<HTMLInputElement>(null);
  //  const emailRef = useRef<HTMLInputElement>(null);
  //  const passwordRef = useRef<HTMLInputElement>(null);
  //  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, currentUser } = useAuthData();

  const submitHandler = async (data: FormValues) => {
    const { confirmPassword, email, firstName, lastName, password } = data;

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      //await auth.createUserWithEmailAndPassword(emailRef.current!.value, passwordRef.current!.value);
      await signUp(email, password);
      console.log(email, password);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.form}>
        <Box p={1} />
        <Grid>
          <label> Sing Up</label>
          <Box p={2} />
          {currentUser && currentUser.email}
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit(submitHandler)}>
            <TextField
              className={classes.input}
              variant="outlined"
              label="first name"
              {...register("firstName", { required: true, minLength: 5 })}
              id="firstName"
            />
            <Box p={1} />
            <TextField
              className={classes.input}
              variant="outlined"
              label="last name"
              {...register("lastName")}
              id="lastName"
            />

            <Box p={1} />
            <TextField
              className={classes.input}
              variant="outlined"
              label="email"
              type="email"
              {...register("email")}
              id="age"
            />

            <Box p={1} />

            <TextField
              className={classes.input}
              variant="outlined"
              type="password"
              label="password"
              {...register("password", {
                //required:true,
                required: "Enter a passw    ord",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
              id="password"
            />
            <Box p={1} />
            <TextField
              className={classes.input}
              variant="outlined"
              type="Password"
              label="confirm password"
              {...register("confirmPassword")}
              id="confirmPassword"
            />

            <Box p={2} />
            <Button
              className={classes.button}
              type="button"
              variant="outlined"
              color="primary"
              onClick={props.onClose}
            >
              close
            </Button>
            <Button
              className={classes.button}
              disabled={loading}
              type="submit"
              variant="outlined"
              color="primary"
              //onClick={handleSubmit(onSubmit)}
            >
              submit
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};
