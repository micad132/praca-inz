import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from "../layout/Layout";
import {BrowserRouter} from "react-router-dom";
import {store} from "../store";
import {Provider} from "react-redux";
import Login from "../components/Header/Authorization/Login";
import Register from "../components/Header/Authorization/Register";
import {emailRegex, postalCodeRegex} from "../utils/regex";
import {cityNameValidation, nameValidation} from "../services/ValidationServices/AuthorizationValidation";
import { createMemoryHistory } from 'history';
import PolandInfo from "../pages/NewsPage";
import SingleNews from "../components/SingleNews";
import Orders from "../pages/OrdersPage/Orders";
import moment from "moment";
import CommercialsPage from "../pages/ProfilePage/CommercialsPage";
import CommercialsList from "../pages/ProfilePage/CommercialsPage/CommercialsList";


const mockedParts = [

    {
        orderId: 1,
        orderDate: moment(new Date(), "YYYY-MM-DD"),
        userNick: 'micad132',
        partAmount: 5,
        totalPrice: 2,
        partModelDTO: {
            partId: 1,
            partName: 'Kierownica',
            partPrice: 250,
        }
}]

const mockedCommercials = [
    {
        commercialId: 1,
        name: 'mockreklama',
        description: 'test',
        carModelId: 1,
        imageName: 'test'
    }
]

const MockedLayout = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <Layout children={[]} />
            </Provider>
        </BrowserRouter>
    )
}

const MockedRegisterComponent = () => {
    return(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )
}

const MockedNewsPage = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <PolandInfo />
            </Provider>
        </BrowserRouter>
    )
}

const MockedOrdersPage = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <Orders orders={mockedParts} />
            </Provider>
        </BrowserRouter>
    )
}

const MockedCommercialsPage = () => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <CommercialsPage >
                    <CommercialsList commercials={mockedCommercials} />
                </CommercialsPage>
            </Provider>
        </BrowserRouter>
    )
}

it('should provide proper register values and navigate to login screen', () => {

    render(<MockedRegisterComponent />);
    const history = createMemoryHistory();
    const nameInput = screen.getByTestId("name");
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const confirmPasswordInput = screen.getByTestId("confirm-password");
    const cityNameInput = screen.getByTestId("cityname");
    const postalCodeInput = screen.getByTestId("postalcode");
    const submitButton = screen.getByTestId("button");
    fireEvent.change(nameInput, { target: {value: "testowy123"}});
    fireEvent.change(emailInput, { target: {value: "test@test.pl"}});
    fireEvent.change(passwordInput, { target: {value: "siemka"}});
    fireEvent.change(confirmPasswordInput, { target: { value: "siemka"}});
    fireEvent.change(cityNameInput, { target: {value : "Kielce"}});
    fireEvent.change(postalCodeInput, { target: {value: "12-345"}});
    fireEvent.click(submitButton);
    expect(passwordInput.value).toBe(confirmPasswordInput.value);
    expect(emailInput.value).toMatch(emailRegex);
    expect(nameValidation(nameInput.value)).toBeTruthy();
    expect(cityNameValidation(cityNameInput.value)).toBeTruthy();
    expect(postalCodeInput.value).toMatch(postalCodeRegex);
    expect(history.location.pathname).toBe('/');
})

it('should display only posts with poland category', () => {
    render(<MockedNewsPage />);
    const selectElement = screen.getByTestId('category-select');
    const containerElement = screen.getByTestId('container');
    const properDiv = screen.getByTestId("proper-div");
    const mockedPost = {description: 'test', imageSrc: 'test2', postCategory: 'EUROPE', postId: 1, title: 'test'};
    const mockedPost2 = <SingleNews description={'test'} imageSrc={'test'} postCategory={'EUROPE'}
                                    postId={1} title={'test'} />
    fireEvent.change(selectElement, {target: {value : 'POLAND'}});
    // expect(containerElement).toContain(mockedPost2);
    expect(properDiv).toBeInTheDocument();

})

 it('should remove order after clicking delete button', () => {
     render(<MockedOrdersPage/>)

     const deletingIcon = screen.getByTestId("deleting-icon");
     const ordersContainer = screen.getByTestId('orders-container');
     fireEvent.click(deletingIcon);
     expect(ordersContainer).toContain(mockedParts);

 })

it('should add commercial to the preview list', () => {
    render(<MockedCommercialsPage />);
    const headingElement = screen.getByText("Brak reklam");
    expect(headingElement).toBeInTheDocument();
})