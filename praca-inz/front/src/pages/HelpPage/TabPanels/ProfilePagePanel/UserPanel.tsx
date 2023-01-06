import TabPanelWrapper from "../../../../components/Wrappers/TabPanelWrapper";

const UserPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Operacje dostępne dla roli użytkownika</h2>
            <ul>
                <li>Dodawanie postu</li>
                <li>Dodawanie komentarzy</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default UserPanel;
