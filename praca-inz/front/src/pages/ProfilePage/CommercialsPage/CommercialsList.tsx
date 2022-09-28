import CommercialPreview from "./CommercialPreview";
import styles from './CommercialsPage.module.scss';
import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCommercials} from "../../../store/commercialSlice";
import {fetchingImagesURL} from "../../../utils/GlobalVariables";

const dummyCommercials = [
    {
        id: 1,
        title: 'opelek',
        imgSrc: 'https://picsum.photos/250/300'
    },
    {
        id: 2,
        title: 'skoda',
        imgSrc: 'https://picsum.photos/250/300',
    },
    {
        id: 3,
        title: 'bwm',
        imgSrc: 'https://picsum.photos/250/300'
    },
    {
        id: 4,
        title: 'bwm',
        imgSrc: 'https://picsum.photos/250/300'
    },
    {
        id: 5,
        title: 'bwm',
        imgSrc: 'https://picsum.photos/250/300'
    },
    {
        id: 6,
        title: 'bwm',
        imgSrc: 'https://picsum.photos/250/300'
    }
]


const CommercialsList = () => {

    const commercials = useAppSelector(getAllCommercials);
    return(
        <section className={styles.commercialsWrapper}>
            {commercials.map(commercial =>
                <CommercialPreview key={commercial.id} id={commercial.id} imgSrc={`${fetchingImagesURL}/${commercial.carModel.imageModels[0].name}`} title={commercial.name} />
            )}
        </section>
    )
}

export default CommercialsList;