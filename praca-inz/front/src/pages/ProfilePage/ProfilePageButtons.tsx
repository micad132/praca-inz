import Button from "@mui/material/Button";
import styles from "./ProfilePage.module.scss";
import { useNavigate } from "react-router-dom";
import ButtonWrapper from "./components/ButtonWrapper";


const ProfilePageButtons = () => {

    let navigate = useNavigate();
    return(
        <ButtonWrapper>
            <Button
                variant="contained"
                onClick={()=> navigate("/profile/settings",{replace: true})}
            >Zmien szczegoly konta</Button>
            <Button
                variant="contained"
                onClick={()=> navigate("/profile/commercials",{replace: true})}
            >Zarzadzaj reklamami</Button>
        </ButtonWrapper>
    )
}

export default ProfilePageButtons;