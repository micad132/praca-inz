import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/cars">
        Polska
      </Link>
      <Link className={styles.navLink} to="/cars">
        Świat
      </Link>
      <Link className={styles.navLink} to="/cars">
        Samochody
      </Link>
      <Link className={styles.navLink} to="/cars">
        Części
      </Link>
      <Link className={styles.navLink} to="/cars">
        Dealerzy
      </Link>
      <Link className={styles.navLink} to="/cars">
        Reklamy
      </Link>
      <Link className={styles.navLink} to="/cars">
        Konfiguracje
      </Link>
    </nav>
  );
};

export default Nav;
