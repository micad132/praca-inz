import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";
import { useState } from "react";

const Login = () => {
  const [loginValidation, setLoginValidation] = useState({
    emailField: false,
    passwordField: false,
    confirmPasswordField: false,
  });

  const [loginValues, setLoginValues] = useState({
    emailValue: "",
    passwordValue: "",
    confirmPasswordValue: "",
  });

  const validateForm = (e) => {
    e.preventDefault();
    setLoginValidation((prevState) => ({
      emailField: false,
      passwordField: false,
      confirmPasswordField: false,
    }));

    if (loginValues.emailValue.length < 4) {
      setLoginValidation((prevState) => ({
        ...prevState,
        emailField: true,
      }));
    }
    if (loginValues.passwordValue.length < 4) {
      setLoginValidation((prevState) => ({
        ...prevState,
        passwordField: true,
      }));
    }
    if (
      loginValues.confirmPasswordValue.length < 4 ||
      loginValues.confirmPasswordValue !== loginValues.passwordValue
    ) {
      setLoginValidation((prevState) => ({
        ...prevState,
        passwordField: true,
        confirmPasswordField: true,
      }));
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => validateForm(e)}>
      <TextField
        id="outlined-basic"
        label={
          loginValidation.emailField ? "Niepoprawna wartość(E-mail)" : "E-mail"
        }
        variant="outlined"
        value={loginValues.emailValue}
        onChange={(e) => {
          setLoginValues((prevState) => ({
            ...prevState,
            emailValue: e.target.value,
          }));
        }}
        error={loginValidation.emailField ? true : false}
      />
      <TextField
        id="outlined-basic"
        label={
          loginValidation.passwordField ? "Niepoprawna wartość(Hasło)" : "Hasło"
        }
        variant="outlined"
        value={loginValues.passwordValue}
        onChange={(e) => {
          setLoginValues((prevState) => ({
            ...prevState,
            passwordValue: e.target.value,
          }));
        }}
        error={loginValidation.passwordField ? true : false}
      />
      <TextField
        id="outlined-basic"
        label={
          loginValidation.emailField ? "Niepoprawna wartość(Hasło)" : "Hasło"
        }
        variant="outlined"
        helperText="Proszę potwierdź hasło"
        value={loginValues.confirmPasswordValue}
        onChange={(e) => {
          setLoginValues((prevState) => ({
            ...prevState,
            confirmPasswordValue: e.target.value,
          }));
        }}
        error={loginValidation.confirmPasswordField ? true : false}
      />
      <Button variant="contained" type="submit">
        Zaloguj się
      </Button>
    </form>
  );
};

export default Login;
