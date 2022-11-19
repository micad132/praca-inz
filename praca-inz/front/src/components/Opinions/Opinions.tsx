import Opinion from "./Opinion";
import styles from './Opinions.module.scss';
import Button from "@mui/material/Button";
import {useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";
import AddingOpinion from "./AddingOpinion";
import {ReviewType} from "../../services/ReviewService";



interface Props {
    opinions?: ReviewType[],
    carModelId?: string
}

const Opinions = ({opinions, carModelId}: Props) => {

    console.log(opinions);
    const opinionsList = opinions
        ? opinions
            .map(opinion =>
                <Opinion key={opinion.reviewModelId} id={opinion.reviewModelId} nick={opinion.userNick} isVulgar={opinion.isVulgar}
                         rating={opinion.rate} description={opinion.description} date={opinion.date} isAdminPanel={false} isProperScreen={true} />)
        : <h4>Brak</h4>

    return(
        <div className={styles.opinionsWrapper}>

            <h2>Sekcja komentarzy: ({opinions?.length})</h2>
            <AddingOpinion carModelId={carModelId} />
            {opinionsList}
        </div>
    )
}

export default Opinions;