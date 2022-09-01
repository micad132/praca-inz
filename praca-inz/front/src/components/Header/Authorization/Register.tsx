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
import {USER_TYPE_ROLES} from "../../../utils/types/AuthorizationTypes";


const initialValidationValues = {
    name: false,
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

  const [role,setRole] = useState('');
  const [isRegisterValidationIncorrect,setIsRegisterValidationIncorrect] = useState(initialValidationValues)

  const [registerValues,setRegisterValues] = useState(initialRegisterValues)
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

    const validateForm = ( e: FormChangeEventHandler) =>{
        e.preventDefault();
        console.log(registerValues);
        RegisterService.addUser(registerValues);

    }

    console.log(USER_TYPE_ROLES.USER);
    return (

      <AuthWrapper>
          <h2>Zarejestruj się aby w pełni korzystać z możliwości!</h2>
          <form onSubmit={(e) => validateForm(e) }>

              <TextField
                  id="outlined-basic"
                  label='Wprowadz nazwe uzytkownika'
                  variant="outlined"
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          name: e.target.value,
                      }));
                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz email'
                  variant="outlined"
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                      }));
                  }}

              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz haslo'
                  helperText="Przynajmniej 4 znaki"
                  type="password"
                  variant="outlined"
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          password: e.target.value,
                      }));
                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Potwierdź haslo'
                  helperText="Przynajmniej 4 znaki"
                  type="password"
                  variant="outlined"
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          confirmPassword: e.target.value,
                      }));
                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz nazwę miasta'
                  variant="outlined"
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          cityName: e.target.value,
                      }));
                  }}

              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz kod pocztowy'
                  variant="outlined"
                  onChange={(e) => {
                      setRegisterValues((prevState) => ({
                          ...prevState,
                          postalCode: e.target.value,
                      }));
                  }}

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
