import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/cars">
        Cars
      </Link>
      <Link className={styles.navLink} to="/cars">
        Cars
      </Link>
      <Link className={styles.navLink} to="/cars">
        Cars
      </Link>
      <Link className={styles.navLink} to="/cars">
        Cars
      </Link>
      <Link className={styles.navLink} to="/cars">
        Cars
      </Link>
      <Link className={styles.navLink} to="/cars">
        Cars
      </Link>
      <Link className={styles.navLink} to="/cars">
        Cars
      </Link>
    </nav>
  );
};

export default Nav;
