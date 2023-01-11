import {UserDTOType} from "../../../services/RegisterService";
import {useEffect} from "react";
import {fetchUserDTODetailsThunk, getLoggedUserDetailsDTO} from "../../../store/userSlice";
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";

interface Props {
    id: number,
}

const UserDetails = ({id} : Props) => {

     const dispatch = useAppDispatch();
     useEffect(() => {
        dispatch(fetchUserDTODetailsThunk(id));
     }, [dispatch]);

    const loggedUserDetails = useAppSelector(getLoggedUserDetailsDTO);
    return(
        <div>
            <h3>Aktualne dane:</h3>
            <div>Nazwa: {loggedUserDetails.name}</div>
            <div>Miasto: {loggedUserDetails.cityName}</div>
            <div>Kod pocztowy: {loggedUserDetails.postalCode}</div>
        </div>
    )
}

export default UserDetails;