import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import SingleNews from "../../components/SingleNews";
import styles from './NewsPage.module.scss';
import AddingNews from "./AddingNews";
import {useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";

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

    const userRole = useAppSelector(getLoggedUserRole);
    return (
        <>
            <h1 className={styles.title}>Motoryzacyjne aktualności</h1>
            {userRole === 'ADMIN'
                ? <AddingNews />
                : <h2>Musisz miec uprawnienia admina aby dodac post</h2>
            }
            <InfoWrapper title={'Najnowsze informacje z Polski'} details={dummyArr}/>
            <SingleNews />
            <SingleNews />
            <InfoWrapper title={'Najnowsze informacje ze świata'} details={dummyArr}/>
        </>
    )
}

export default PolandInfo;