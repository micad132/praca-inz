import Button from "@mui/material/Button";
import {changeModalVisibility, setPartDetails} from "../../../../store/partSlice";
import {useAppDispatch} from "../../../../utils/types/hooks";
import {addOrderThunk, setPartId} from "../../../../store/orderSlice";
import AddIcon from '@mui/icons-material/Add';
import PartActionModal from "../PartActionModal";
import { useState } from "react";

interface Props {
    id: number,
    partName: string,
    partPrice: number
}

const AddingPartButton = ({id, partName, partPrice} : Props) => {

    const [isShowModal,setIsShowModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const partDetails = {id,partName,partPrice};


    // const eventAction = () => {
    //     console.log('KLIKLO', partName);
    //     dispatch(changeModalVisibility(true));
    //     dispatch(setPartId(id));
    //     const partDetails = { partName, partPrice };
    //     dispatch(setPartDetails(partDetails));
    // }

    return (
        <>
            <strong>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={() => setIsShowModal(true)}
                >
                    Dodaj
                </Button>
            </strong>
            <PartActionModal isShow={isShowModal} setIsShowModal={setIsShowModal} partDetails={partDetails} isAddingAction={true} />
        </>
    )
}

export default AddingPartButton;