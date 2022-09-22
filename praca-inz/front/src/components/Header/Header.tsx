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
  const [showMobileNav,setShowMobileNav] = useState<boolean>(false);
  const [showHamburerMenu,setShowHamburgerMenu] = useState<boolean>(false);
  const [showAuthorInfo,setShowAuthorInfo] = useState<boolean>(false);
  const mobileNavRef = useRef(null);

  const checkIfMobileNavShouldBeDisplayed = () => {
    if(window.innerWidth < 1450){
      setShowHamburgerMenu(true);
      setShowAuthorInfo(false);

    }
    else{
      setShowHamburgerMenu(false);
      setShowAuthorInfo(true);
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
          <h1 className={styles.logo}>motoPortal</h1>
        </Link>
        { showAuthorInfo && <h3>
          Portal motoryzacyjny wykonany przez{" "}
          <span className={styles.author}>Michał Mosiołek</span>
        </h3>}

        {!showHamburerMenu && <nav className={styles.auth}>
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

        </nav>}
        {/*ikonka z profilem*/}
        {showHamburerMenu && <MenuIcon onClick={()=> setShowMobileNav(!showMobileNav)}/>}
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
        <AccountCircleIcon
            className={styles.icon}
            onClick={()=> navigate("/profile",{replace: true})}

        />

      </div>
      <Nav />
    </header>
  );
};

export default Header;
