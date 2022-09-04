import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/poland">
        Polska
      </Link>
      <Link className={styles.navLink} to="/world">
        Świat
      </Link>
      <Link className={styles.navLink} to="/cars">
        Samochody
      </Link>
      <Link className={styles.navLink} to="/parts">
        Części
      </Link>
      <Link className={styles.navLink} to="/dealers">
        Dealerzy
      </Link>
      <Link className={styles.navLink} to="/commercials">
        Reklamy
      </Link>
      <Link className={styles.navLink} to="/configurations">
        Konfiguracje
      </Link>
    </nav>
  );
};

export default Nav;
