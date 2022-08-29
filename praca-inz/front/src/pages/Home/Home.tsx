import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import styles from './Home.module.scss';

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
  return (
      <>
        <div className={styles.text_wrapper}>
            <h1>Witaj na portalu motoryzacyjnym!</h1>
            <h2>Jesteś zalogowany jako user</h2>
        </div>
        <InfoWrapper title='Informacje z Polski' details={polandInfo} />
        <InfoWrapper title='Informacje ze Świata' details={polandInfo} />
        <InfoWrapper title='Najnowsze samochody' details={polandInfo} />
      </>
  );
};

export default Home;
