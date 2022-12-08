import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import PartActionModal from "../PartActionModal";
import {useState} from "react";

interface Props {
    id: number,
    partName: string,
    partPrice: number
}

const EditingPartButton = ({id, partName, partPrice} : Props) => {

    const [isShowModal,setIsShowModal] = useState<boolean>(false);
    const partDetails = {id,partName,partPrice};
    return (
        <>
            <strong>
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => setIsShowModal(true)}
                >
                    Edytuj
                </Button>
            </strong>
            <PartActionModal isShow={isShowModal} setIsShowModal={setIsShowModal} partDetails={partDetails} isAddingAction={false} />
        </>
    )
}

export default  EditingPartButton;