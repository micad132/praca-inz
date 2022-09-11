import ProfilePageButtons from "./ProfilePageButtons";
import styles from "./ProfilePage.module.scss";
import routes from "../../routes";
import {Outlet} from "react-router-dom";


const ProfilePage = () => {

    return(
        <section className={styles.wrapper}>
            <h2>Znajdujesz sie na profilu uzytkownika</h2>
            <h3>Jesteś zalogowany jako michal</h3>
            <ProfilePageButtons />
            <Outlet />
        </section>
    )
}

export default ProfilePage;