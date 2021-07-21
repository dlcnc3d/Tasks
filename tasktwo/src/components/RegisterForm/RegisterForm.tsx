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

import { Controller, useForm } from "react-hook-form";
import useStyles from "./RegisterForm.styles";

import { useAuthData } from "../../context/auth.context";
import Alert from "@material-ui/lab/Alert";

type FormValues = {
  Name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  onClose: () => void;
};

export const RegisterForm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { register, watch, getValues, handleSubmit, control } =
    useForm<FormValues>();
  //const password = React.useRef({});
  //password.current = watch("password", "");

  //  const nameRef = useRef<HTMLInputElement>(null);
  //  const emailRef = useRef<HTMLInputElement>(null);
  //  const passwordRef = useRef<HTMLInputElement>(null);
  //  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, currentUser } = useAuthData();

  const submitHandler = async (data: FormValues) => {
    const { confirmPassword, email, Name, password } = data;

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(email, password);
      console.log(email, password);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Box p={1} />
        <Grid>
          <div className={classes.title}>
            <label> Sing Up</label>
            <Box p={2} />
            {currentUser && currentUser.email}
            {error && (
              <Alert
                className={classes.input}
                variant="outlined"
                severity="error"
              >
                {error}
              </Alert>
            )}
          </div>
          <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
            <Controller
              name="Name"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className={classes.input}
                  variant="outlined"
                  label="Name"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  //{...register("Name", { required: true, minLength: 5 })}
                  id="Name"
                />
              )}
              rules={{ required: "Name is required" }}
            />

            <Box p={1} />

            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className={classes.input}
                  variant="outlined"
                  label="email"
                  type="email"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="age"
                />
              )}
              rules={{ required: "email is required" }}
            />
            <Box p={1} />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className={classes.input}
                  variant="outlined"
                  type="password"
                  label="password"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="password"
                />
              )}
              rules={{
                required: "password is required",
                minLength: {
                  value: 4,
                  message: "Password must have at least 4 characters",
                },
              }}
            />

            <Box p={1} />
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className={classes.input}
                  variant="outlined"
                  type="password"
                  label="confirm password"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  id="confirmPassword"
                />
              )}
              rules={{
                required: "confirm password",
                minLength: {
                  value: 4,
                  message: "Password must have at least 4 characters",
                },
              }}
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

          <div className={classes.form}>Already have an account? Log in</div>
        </Grid>
      </Paper>
    </div>
  );
};
