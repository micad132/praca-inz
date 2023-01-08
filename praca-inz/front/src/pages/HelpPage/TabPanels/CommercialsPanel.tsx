import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";

const CommercialsPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Wymagane są uprawnienia admina</h2>
            <h3>Dodawanie reklam</h3>
            <ul>
                <li>Aby dodać reklamę nalezy kliknac na ikone profilu</li>
                <li>Nastepnie przycisk ,,zarzadzaj reklamami"</li>
                <li>Kolejny krok polega na kliknieciu przycisku ,,dodaj" i wybranie dla ktorego auta chcemy dodac reklame</li>
                <li>W ostatnik kroku wprowadzamy odpowiednie informacje i klikamy ,,dodaj"</li>
            </ul>
            <h3>Usuniecie reklamy</h3>
            <ul>
                <li>Aby usunąć reklamę nalezy kliknac na ikone profilu</li>
                <li>Nastepnie przycisk ,,zarzadzaj reklamami"</li>
                <li>Ostatni krok polega na najechaniu myszka na odpowiednia reklame ktora ma byc usuniete oraz
                nacisniecie przycisku z ikona kosza</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default  CommercialsPanel;
