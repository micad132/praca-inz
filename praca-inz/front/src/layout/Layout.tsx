import Header from "../components/Header/Header";
import routes from "../routes";
import styles from './Layout.module.scss';
import Footer from "../components/Footer/Footer";

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Layout = ({children}: Props) => {

    return(
        <div className={styles.wrapper}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;