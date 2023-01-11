import UpdatingInfo from "./UpdatingInfo";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {fetchUserDTODetailsThunk, getLoggedUser, getLoggedUserDetailsDTO} from "../../../store/userSlice";
import UserDetails from "./UserDetails";

const AccountSettings = () => {

    const initialUserDetails = useAppSelector(getLoggedUser);
    return (
        <div>
            <h2>Zaktualizuj swoje dane!</h2>
            <UserDetails id={initialUserDetails.id}/>
            <UpdatingInfo userId={initialUserDetails.id}/>
        </div>
    )
}

export default AccountSettings;