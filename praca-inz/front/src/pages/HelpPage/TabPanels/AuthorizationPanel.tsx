import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";

const AuthorizationPanel = () => {

    return(
        <TabPanelWrapper>
            <div>
                <h2>Logowanie:</h2>
                <ul>
                    <li>Aby zalogowac sie do portalu nalezy kliknac przycisk zaloguj sie</li>
                    <li>Nastepnie nalezy uzupelnic swoje dane logowania</li>
                    <li>Jesli dane sa poprawne po zalogowaniu uzytkownik zostanie przeniesiony na strone glowna</li>
                </ul>
            </div>
            <div>
                <h2>Rejestracja:</h2>
                <ul>
                    <li>Aby zarejestrowac konto nalezy kliknac przycisk zaloguj sie</li>
                    <li>Nastepnie nacisnac przycisk zarejestruj sie</li>
                    <li>Kolejny krok polega na uzupelnieniu odpowiednich informacji</li>
                    <li>Jesli informacje spelniaja okreslone kryteria uzytkownik zostanie zarejestrowany</li>
                    <li>Po chwili nastapi przekierowanie do strony logowania</li>
                </ul>
            </div>
        </TabPanelWrapper>
    )
}

export default  AuthorizationPanel;