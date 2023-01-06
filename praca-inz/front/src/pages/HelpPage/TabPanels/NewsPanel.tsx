import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";


const NewsPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Wymagane są uprawnienia użytkownika</h2>
            <h3>Dodawanie postu</h3>
            <ul>
                <li>Aby dodać post należy udać się na stronę postów</li>
                <li>Następnie należy kliknąć przycisk ,,dodaj" i wprowadzić odpowiednie dane</li>
                <li>Ważnym elementem jest dodanie zdjęcia przed zatwierdzeniem dodawania postu</li>
                <li>Dodawanie postu potwierdza się poprzez naciśniecią przycisku ,,dodaj"</li>
            </ul>
            <h2>Wymagane są uprawnienia moderatora</h2>
            <h3>Edytowanie postu</h3>
            <ul>
                <li>Aby edytować post należy kliknąć ikonę profilu</li>
                <li>Następnie przycisk ,,zarządzanie postami"</li>
                <li>W celu edycji wybranego postu należy najechać na niego myszką i kliknąć ikonę z długopisem</li>
                <li>Ostatnim krokiem jest wprowadzenie nowych danych i kliknięcie przycisku edytuj</li>
            </ul>
            <h3>Usunięcie postu</h3>
            <ul>
                <li>Aby usunąć post należy kliknąc ikonę profilu</li>
                <li>Następnie przycisk ,,zarządzanie postami"</li>
                <li>W celu usunięcia wybranego postu należy najechać na niego myszką i kliknąć ikonę z koszem</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default NewsPanel;
