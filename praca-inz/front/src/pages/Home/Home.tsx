import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import styles from './Home.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {useEffect} from "react";
import {fetchImagesThunk, getAllImages} from "../../store/imageSlice";
import {fetchCarModelsThunk, getAllCarModels} from "../../store/carModelSlice";
import {fetchUserDetailsThunk, getLoggedUser} from "../../store/userSlice";
import {loggedUserStyle} from "../../utils/GlobalFunctions";
import {fetchAlNewsThunk, getAllNews} from "../../store/newsSlice";
import HomeDetails from "./HomeDetails";


export interface NewsPreview {
    id: number,
    title: string,
    src: string
}


const Home = () => {
  const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserDetailsThunk())
        dispatch(fetchAlNewsThunk());
    }, [dispatch]);
    const userDetails = useAppSelector(getLoggedUser);
    const carModels = useAppSelector(getAllCarModels);
    const allNews = useAppSelector(getAllNews);


    const polandNewsToDisplay = [...allNews]
        .filter(news => news.postCategory === 'POLAND')
        .map( news => (
            {
                id: news.postId,
                title: news.title,
                src: news.imageModel.name
            }
        ))

    const europeNewsToDisplay = [...allNews]
        .filter(news => news.postCategory === 'EUROPE')
        .map( news => (
            {
                id: news.postId,
                title: news.title,
                src: news.imageModel.name
            }
        ))

    const worldNewsToDisplay = [...allNews]
        .filter(news => news.postCategory === 'WORLD')
        .map( news => (
            {
                id: news.postId,
                title: news.title,
                src: news.imageModel.name
            }
        ))

    const bestRatedCarModels = [...carModels]
        .sort((a,b) => b.rating - a.rating)
        .slice(0,3);

    const carsToDisplay = bestRatedCarModels.map(car =>
        (
            {
                id: car.carModelId,
                title: car.name,
                src: car.imageModel.name
            }
        ))

    const loggedUser = userDetails ? `Jesteś zalogowany jako`  : 'Zaloguj sie aby w pełni skorzystać z portalu';

  return (
      <>
        <div className={styles.text_wrapper}>
            <h1>Witaj na portalu motoryzacyjnym!</h1>
            <h2>{loggedUser}<span style={loggedUserStyle(userDetails.role)}>{userDetails.role}</span></h2>
        </div>
        <HomeDetails />
        <InfoWrapper title='Najnowsze informacje z Polski' details={polandNewsToDisplay} about={'news'} />
        <InfoWrapper title='Najnowsze informacje z Europy' details={europeNewsToDisplay} about={'news'}/>
        <InfoWrapper title='Najnowsze informacje ze Świata' details={worldNewsToDisplay} about={'news'}/>
        <InfoWrapper title='Najlepiej oceniane samochody' details={carsToDisplay} about={'cars'}/>
      </>
  );
};

export default Home;
