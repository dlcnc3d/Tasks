import React, { useRef, useState } from "react";

import { Box, Button, Grid, Paper, Select, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import useStyles from "./LoginForm.styles";

import { useAuthData } from "../../context/auth.context";
import Alert from "@material-ui/lab/Alert";
import { Link, useHistory } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

type Props = {
  onClose: () => void;
};

export const LoginForm: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { register, watch, getValues, handleSubmit, control } =
    useForm<FormValues>();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //---------------
  const { logIn, currentUser } = useAuthData();

  const submitHandler = async (data: FormValues) => {
    const { email, password } = data;

    try {
      setError("");
      setLoading(true);
      await logIn(email, password);
      console.log(email, password);
      history.push("/");
      props.onClose();
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Grid>
          <div className={classes.titlemain}>
            <label className={classes.title}>Log In</label>
            {currentUser && currentUser.email}
            <Box p={1}>
              {error && (
                <Alert
                  className={classes.input}
                  variant="outlined"
                  severity="error"
                >
                  {error}
                </Alert>
              )}
            </Box>
          </div>

          <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
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
              Log In
            </Button>

            <div className={classes.text}>
              Don't have account?
              <Link to="/signup">Sign Up</Link>
            </div>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};
