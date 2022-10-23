import UpdatingInfo from "./UpdatingInfo";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {getLoggedUser} from "../../../store/userSlice";

const AccountSettings = () => {

    const loggedUserDetails = useAppSelector(getLoggedUser);
    return (
        <div>
            <h2>Zaktualizuj swoje dane!</h2>
            <UpdatingInfo/>
        </div>
    )
}

export default AccountSettings;