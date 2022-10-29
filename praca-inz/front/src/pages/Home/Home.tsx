import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import styles from './Home.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {useEffect} from "react";
import {fetchImagesThunk, getAllImages} from "../../store/imageSlice";
import {fetchCarModelsThunk, getAllCarModels} from "../../store/carModelSlice";
import {fetchUserDetailsThunk, getLoggedUser} from "../../store/userSlice";
import {loggedUserStyle} from "../../utils/GlobalFunctions";


export interface PolandInfoType {
    title: string,
    src: string
}

const polandInfo: PolandInfoType[] = [

    {
        title: 'Paliwo drozeje',
        src: 'https://picsum.photos/400'
    },
    {
        title: 'Brak miejsc parkingowych',
        src: 'https://picsum.photos/400'
    },
    {
        title: 'Elektryki przejmują kontrole',
        src: 'https://picsum.photos/400'
    }

]


const Home = () => {
  const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserDetailsThunk())
    }, [dispatch]);
    const userDetails = useAppSelector(getLoggedUser);
    console.log('USER', userDetails);
    const loggedUser = userDetails ? `Jesteś zalogowany jako`  : '';





  return (
      <>
        <div className={styles.text_wrapper}>
            <h1>Witaj na portalu motoryzacyjnym!</h1>
            <h2>{loggedUser}<span style={loggedUserStyle(userDetails.role)}> {userDetails.role}</span></h2>
        </div>
        <InfoWrapper title='Informacje z Polski' details={polandInfo}  />
        <InfoWrapper title='Informacje ze Świata' details={polandInfo} />
        <InfoWrapper title='Najnowsze samochody' details={polandInfo} />
      </>
  );
};

export default Home;
