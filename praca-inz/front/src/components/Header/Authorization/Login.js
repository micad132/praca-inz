import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";
import { useState } from "react";
import AuthWrapper from "./AuthWrapper";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
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

  //   const [isFormValid, setIsFormValid] = useState(true);
  let isFormValid = true;

  const validateForm = (e) => {
    e.preventDefault();
    setLoginValidation((prevState) => ({
      emailField: false,
      passwordField: false,
      confirmPasswordField: false,
    }));

    if (loginValues.emailValue.length < 4) {
      isFormValid = false;
      setLoginValidation((prevState) => ({
        ...prevState,
        emailField: true,
      }));
    }
    if (loginValues.passwordValue.length < 4) {
      isFormValid = false;
      setLoginValidation((prevState) => ({
        ...prevState,
        passwordField: true,
      }));
    }
    if (
      loginValues.confirmPasswordValue.length < 4 ||
      loginValues.confirmPasswordValue !== loginValues.passwordValue
    ) {
      isFormValid = false;
      setLoginValidation((prevState) => ({
        ...prevState,
        passwordField: true,
        confirmPasswordField: true,
      }));
    }

    // console.log(loginValidation.emailField);
    // console.log(loginValidation.passwordField);
    // console.log(loginValidation.confirmPasswordField);
    if (isFormValid) {
      navigate("/", { replace: true });
    }
  };

  return (
    <AuthWrapper>
      <h2>Zaloguj się aby w pełni korzystać z możliwości!</h2>
      <form className={styles.form} onSubmit={(e) => validateForm(e)}>
        <TextField
          id="outlined-basic"
          label={
            loginValidation.emailField
              ? "Niepoprawna wartość(E-mail)"
              : "E-mail"
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
            loginValidation.passwordField
              ? "Niepoprawna wartość(Hasło)"
              : "Hasło"
          }
          helperText="Przynajmniej 4 znaki"
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
          helperText="Proszę potwierdzić hasło"
          value={loginValues.confirmPasswordValue}
          onChange={(e) => {
            setLoginValues((prevState) => ({
              ...prevState,
              confirmPasswordValue: e.target.value,
            }));
          }}
          error={loginValidation.confirmPasswordField ? true : false}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ width: "50%", margin: "0 auto" }}
        >
          Zaloguj się
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Login;
