import AuthWrapper from "../../../pages/Authorization/AuthWrapper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import {useState} from "react";
import {MouseClickEventHandler} from "../../../utils/types";


const Register = () => {

  const [role,setRole] = useState('');
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
        console.log('halo');
        console.log(e.target.value);
        setRole(e.target.value);

    }

    return (

      <AuthWrapper>
          <h2>Zarejestruj się aby w pełni korzystać z możliwości!</h2>
          <form>

              <TextField
                  id="outlined-basic"
                  label='Wprowadz nazwe uzytkownika'
                  variant="outlined"
                  onChange={(e) => {
                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz email'
                  variant="outlined"
                  onChange={(e) => {

                  }}

              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz haslo'
                  helperText="Przynajmniej 4 znaki"
                  type="password"
                  variant="outlined"
                  onChange={(e) => {

                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Potwierdź haslo'
                  helperText="Przynajmniej 4 znaki"
                  type="password"
                  variant="outlined"
                  onChange={(e) => {

                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz nazwę miasta'
                  variant="outlined"
                  onChange={(e) => {

                  }}

              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz kod pocztowy'
                  variant="outlined"
                  onChange={(e) => {
                        console.log('siema');
                  }}

              />
              <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Rola</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={role}
                          onChange={(e) => handleChange(e)}
                      >
                          <MenuItem value={'Uzytkownik'}>Uzytkownik</MenuItem>
                          <MenuItem value={'Moderator'}>Moderator</MenuItem>
                      </Select>
                  </FormControl>
              </Box>

              <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "50%", margin: "0 auto" }}
                  onClick={ (e) => submitRegister(e)}
              >
                  Zarejestruj się
              </Button>
              <ToastContainer />
          </form>
      </AuthWrapper>


  )
};

export default Register;
