import TabPanelWrapper from "../../../../components/Wrappers/TabPanelWrapper";

const ReviewsPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Wymagane są uprawnienia admina</h2>
            <h3>Zarządzanie komentarzami</h3>
                <ul>
                    <li>Po wejściu na panel użytkownika i kliknięciu przycisku ,,zarządzaj komentarzami" ukazuje się lista wszystkich komentarzy z portalu</li>
                    <li>Administrator jest w stanie przefiltrować listę w celu pokazania wszystkich, komentarzy dla aut lub
                        komentarzy dla postów</li>
                    <li>Istnieje również możliwość przefiltrowania listy w celu ukazania tylko komentarzy oznaczonych jako wulgarne</li>
                    <li>Kliknięcie ikony ,,wykrzyknika" powoduje oznaczenie/odznaczenie komentarza jako wulgarnego</li>
                    <li>Kliknięcie ikony ,,kosza" powoduje usunięcie komentarza</li>
                </ul>
        </TabPanelWrapper>
    )
}

export default ReviewsPanel;
