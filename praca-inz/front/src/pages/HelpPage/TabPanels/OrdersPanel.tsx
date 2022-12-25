import TabPanelWrapper from "../../../components/Wrappers/TabPanelWrapper";

const OrdersPanel = () => {

    return(
        <TabPanelWrapper>
            <h2>Wymagane są uprawnienia użytkownika</h2>
            <h3>Dodawanie zamówienia</h3>
            <ul>
                <li>W celu dodania zamówienia nalezy najpierw udać sie na stronę ,,części"</li>
                <li>Następnie klikamy przycisk dodaj obok wybranej części</li>
                <li>Kolejnym krokiem jest wybór ilości części do zamówienia</li>
                <li>Końcowo zatwierdzamy dodawanie klikając przycisk ,,dodaj"</li>
            </ul>
            <h2>Wymagane są uprawienia moderatora</h2>
            <h3>Edycja zamówienia</h3>
            <ul>
                <li>W celu edycji zamówienia należy kliknąć ikonkę ,,długopisu" oznaczająca edycję</li>
                <li>Następnie wprowadzamy odpowiednie dane i wybieramy część na która ma być zamówienie</li>
                <li>Końcowo zatwierdzamy edycję klikając przycisk ,,edytuj"</li>
            </ul>
            <h3>Usunięcie zamówienia</h3>
            <ul>
                <li>W celu usunięcią zamówienia należy kliknać ikonkę ,,kosza" oznaczającą usunięcie</li>
                <li>Po kliknięciu zamówienie zostaje usunięte</li>
            </ul>
        </TabPanelWrapper>
    )
}

export default  OrdersPanel;
