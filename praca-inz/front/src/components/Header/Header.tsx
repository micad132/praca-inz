import styles from "./Header.module.scss";
import Nav from "./Nav";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import {useState, useRef} from 'react';
import {useClickAway} from 'react-use';
import {useAppSelector} from "../../utils/types/hooks";
import {getLoggedUser, getLoggedUserNickname, getLoggedUserRole} from "../../store/userSlice";
import HelpModal from "./HelpModal";
import logo from "../../assets/logo.jpg";
import {loggedUserStyle} from "../../utils/GlobalFunctions";

const Header = () => {
    let navigate = useNavigate();
    const loggedUser = useAppSelector(getLoggedUser);
    const loggedUserNick = useAppSelector(getLoggedUserNickname);
    const loggedUserRole = useAppSelector(getLoggedUserRole);
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const [showHamburerMenu, setShowHamburgerMenu] = useState<boolean>(false);
    const [showAuthorInfo, setShowAuthorInfo] = useState<boolean>(false);
    const [isShowHelpModal, setIsShowHelpModal] = useState<boolean>(false);

    const mobileNavRef = useRef(null);

    const checkIfMobileNavShouldBeDisplayed = () => {
        if (window.innerWidth < 1450) {
            setShowHamburgerMenu(true);
            setShowAuthorInfo(false);

        } else {
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
                <Link to="/" style={{textDecoration: 'none'}}>
                    <img src={logo} alt={'logo'} />
                </Link>
                {showAuthorInfo && <h3>
                    Motoryzacyjny portal społecznościowy
                </h3>}

                {!showHamburerMenu && <nav className={styles.auth}>
                    {!loggedUser
                        ? <Button
                        className={styles.authButton}
                        variant="contained"
                        onClick={() => navigate("/login", {replace: true})}
                        >
                        Zaloguj się
                        </Button>
                        :
                        <Button
                            className={styles.authButton}
                            variant="contained"
                            onClick={() => window.location.replace("http://localhost:8080/logout")}
                        >
                            Wyloguj się
                        </Button>
                    }
                </nav>}
                {/*ikonka z profilem*/}
                {showHamburerMenu && <MenuIcon onClick={() => setShowMobileNav(!showMobileNav)}/>}
                <nav className={showMobileNav ? styles.authMobileShow : styles.authMobile} ref={mobileNavRef}>
                    <Button
                        className={styles.authButton}
                        variant="contained"
                        onClick={() => {
                            setShowMobileNav(false);
                            navigate("/login", {replace: true})
                        }}
                    >
                        Zaloguj się
                    </Button>
                    {/*<Button*/}
                    {/*    className={styles.authButton}*/}
                    {/*    variant="contained"*/}
                    {/*    onClick={() => {*/}
                    {/*        setShowMobileNav(false)*/}
                    {/*        navigate("/register", {replace: true})*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Zarejestruj się*/}
                    {/*</Button>*/}

                </nav>
                {loggedUser &&
                    <AccountCircleIcon
                    className={styles.icon}
                    onClick={() => navigate("/profile", {replace: true})}

                    />
                }
                <div>
                    {loggedUser
                        ? <div className={styles.loggedUserDetails}>
                            <p className={styles.userNick}>{loggedUserNick}</p>
                            <p style={loggedUserStyle(loggedUserRole)}>{loggedUserRole}</p>
                          </div>
                        : <div className={styles.guestText}>GOŚĆ</div>
                    }

                </div>
                <HelpIcon className={styles.icon} onClick={() => navigate("/help", { replace: true})}/>
            </div>
            <Nav/>
            <HelpModal isShowHelpModal={isShowHelpModal} setIsShowHelpModal={setIsShowHelpModal}/>
        </header>
    );
};

export default Header;
