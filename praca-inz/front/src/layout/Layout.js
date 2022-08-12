import Header from "../components/Header/Header";
import routes from "../routes";
import styles from './Layout.module.scss';

const Layout = ({children}) => {

    return(
        <div className={styles.wrapper}>
            <Header />
            {routes}
            <main>{children}</main>
        </div>
    )
}

export default Layout;