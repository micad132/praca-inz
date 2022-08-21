import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";


const polandInfo = [

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
        <h1>Witaj na portalu motoryzacyjnym!</h1>
        <h2>Jesteś zalogowany jako user</h2>
        <InfoWrapper title='Informacje z Polski' details={polandInfo} />
      </>
  );
};

export default Home;
