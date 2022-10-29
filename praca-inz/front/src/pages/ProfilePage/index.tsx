import ProfilePageButtons from "./ProfilePageButtons";
import styles from "./ProfilePage.module.scss";
import {Outlet} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../utils/types/hooks";
import {fetchUpdatedUser, getLoggedUser, getLoggedUserRole} from "../../store/userSlice";
import {useEffect} from "react";
import {loggedUserStyle} from "../../utils/GlobalFunctions";


const ProfilePage = () => {

    const userDetails = useAppSelector(getLoggedUser);
    const userRole = useAppSelector(getLoggedUserRole);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUpdatedUser());
    }, [dispatch]);


    return(
        <section className={styles.wrapper}>
            <h2>Znajdujesz sie na profilu uzytkownika</h2>
            <h3>Jesteś zalogowany jako {userDetails.name}</h3>
            <h3>Twoja rola to <span style={loggedUserStyle(userRole)}>{userRole}</span></h3>
            <ProfilePageButtons role={userRole} />
            <Outlet />
        </section>
    )
}

export default ProfilePage;