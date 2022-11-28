import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.navLink} to="/news">
        Aktualnosci
      </Link>
      <Link className={styles.navLink} to="/cars">
        Samochody
      </Link>
      <Link className={styles.navLink} to="/parts">
        Części
      </Link>
      <Link className={styles.navLink} to="/configurations">
        Zamówienia
      </Link>
      <Link className={styles.navLink} to="/dealers">
        Dealerzy
      </Link>
    </nav>
  );
};

export default Nav;
