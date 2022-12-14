import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import SingleNews from "../../components/SingleNews";
import styles from './NewsPage.module.scss';
import AddingNews from "./AddingNews";
import {useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";

const dummyArr = [
    {
        id: 1,
        title: 'lorem ipsum1',
        src: 'https://picsum.photos/400'
    },
    {
        id: 1,
        title: 'lorem ipsum1',
        src: 'https://picsum.photos/400'
    },
    {
        id: 1,
        title: 'lorem ipsum1',
        src: 'https://picsum.photos/400'
    },
    {
        id: 1,
        title: 'lorem ipsum1',
        src: 'https://picsum.photos/400'
    },

]

const PolandInfo = () => {

    const userRole = useAppSelector(getLoggedUserRole);
    return (
        <>
            <h1 className={styles.title}>Motoryzacyjne aktualności</h1>
            {userRole === 'USER'
                ? <AddingNews />
                : <h2>Musisz miec role USER aby dodac post</h2>
            }
            <InfoWrapper title={'Najnowsze informacje z Polski'} details={dummyArr}/>
            <SingleNews />
            <SingleNews />
            <InfoWrapper title={'Najnowsze informacje ze świata'} details={dummyArr}/>
        </>
    )
}

export default PolandInfo;