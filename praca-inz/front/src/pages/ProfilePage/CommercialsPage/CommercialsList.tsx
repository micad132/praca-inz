import CommercialPreview from "./CommercialPreview";
import styles from './CommercialsPage.module.scss';

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

    return(
        <section className={styles.commercialsWrapper}>
            {dummyCommercials.map(commercial =>
                <CommercialPreview key={commercial.id} imgSrc={commercial.imgSrc} title={commercial.title} />
            )}
        </section>
    )
}

export default CommercialsList;