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
import {useState} from "react";
import {FormChangeEventHandler, MouseClickEventHandler} from "../../../utils/types";
import RegisterService from "../../../services/RegisterService";
import {
    RegisterValidationValuesTypes,
    RegisterValuesTypes,
    USER_TYPE_ROLES
} from "../../../utils/types/AuthorizationTypes";
import {
    cityNameValidation, containsNumbers,
    emailValidation,
    nameValidation,
    passwordValidation, postalCodeValidation
} from "../../../services/ValidationService";




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
  const submitRegister = (e: MouseClickEventHandler) => {
      e.preventDefault();
      toast.success('Rejestracja udana!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
      });

  }

    const handleChange = (e: SelectChangeEvent) => {
            setRegisterValues((prevState) => ({
                ...prevState,
                role: mapProperRole(e.target.value)
            }));
    }

    // const isNumeric = (cityName: string) : boolean => {
    //     // Checks if the provided string
    //     // is a numeric by applying a regular
    //     // expression on it.
    //     const regex = "[0-9]+[\\.]?[0-9]*";
    //     return
    // }

    const mapProperRole = (role : string) : USER_TYPE_ROLES =>{
      switch(role){
          case 'USER':
              return USER_TYPE_ROLES.USER
          case 'MODERATOR':
              return USER_TYPE_ROLES.MODERATOR
          default:
              return USER_TYPE_ROLES.UNKNOWN
      }

    }

    const validateForm = async (e: FormChangeEventHandler) => {
        e.preventDefault();
        setIsRegisterValidationIncorrect(initialValidationValues);
        const {name,email,password,confirmPassword,cityName,postalCode,role} = registerValues;
        console.log(isFinite(Number(cityName)));
        console.log(containsNumbers(cityName));
        console.log(cityNameValidation(cityName));
        if(!nameValidation(name)){
            isRegisterInvalid = true;
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                name: true
            }));
        }
        if(!emailValidation(email)){

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

        console.log(registerValues);
        if(!isRegisterInvalid){
            const data = await RegisterService.addUser(registerValues);
            setRegisterValues(initialRegisterValues);
            toast.success('Rejestracja udana!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


    }

    return (

      <AuthWrapper>
          <h2>Zarejestruj się aby w pełni korzystać z możliwości!</h2>
          <form onSubmit={(e) => validateForm(e) }>

              <TextField
                  id="outlined-basic"
                  label={isRegisterValidationIncorrect.name ? 'Wprowadz poprawna nazwe'
                      : 'Wprowadz nazwe'}
                  variant="outlined"
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
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          postalCode: e.target.value,
                      }));
                  }}
                  error={isRegisterValidationIncorrect.postalCode}

              />
              <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Rola</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={registerValues.role}
                          onChange={(e) => handleChange(e)}
                      >
                          <MenuItem value={USER_TYPE_ROLES.USER}>Uzytkownik</MenuItem>
                          <MenuItem value={USER_TYPE_ROLES.MODERATOR}>Moderator</MenuItem>
                          <MenuItem value={USER_TYPE_ROLES.ADMIN}>Admin</MenuItem>
                      </Select>
                  </FormControl>
              </Box>

              <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "50%", margin: "0 auto" }}

              >
                  Zarejestruj się
              </Button>
              <ToastContainer />
          </form>
      </AuthWrapper>


  )
};

export default Register;
