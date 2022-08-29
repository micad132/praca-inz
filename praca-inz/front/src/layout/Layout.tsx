import Header from "../components/Header/Header";
import routes from "../routes";
import styles from './Layout.module.scss';

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Layout = ({children}: Props) => {

    return(
        <div className={styles.wrapper}>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout;