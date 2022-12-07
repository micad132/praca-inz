import Button from "@mui/material/Button";
import styles from "./ProfilePage.module.scss";
import { useNavigate } from "react-router-dom";
import ButtonWrapper from "./components/ButtonWrapper";

interface Props {
    role: string
}

const ProfilePageButtons = ({role} : Props) => {

    let navigate = useNavigate();
    const isAdmin = role === 'ADMIN';
    const isModerator = role === 'MODERATOR';

    return(
        <ButtonWrapper>
            <Button
                variant="contained"
                onClick={()=> navigate("/profile/settings",{replace: true})}
            >Zmien szczegoly konta</Button>
            {isAdmin &&
             <>
                <Button
                    variant="contained"
                    onClick={()=> navigate("/profile/commercials",{replace: true})}
                >Zarzadzaj reklamami</Button>
                <Button
                    variant="contained"
                    onClick={()=> navigate("/profile/carmodels",{replace: true})}
                >Zarzadzaj modelami aut</Button>


             </>}
            {isModerator &&
                <ButtonWrapper>
                    <Button
                        variant="contained"
                        onClick={()=> navigate("/profile/reviews",{replace: true})}
                    >Zarzadzaj komentarzami</Button>
                    <Button
                    variant="contained"
                    onClick={()=> navigate("/profile/users",{replace: true})}
                    >Zarzadzaj uzytkownikami</Button>
                </ButtonWrapper>
            }

        </ButtonWrapper>
    )
}

export default ProfilePageButtons;