import React, { useRef, useState } from "react";

import {
  Box,
  Button,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import useStyles from "./RegisterForm.styles";

import { useAuthData } from "../../context/auth.context";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";

type FormValues = {
  name: string;
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

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp, currentUser } = useAuthData();
  const history = useHistory();

  const submitHandler = async (data: FormValues) => {
    const { confirmPassword, email, name, password } = data;

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(email, password);
      console.log(email, password);
      history.push("/");
      props.onClose();
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Grid>
          <div className={classes.titlemain}>
            <Typography className={classes.title}>Sign Up </Typography>
            <Box p={1}>
              {error && (
                <Alert
                  className={classes.input}
                  variant="filled"
                  severity="error"
                >
                  {error}
                </Alert>
              )}
            </Box>
          </div>

          <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
            <Box p={1} />

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

            <Box p={1} />
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
            >
              submit
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};
