import AddingPartModal from "./AddingPartModal";
import AddingPartInfo from "./AddingPartInfo";


interface Props {
    partsLength: number;
}

const AddingPart = ({partsLength} : Props) => {

    return(
        <>
            <AddingPartInfo partsLength={partsLength} />
            <AddingPartModal />
        </>
    )
}

export  default  AddingPart;