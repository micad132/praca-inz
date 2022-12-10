
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {Dispatch, SetStateAction} from "react";
import styles from './HelpModal.module.scss';

interface Props {
    isShowHelpModal: boolean,
    setIsShowHelpModal: Dispatch<SetStateAction<boolean>>,
}

const HelpModal = ({isShowHelpModal, setIsShowHelpModal} : Props) => {

    return (
        <Modal
            open={isShowHelpModal}
            onClose={()=> setIsShowHelpModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <div className={styles.wrapper}>
                <h1>Modal</h1>
                <Button
                    variant={"contained"}
                    onClick={() => setIsShowHelpModal(false)}
                >
                    Zamknij
                </Button>
            </div>
        </Modal>
    )
}

export default HelpModal;