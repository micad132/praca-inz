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

        const {name,email,password,confirmPassword,cityName,postalCode,role} = registerValues;
        console.log(isFinite(Number(cityName)));
        const postalCodeRegex = new RegExp(`\\d{2}-\\d{3}`);
        console.log('POSTAL', postalCodeRegex.test(postalCode));
        // if(postalCode.match(postalCodeRegex)){
        //     console.log('DZIALA');
        // }
        let a  = postalCode.match("[0-9]{2}-[0-9]{3}");
        if(a){
            console.log('DZ', a[0])
        }
        if(name.length < 5 || name.length > 30){
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                name: true
            }));
        }
        if(email){

            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                email: true
            }));
        }
        if(password.length < 5 || password.length > 30 ){

            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                password: true
            }));
        }
        if(confirmPassword.length < 5 || confirmPassword.length > 30 ){

            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                confirmPassword: true
            }));
        }
        if(cityName.length <5 || cityName.length > 30 || isFinite(Number(cityName))){
            setIsRegisterValidationIncorrect((prevState) => ({
                ...prevState,
                cityName: true
            }));
        }
        console.log(registerValues);
        // const data = await RegisterService.addUser(registerValues);
        // console.log(data.data);

    }

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
                  label='Potwierdz haslo'
                  helperText="Proszę potwierdz haslo"
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
