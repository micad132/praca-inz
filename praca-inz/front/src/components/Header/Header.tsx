import styles from "./Header.module.scss";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import {useState,useRef} from 'react';
import {useClickAway} from 'react-use';

const Header = () => {
  let navigate = useNavigate();
  const [showMobileNav,setShowMobileNav] = useState(false);
  const [showHamburerMenu,setShowHamburgerMenu] = useState(false);
  const mobileNavRef = useRef(null);

  const checkIfMobileNavShouldBeDisplayed = () => {
    if(window.innerWidth < 800 || window.innerHeight < 800){
      setShowHamburgerMenu(true);
    }
    else{
      setShowHamburgerMenu(false);
    }
  }

  window.addEventListener('resize', checkIfMobileNavShouldBeDisplayed);
  useClickAway(mobileNavRef, () => {
    setShowMobileNav(false);
  });



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
            className={styles.authButton}
            variant="contained"
            onClick={() => navigate("/login", { replace: true })}
          >
            Zaloguj się
          </Button>
          <Button
            className={styles.authButton}
            variant="contained"
            onClick={() => navigate("/register", { replace: true })}
          >
            Zarejestruj się
          </Button>

        </nav>
        {/*ikonka z profilem*/}
        <MenuIcon onClick={()=> setShowMobileNav(!showMobileNav)}/>
        <nav className={showMobileNav ? styles.authMobileShow : styles.authMobile} ref={mobileNavRef}>
          <Button
              className={styles.authButton}
              variant="contained"
              onClick={() => {
                setShowMobileNav(false);
                navigate("/login", { replace: true })
              }}
          >
            Zaloguj się
          </Button>
          <Button
              className={styles.authButton}
              variant="contained"
              onClick={() => {
                setShowMobileNav(false)
                navigate("/register", { replace: true })
              }}
          >
            Zarejestruj się
          </Button>

        </nav>
        <AccountCircleIcon className={styles.icon}/>

      </div>
      <Nav />
    </header>
  );
};

export default Header;
