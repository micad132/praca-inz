import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";

const CarsPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Wymagane są uprawnienia moderatora</h2>
            <h3>Dodawanie samochodu</h3>
            <ul>
                <li>W celu dodania samochodu należy udać się na stronę ,,Samochody"</li>
                <li>Następnie należy kliknąć przycisk ,,Dodaj"</li>
                <li>Kolejny krok to uzupełnienie danych według odpowiedniego kryterium wymienionego pod polami </li>
                <li>Ważnym krokiem jest dodanie zdjęcia samochodu poprzez kliknięcie przycisku ,,dodaj" z ikoną aparatu</li>
                <li>Ostatnim krokiem jest potwierdzenie dodawania poprzez kliknięcie przycisku ,,dodaj"</li>
            </ul>
            <h3>Edycja samochodu</h3>
            <ul>
                <li>W celu edycji samochodu należy udać się na stronę profilu użytkownika</li>
                <li>Następnie należy kliknąć przycisk ,,zarządzanie samochodami"</li>
                <li>Kolejny krokiem jest wybór samochodu i kliknięcie przycisku z ikoną ,,długopisa" oznaczającego edycję</li>
                <li>Należy w tym momencie uzupełnić dane według kryterium oraz dodać zdjęcie samochodu</li>
                <li>Edycję zatwierdza się poprzez kliknięcie przycisku ,,edytuj"</li>
            </ul>
            <h3>Usunięcie samochodu</h3>
            <ul>
                <li>W celu usunięcia samochodu należy udać się na stronę profilu użytkownika</li>
                <li>Następnie należy kliknąć przycisk ,,zarządzanie samochodami"</li>
                <li>Kolejny krokiem jest wybór samochodu i kliknięcie przycisku z ikoną ,,kosza" oznaczającego usunięcie</li>
                <li>Po kliknięciu samochód zostaje usunięty</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default  CarsPanel;
