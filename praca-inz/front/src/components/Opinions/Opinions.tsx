import Opinion from "./Opinion";
import styles from './Opinions.module.scss';

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

            <h3>Opinie</h3>
            {opinionsList}
        </div>
    )
}

export default Opinions;