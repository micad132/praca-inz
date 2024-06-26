import AuthWrapper from "../../../pages/Authorization/AuthWrapper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import {useEffect, useState} from "react";
import {FormChangeEventHandler} from "../../../utils/types";
import RegisterService from "../../../services/RegisterService";
import styles from './Authorization.module.scss';
import {
    RegisterValidationValuesTypes,
    RegisterValuesTypes,
    USER_TYPE_ROLES
} from "../../../utils/types/AuthorizationTypes";
import {
    cityNameValidation,
    containsNumbers,
    emailValidation,
    nameValidation,
    passwordValidation,
    postalCodeValidation
} from "../../../services/ValidationServices/AuthorizationValidation";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {getAllUsers, getAllUsersFullData, getAllUsersThunk} from "../../../store/userSlice";
import {useError} from "react-use";


const initialValidationValues = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    cityName: false,
    postalCode: false,
}

const initialRegisterValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    cityName: '',
    postalCode: '',
    role: USER_TYPE_ROLES.USER,
}

const Register = () => {

  const [role,setRole] = useState<string>('');
  const [isRegisterValidationIncorrect,setIsRegisterValidationIncorrect] = useState<RegisterValidationValuesTypes>(initialValidationValues)
  const [registerValues,setRegisterValues] = useState<RegisterValuesTypes>(initialRegisterValues);
  let isRegisterInvalid = false;
  const allUsers = useAppSelector(getAllUsersFullData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(getAllUsersThunk());
  }, [dispatch])

    const handleChange = (e: SelectChangeEvent) => {
            setRegisterValues((prevState) => ({
                ...prevState,
                role: mapProperRole(e.target.value)
            }));
    }

    const checkIfEmailIsUsed = (email: string) : boolean => {
      let ifUsed = false;
        allUsers.forEach( user => {
            if(user.email === email) {
                ifUsed = true;
            }
        })
        return ifUsed;
    }


    const mapProperRole = (role : string) : USER_TYPE_ROLES =>{
      switch(role){
          case 'USER':
              return USER_TYPE_ROLES.USER
          case 'MODERATOR':
              return USER_TYPE_ROLES.MODERATOR
          case 'ADMIN':
              return USER_TYPE_ROLES.ADMIN
          default:
              return USER_TYPE_ROLES.UNKNOWN
      }

    }

    const validateForm = async (e: FormChangeEventHandler) => {
        e.preventDefault();
        setIsRegisterValidationIncorrect(initialValidationValues);
        const {name,email,password,confirmPassword,cityName,postalCode,role} = registerValues;
        if(!nameValidation(name)){
            isRegisterInvalid = true;
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                name: true
            }));
        }
        if(!emailValidation(email) || checkIfEmailIsUsed(email)){

            isRegisterInvalid = true;
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                email: true
            }));
        }
        if(!passwordValidation(password)){

            isRegisterInvalid = true;
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                password: true
            }));
        }
        if(!passwordValidation(confirmPassword) || password !== confirmPassword ){

            isRegisterInvalid = true;
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                confirmPassword: true
            }));
        }
        if(!cityNameValidation(cityName) || containsNumbers(cityName)){
            isRegisterInvalid = true;
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                cityName: true
            }));
        }
        if(!postalCodeValidation(postalCode)){
            isRegisterInvalid = true;
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                postalCode: true
            }));
        }

        if(!isRegisterInvalid){
            // const data = await RegisterService.addUser(registerValues);
            setRegisterValues(initialRegisterValues);
            // toast.success('Rejestracja udana! Za chwilę nastąpi przekierowanie do strony głównej', {
            //     position: "top-left",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
            // setTimeout(()=> navigate("/",{ replace: true}),2000);

        }


    }

    return (

      <AuthWrapper>
          <h2>Zarejestruj się aby w pełni korzystać z możliwości!</h2>
          <form className={styles.registerForm} onSubmit={(e) => validateForm(e) }>

              <TextField
                  id="outlined-basic"
                  label={isRegisterValidationIncorrect.name ? 'Wprowadz poprawna nazwe'
                      : 'Wprowadz nazwe'}
                  variant="outlined"
                  inputProps={{ "data-testid": "name" }}
                  value={registerValues.name}
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                      }));
                  }}
                  error={isRegisterValidationIncorrect.name}
              />
              <TextField
                  id="outlined-basic"
                  label={isRegisterValidationIncorrect.email ? 'Wprowadz poprawny email'
                      : 'Wprowadz email'}
                  variant="outlined"
                  inputProps={{ "data-testid": "email" }}
                  value={registerValues.email}
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                      }));
                  }}
                  error={isRegisterValidationIncorrect.email}

              />
              <TextField
                  id="outlined-basic"
                  label={isRegisterValidationIncorrect.password ? 'Wprowadz poprawne haslo'
                      : 'Wprowadz haslo'}
                  helperText="Przynajmniej 4 znaki"
                  inputProps={{ "data-testid": "password" }}
                  type="password"
                  variant="outlined"
                  value={registerValues.password}
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                      }));
                  }}
                  error={isRegisterValidationIncorrect.password}
              />
              <TextField
                  id="outlined-basic"
                  label={isRegisterValidationIncorrect.confirmPassword ? 'Wprowadz poprawne haslo'
                      : 'Wprowadz ponownie haslo'}
                  helperText="Proszę potwierdz haslo"
                  type="password"
                  inputProps={{ "data-testid": "confirm-password" }}
                  variant="outlined"
                  value={registerValues.confirmPassword}
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          confirmPassword: e.target.value,
                      }));
                  }}
                  error={isRegisterValidationIncorrect.confirmPassword}
              />
              <TextField
                  id="outlined-basic"
                  label={isRegisterValidationIncorrect.cityName ? 'Wprowadz poprawna nazwe miasta'
                      : 'Wprowadz nazwe miasta'}
                  variant="outlined"
                  inputProps={{ "data-testid": "cityname" }}
                  value={registerValues.cityName}
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          cityName: e.target.value,
                      }));
                  }}
                  error={isRegisterValidationIncorrect.cityName}

              />
              <TextField
                  id="outlined-basic"
                  label={isRegisterValidationIncorrect.postalCode ? 'Wprowadz poprawny kod pocztowy'
                      : 'Wprowadz kod pocztowy'}
                  variant="outlined"
                  value={registerValues.postalCode}
                  inputProps={{ "data-testid": "postalcode" }}
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          postalCode: e.target.value,
                      }));
                  }}
                  error={isRegisterValidationIncorrect.postalCode}

              />
              {/*<Box sx={{ minWidth: 120 }}>*/}
              {/*    <FormControl fullWidth>*/}
              {/*        <InputLabel id="demo-simple-select-label">Rola</InputLabel>*/}
              {/*        <Select*/}
              {/*            labelId="demo-simple-select-label"*/}
              {/*            id="demo-simple-select"*/}
              {/*            value={registerValues.role}*/}
              {/*            onChange={(e) => handleChange(e)}*/}
              {/*        >*/}
              {/*            <MenuItem value={USER_TYPE_ROLES.USER}>Uzytkownik</MenuItem>*/}
              {/*            <MenuItem value={USER_TYPE_ROLES.MODERATOR}>Moderator</MenuItem>*/}
              {/*            <MenuItem value={USER_TYPE_ROLES.ADMIN}>Admin</MenuItem>*/}
              {/*        </Select>*/}
              {/*    </FormControl>*/}
              {/*</Box>*/}

              <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "50%", margin: "0 auto" }}
                  data-testid={"button"}
              >
                  Zarejestruj się
              </Button>

          </form>
      </AuthWrapper>


  )
};

export default Register;
