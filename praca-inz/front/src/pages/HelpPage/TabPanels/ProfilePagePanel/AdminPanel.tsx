import TabPanelWrapper from "../../../../components/Wrappers/TabPanelWrapper";

const AdminPanel = () => {

    return(
        <TabPanelWrapper>
            {/*<h2>Profil użytkownika zawiera operacje zależne od roli zalogowanego użytkownika</h2>*/}
            <h2>Operacje dostępne dla roli administratora</h2>
            <ul>
                <li>Dodawanie reklam</li>
                <li>Usuwanie reklam</li>
                <li>Odznaczanie/oznaczanie komentarzy jako wulgarne</li>
                <li>Usuwanie komentarzy</li>
            </ul>


        </TabPanelWrapper>
    )
}

export default AdminPanel;
