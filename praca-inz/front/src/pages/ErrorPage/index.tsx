import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
    let navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <h1>Logowanie nieudane:</h1>
            <Button
                variant="contained"
                onClick={() => navigate("/", { replace: true })}
            >
                Wróc do strony głównej
            </Button>
            <Button
                variant="contained"
                onClick={() => navigate("/login", { replace: true })}
            >
                Wróc do logowania
            </Button>

        </div>
    )
}

export default ErrorPage;