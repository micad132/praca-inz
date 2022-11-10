import Opinion from "./Opinion";
import styles from './Opinions.module.scss';
import Button from "@mui/material/Button";
import {useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";
import AddingOpinion from "./AddingOpinion";

export type DummyOpinion = {
    id: number,
    nick: string,
    rating: number,
    description: string
}

interface Props {
    dummyOpinions?: DummyOpinion[]
}

const Opinions = ({dummyOpinions}: Props) => {

    const opinionsList = dummyOpinions
        ? dummyOpinions
            .map(opinion => <Opinion nick={opinion.nick} rating={opinion.rating} description={opinion.description} />)
        : <h4>Brak</h4>

    return(
        <div className={styles.opinionsWrapper}>

            <h2>Sekcja komentarzy: (3)</h2>
            <AddingOpinion />
            {opinionsList}
        </div>
    )
}

export default Opinions;