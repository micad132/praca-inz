import CommercialPreview from "./CommercialPreview";
// import styles from './CommercialsPage.module.scss';
import styles from './../../../utils/styles/Utils.module.scss';
import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCommercials} from "../../../store/commercialSlice";
import {fetchingImagesURL} from "../../../utils/GlobalVariables";
import {CommercialType} from "../../../services/CommercialService";

const dummyCommercials  = [
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

interface Props  {
    commercials: CommercialType[]
}

const CommercialsList = ({commercials} : Props) => {

    return(

            <section className={styles.previewWrapper}>
                {commercials.map(commercial =>
                    <CommercialPreview key={commercial.commercialId} commercialId={commercial.commercialId} imgSrc={`${fetchingImagesURL}/${commercial.imageName}`} title={commercial.name} />
                )}
            </section>
    )
}

export default CommercialsList;