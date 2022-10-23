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
    id: number,
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
    const initialUserDetails = useAppSelector(getLoggedUser);
    const userDetails = useAppSelector(getLoggedUserDetailsDTO);
    const [update,setUpdate] = useState(false);
    console.log('ZALOGOWANY USER', userDetails);
    const {name, cityName, postalCode} = userDetails;
    const newName : any = useRef(null);
    const newCityName: any = useRef(null);
    const newPostalCode: any = useRef(null);
    // const [newUserDetails,setNewUserDetails] = useState<NewUserDetailsType>({
    //     name: name,
    //     cityName: cityName,
    //     postalCode: postalCode
    // });
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserDTODetailsThunk(initialUserDetails.id));
    }, [dispatch]);

    const submitForm = (e : any) => {

        e.preventDefault();

        console.log(newName.current.value);

        console.log('ID zalogowanego', initialUserDetails.id);
        const newUserModel = {
            id: userDetails.id,
            name: newName.current.value,
            cityName: newCityName.current.value,
            postalCode: newPostalCode.current.value
        }
        dispatch(updateUserDetailsThunk(newUserModel));
        dispatch(fetchUserDTODetailsThunk(initialUserDetails.id));

    }

    return (

            <>
                <div>Nazwa: {name}</div>
                <div>Miasto: {cityName}</div>
                <div>Kod pocztowy: {postalCode}</div>
            <form className={styles.updatingForm} method="put" onSubmit={(e) => submitForm(e)}>
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nową nazwe'}
                    variant="outlined"
                    placeholder={name}
                    // value={newName.current.value}
                    inputRef={newName}
                    // onChange={(e) => {
                    //     setNewUserDetails((prevState) => {
                    //         return {...prevState, name: e.target.value}
                    //     })
                    // }}


                />
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nową nazwę miasta'}
                    variant="outlined"
                    placeholder={cityName}
                    // value={newUserDetails.cityName}
                    inputRef={newCityName}
                    // onChange={(e) => {
                    //     setNewUserDetails((prevState) => {
                    //         return {...prevState, cityName: e.target.value}
                    //     })
                    // }}


                />
                <TextField
                    id="outlined-basic"
                    label={'Wprowadz nowy kod pocztowy'}
                    variant="outlined"
                    placeholder={postalCode}
                    // value={newUserDetails.postalCode}
                    inputRef={newPostalCode}
                    // onChange={(e) => {
                    //     setNewUserDetails((prevState) => {
                    //         return {...prevState, postalCode: e.target.value}
                    //     })
                    // }}


                />
                <Button
                    variant="contained"
                    type="submit"
                    // onClick={(e) => {
                    //     console.log(userDetails.id);
                    //     const newUserModel = {id: userDetails.id, ...newUserDetails}
                    //      console.log(newUserModel);
                    //     dispatch(updateUserDetailsThunk(newUserModel));
                    //     dispatch(fetchUserDTODetailsThunk());
                    //
                    // }}
                >
                    Zmień dane
                </Button>
            </form>
            </>



    )
}

export default UpdatingInfo;