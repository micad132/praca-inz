import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useAppSelector, useAppDispatch} from "../../../utils/types/hooks";
import {
    fetchUserDTODetailsThunk,
    getLoggedUser,
    getLoggedUserDetailsDTO,
    updateUserDetailsThunk
} from "../../../store/userSlice";
import {useEffect, useState, useRef} from "react";
import styles from '../ProfilePage.module.scss';

export interface NewUserDetailsType {
    name: string,
    cityName: string,
    postalCode: string
}

export interface UserUpdateDetailsType {
    id: number,
    name: string,
    cityName: string,
    postalCode: string
}

interface Props {
    userId: number,
}

const initialNewUserDetails = {

    name: '',
    cityName: '',
    postalCode: ''
}

const UpdatingInfo = ({userId} : Props) => {
    // const initialUserDetails = useAppSelector(getLoggedUser);
    // const userDetails = useAppSelector(getLoggedUserDetailsDTO);
    // const [update,setUpdate] = useState(false);
    // console.log('ZALOGOWANY USER', userDetails);
    // const {name, cityName, postalCode} = userDetails;
    // const newName : any = useRef(null);
    // const newCityName: any = useRef(null);
    // const newPostalCode: any = useRef(null);
    const [newUserDetails,setNewUserDetails] = useState<NewUserDetailsType>(initialNewUserDetails);
    // const [newUserDetails,setNewUserDetails] = useState<NewUserDetailsType>({
    //     name: name,
    //     cityName: cityName,
    //     postalCode: postalCode
    // });
    const dispatch = useAppDispatch();
    // useEffect(() => {
    //     dispatch(fetchUserDTODetailsThunk(initialUserDetails.id));
    // }, [dispatch]);

    const submitForm = (e : any) => {

        e.preventDefault();

        const newUserModel = {
            id: userId,
            name: newUserDetails.name,
            cityName: newUserDetails.cityName,
            postalCode: newUserDetails.postalCode,
        }
        dispatch(updateUserDetailsThunk(newUserModel));
        dispatch(fetchUserDTODetailsThunk(userId));
        setNewUserDetails(initialNewUserDetails);
        // dispatch(fetchUserDTODetailsThunk(initialUserDetails.id));

    }

    return (


            <form className={styles.updatingForm} method="put" onSubmit={(e) => submitForm(e)}>
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nową nazwe'}
                    variant="outlined"
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
                >
                    Zmień dane
                </Button>
            </form>




    )
}

export default UpdatingInfo;