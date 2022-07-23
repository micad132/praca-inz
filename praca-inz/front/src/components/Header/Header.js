import styles from "./Header.module.scss";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <Link to="/">
          {" "}
          <h1>motoPortal</h1>
        </Link>
        <h3>
          Portal motoryzacyjny wykonany przez{" "}
          <span className={styles.author}>Michał Mosiołek</span>
        </h3>

        <nav className={styles.auth}>
          <Button
            variant="contained"
            onClick={() => navigate("/login", { replace: true })}
          >
            Zaloguj się
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/register", { replace: true })}
          >
            Zarejestruj się
          </Button>
        </nav>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
