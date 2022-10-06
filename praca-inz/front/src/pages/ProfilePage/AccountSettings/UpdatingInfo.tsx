import FormWrapper from "../../../components/FormWrapper/FormWrapper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useAppSelector, useAppDispatch} from "../../../utils/types/hooks";
import {fetchUserDTODetailsThunk, getLoggedUserDetailsDTO, updateUserDetailsThunk} from "../../../store/userSlice";
import {useEffect, useState} from "react";

export interface NewUserDetailsType {
    name: string,
    cityName: string,
    postalCode: string
}

const initialNewUserDetails = {

    name: '',
    cityName: '',
    postalCode: ''
}

const UpdatingInfo = () => {
    const userDetails = useAppSelector(getLoggedUserDetailsDTO);
    const {userId, name, cityName, postalCode} = userDetails;
    let newUserDTO = {
        id: userId
    };
    const [newUserDetails,setNewUserDetails] = useState<NewUserDetailsType>({
        name: name,
        cityName: cityName,
        postalCode: postalCode
    });
    const dispatch = useAppDispatch();

    console.log('DETAILS', userDetails);
    useEffect(() => {
        dispatch(fetchUserDTODetailsThunk());
    }, [dispatch]);


    return (


            <FormWrapper>
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nową nazwe'}
                    variant="outlined"
                    placeholder={name}
                    value={newUserDetails.name}
                    onChange={(e) => {
                        setNewUserDetails((prevState) => {
                            return {...prevState, name: e.target.value}
                        })
                    }}


                />
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nową nazwę miasta'}
                    variant="outlined"
                    placeholder={cityName}
                    value={newUserDetails.cityName}
                    onChange={(e) => {
                        setNewUserDetails((prevState) => {
                            return {...prevState, cityName: e.target.value}
                        })
                    }}


                />
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nowy kod pocztowy'}
                    variant="outlined"
                    placeholder={postalCode}
                    value={newUserDetails.postalCode}
                    onChange={(e) => {
                        setNewUserDetails((prevState) => {
                            return {...prevState, postalCode: e.target.value}
                        })
                    }}


                />
                <Button
                    variant="contained"
                    type="submit"
                    onClick={(e) => {
                        console.log(userDetails.id);
                        const newUserModel = {id: userDetails.id, ...newUserDetails}
                         console.log(newUserModel);
                        dispatch(updateUserDetailsThunk(newUserModel));
                        dispatch(fetchUserDTODetailsThunk());

                    }}

                >
                    Zmień dane
                </Button>
            </FormWrapper>



    )
}

export default UpdatingInfo;