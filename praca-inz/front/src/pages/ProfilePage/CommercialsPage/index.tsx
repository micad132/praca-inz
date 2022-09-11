import ButtonWrapper from "../components/ButtonWrapper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CommercialsList from "./CommercialsList";
import AddingCommercialModal from "./AddingCommercialModal";
const CommercialsPage = () => {

    let navigate = useNavigate();
    return(
        <div>
            <h3>Zarzadzanie reklamami</h3>
            <ButtonWrapper>
                <AddingCommercialModal />
            </ButtonWrapper>
            <CommercialsList />

        </div>

    )
}

export default CommercialsPage;