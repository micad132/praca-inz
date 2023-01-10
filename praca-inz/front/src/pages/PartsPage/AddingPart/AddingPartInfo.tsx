import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../utils/types/hooks";
import {changeAddingPartToDatabaseVisibility} from "../../../store/partSlice";


interface Props {
    userRole: string,
}

const AddingPartInfo = ({userRole} : Props) => {

    const dispatch = useAppDispatch();

    const isButtonsHidden = userRole === 'MODERATOR';

    const addingPartInfoContent = isButtonsHidden
        ?  <>
            <h3>Kliknij przycisk ponizej aby dodac czesc do bazy</h3>
            <Button
                variant="contained"
                type="submit"
                onClick={() => dispatch(changeAddingPartToDatabaseVisibility(true))}
            >
                Dodaj
            </Button>
        </>
        :  <>
            <h3 style={{color: 'red'}}>Zaloguj się na konto moderatora aby dodać część do bazy!</h3>
        </>

    return(
        <>
            {addingPartInfoContent}
        </>

    )
}

export default AddingPartInfo;