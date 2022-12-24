import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";

const CommercialsPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Dodawanie reklam</h2>
            <ul>
                <li>Aby dodac reklame uzytkownik musi byc zalogowany na konto admina</li>
                <li>Nalezy kliknac na ikone profilu</li>
                <li>Nastepnie przycisk ,,zarzadzaj reklamami"</li>
                <li>Kolejny krok polega na kliknieciu przycisku ,,dodaj" i wybranie dla ktorego auta chcemy dodac reklame</li>
                <li>W ostatnik kroku wprowadzamy odpowiednie informacje i klikamy ,,dodaj"</li>
            </ul>
            <h2>Usuniecie reklamy</h2>
            <ul>
                <li>Aby usunac reklame uzytkownik musi byc zalogowany na konto admina</li>
                <li>Nalezy kliknac na ikone profilu</li>
                <li>Nastepnie przycisk ,,zarzadzaj reklamami"</li>
                <li>Ostatni krok polega na najechaniu myszka na odpowiednia reklame ktora ma byc usuniete oraz
                nacisniecie przycisku z ikona kosza</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default  CommercialsPanel;
