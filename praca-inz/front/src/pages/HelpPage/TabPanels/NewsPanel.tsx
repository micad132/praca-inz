import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";

const NewsPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Wymagane są uprawnienia użytkownika</h2>
            <h3>Dodawanie postu</h3>
            <ul>
                <li>W celu dodania postu należy wejść na stronę ,,Posty"</li>
                <li>Następnym krokiem jest kliknięcie przycisku ,,dodaj" i uzupełnienie odpowiednich pól</li>
                <li>Ważnym elementem jest tu dodanie zdjęcia przed potwierdzeniem dodania całego postu</li>
                <li>Kliknięcie przycisku ,,dodaj" zatwierdza dodawanie postu do bazy</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default  NewsPanel;