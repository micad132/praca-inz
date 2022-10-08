import ProfilePageButtons from "./ProfilePageButtons";
import styles from "./ProfilePage.module.scss";
import routes from "../../routes";
import {Outlet} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "../../utils/types/hooks";
import {fetchUpdatedUser, getLoggedUser} from "../../store/userSlice";
import {useEffect} from "react";


const ProfilePage = () => {

    const userDetails = useAppSelector(getLoggedUser);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUpdatedUser());
    }, [dispatch]);

    console.log('PIERDOLENIE O', userDetails);
    return(
        <section className={styles.wrapper}>
            <h2>Znajdujesz sie na profilu uzytkownika</h2>
            <h3>Jesteś zalogowany jako {userDetails.name}</h3>
            <ProfilePageButtons />
            <Outlet />
        </section>
    )
}

export default ProfilePage;