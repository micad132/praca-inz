import TabPanelWrapper from "../../../../components/Wrappers/TabPanelWrapper";

const ModeratorPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Operacje dostępne dla roli moderatora</h2>
            <ul>
                <li>Dodawanie modeli aut</li>
                <li>Usuwanie modeli aut</li>
                <li>Edycja modeli aut</li>
                <li>Usuwanie postów</li>
                <li>Edycja postów</li>
                <li>Zmiana ról użytkowników</li>
                <li>Edycja części</li>
                <li>Usuwanie części</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default ModeratorPanel;
