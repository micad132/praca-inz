import FormWrapper from "../../../components/FormWrapper/FormWrapper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useAppSelector} from "../../../utils/types/hooks";
import {getLoggedUserDetailsDTO} from "../../../store/userSlice";

const UpdatingInfo = () => {
    const userDetails = useAppSelector(getLoggedUserDetailsDTO);
    console.log('DETAILS', userDetails);
    return (


            <FormWrapper>
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nazwe'}
                    variant="outlined"
                    placeholder='siemanko'


                />
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nazwę miasta'}
                    variant="outlined"
                    value={''}


                />
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz kod pocztowy'}
                    variant="outlined"
                    value={''}


                />
                <Button
                    variant="contained"
                    type="submit"

                >
                    Zmień dane
                </Button>
            </FormWrapper>



    )
}

export default UpdatingInfo;