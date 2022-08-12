import AuthWrapper from "../../../pages/Authorization/AuthWrapper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Register = () => {
  return (

      <AuthWrapper>
          <h2>Zarejestruj się aby w pełni korzystać z możliwości!</h2>
          <form>

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
                  variant="outlined"
                  onChange={(e) => {

                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Potwierdź haslo'
                  helperText="Przynajmniej 4 znaki"
                  variant="outlined"
                  onChange={(e) => {

                  }}
              />
              <TextField
                  id="outlined-basic"
                  label='Wprowadz nazwe uzytkownika'
                  variant="outlined"
                  onChange={(e) => {

                  }}

              />

              <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "50%", margin: "0 auto" }}
              >
                  Zarejestruj się
              </Button>
          </form>
      </AuthWrapper>


  )
};

export default Register;
