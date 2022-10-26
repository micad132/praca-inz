import ButtonWrapper from "../components/ButtonWrapper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CommercialsList from "./CommercialsList";
import AddingCommercialModal from "./AddingCommercialModal";
import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCommercials} from "../../../store/commercialSlice";
const CommercialsPage = () => {

    let navigate = useNavigate();
    const commercials = useAppSelector(getAllCommercials);
    return(
        <div>
            <h3>{commercials.length>0 ? 'Pogląd wszystkich dostępnych reklam': 'Brak reklam'}</h3>
            <ButtonWrapper>
                <AddingCommercialModal />
            </ButtonWrapper>
            <CommercialsList commercials={commercials} />

        </div>

    )
}

export default CommercialsPage;