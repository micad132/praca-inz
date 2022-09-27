import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";
import { useState } from "react";
import AuthWrapper from '../../../pages/Authorization/AuthWrapper';
import { useNavigate } from "react-router-dom";
import {FormChangeEventHandler} from "../../../utils/types";
import {emailValidation, passwordValidation} from "../../../services/ValidationService";
import {LoginValidationValuesTypes, LoginValuesTypes} from "../../../utils/types/AuthorizationTypes";



const initialLoginValidationState = {
  emailField: false,
  passwordField: false,
  confirmPasswordField: false
}

const initialLoginValuesState = {
  emailValue: '',
  passwordValue: '',
  confirmPasswordValue: ''
}

const Login = () => {
  let navigate = useNavigate();
  const [loginValidation, setLoginValidation] = useState<LoginValidationValuesTypes>(initialLoginValidationState);

  const [loginValues, setLoginValues] = useState<LoginValuesTypes>(initialLoginValuesState);

  //   const [isFormValid, setIsFormValid] = useState(true);
  let isFormValid = true;

  const validateForm = (e : FormChangeEventHandler) => {
    e.preventDefault();
    const {emailValue,passwordValue,confirmPasswordValue} = loginValues;
    setLoginValidation((prevState) => ({
      emailField: false,
      passwordField: false,
      confirmPasswordField: false,
    }));

    if (!emailValidation(emailValue)) {
      isFormValid = false;
      setLoginValidation((prevState) => ({
        ...prevState,
        emailField: true,
      }));
    }
    if (!passwordValidation(passwordValue)) {
      isFormValid = false;
      setLoginValidation((prevState) => ({
        ...prevState,
        passwordField: true,
      }));
    }
    if (
        !passwordValidation(passwordValue) ||
      confirmPasswordValue !== passwordValue
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
      <h2 className={styles.title}>Zaloguj się aby w pełni korzystać z możliwości!</h2>
      <form className={styles.form}  method="post" action="http://localhost:8080/login" >
        <TextField
          id="outlined-basic"
          label={
            loginValidation.emailField
              ? "Niepoprawna wartość(E-mail)"
              : "E-mail"
          }
          variant="outlined"
          name="username"
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
          type="password"
          name="password"
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
          type="password"
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
