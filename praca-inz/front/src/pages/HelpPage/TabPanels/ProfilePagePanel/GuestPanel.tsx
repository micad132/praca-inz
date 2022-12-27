import TabPanelWrapper from "../../../../components/Wrappers/TabPanelWrapper";

const GuestPanel = () => {
    return(
        <TabPanelWrapper>
            <h2>Operacje dostępne dla roli gościa</h2>
            <ul>
                <li>Logowanie</li>
                <li>Rejestracja</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default GuestPanel;
