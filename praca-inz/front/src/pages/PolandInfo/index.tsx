import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import SingleNews from "../../components/SingleNews";
import styles from './PolandInfo.module.scss';

const dummyArr = [
    {
        title: 'lorem ipsum1',
        src: 'https://picsum.photos/400'
    },
    {
        title: 'lorem ipsum2',
        src: 'https://picsum.photos/400'
    },
    {
        title: 'lorem ipsum3',
        src: 'https://picsum.photos/400'
    },
    {
        title: 'lorem ipsum4',
        src: 'https://picsum.photos/400'
    },

]

const PolandInfo = () => {

    return (
        <>
            <h1 className={styles.title}>Informacje z Polski</h1>
            <InfoWrapper title={'Najnowsze informacje'} details={dummyArr}/>
            <SingleNews />
            <SingleNews />
            <InfoWrapper title={'Najnowsze informacje'} details={dummyArr}/>
        </>
    )
}

export default PolandInfo;