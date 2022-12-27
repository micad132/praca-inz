import TabPanelWrapper from "../../../../components/Wrappers/TabPanelWrapper";

const ModeratorPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Operacje dostępne dla roli moderatora</h2>
            <ul>
                <li>Dodawanie modeli aut</li>
                <li>Usuwanie modeli aut</li>
                <li>Zmiana ról użytkowników</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default ModeratorPanel;
