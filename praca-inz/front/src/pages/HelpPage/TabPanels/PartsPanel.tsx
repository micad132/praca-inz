import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";

const PartsPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Aby wykonac wszystkie opisane nizej czynnosci trzeba byc zalogowanym na konto moderatora i wejsc na strone ,,czesci"</h2>
            <h3>Dodawanie czesci</h3>
            <ul>
                <li>Dodawanie czesci odbywa sie za pomoca klikniecia przycisku ,,dodaj" znajdujacego sie pod tabelka z czesciami</li>
                <li>Nastepnie moderator wprowadza odpowiednie dane i zatwierdza dodanie klikajac przycisk</li>
            </ul>
            <h3>Edycja czesci</h3>
            <ul>
                <li>
                    Edycja czesci odbywa sie za pomoca klikniecia przycisku ,,edytuj" dla odpowiedniej czesci w tabelce
                </li>
                <li>Kolejny krok to wprowadzenie nowych danych i zatwierdzenie edycji klikajac ,,edytuj"</li>
            </ul>
            <h3>Usuniecie czesci</h3>
            <ul>
                <li>Usuniecie czesci odbywa sie za pomoca klikniecia przycisku usun dla odpowiedniej czesci w tabelce</li>
                <li>Jesli dana część jest wykorzystywana w zamowieniu to pojawi sie odpowiednie ostrzezenie o koniecznosci usuniecia
                najpierw zamowienia na daną część</li>
                <li>Po usunieciu zamowienia usuwanie przebiega juz bezproblemowo</li>
                <li>Jesli dana czesc nie znajduje sie w zadnym zamowieniu to zostanie natychmiastowo usunieta</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default  PartsPanel;
