import {fireEvent, render, screen} from '@testing-library/react';
import Home from "../pages/Home/Home";
import {BrowserRouter, Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from '../store';
import '@testing-library/jest-dom';
import Footer from "../components/Footer/Footer";
import CarsPageHeader from "../pages/CarsPage/CarsPageHeader";
import Login from "../components/Header/Authorization/Login";
import Register from "../components/Header/Authorization/Register";
import {emailRegex, postalCodeRegex} from "../utils/regex";
import {emailValidation} from "../services/ValidationServices/AuthorizationValidation";


const MockedHomePage = () => {
    return (<BrowserRouter>
        <Provider store={store} >
            <Home />
        </Provider>
    </BrowserRouter>)
}

const MockedLoginComponent = () => {
    return(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
}

const MockedRegisterComponent = () => {
    return (
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )
}

it('should render Witaj na portalu motoryzacyjnym! text' , () => {
    render(<MockedHomePage />);
    const headingElement = screen.getByText('Witaj na portalu motoryzacyjnym!');
    expect(headingElement).toBeInTheDocument();
})

it('should render footer text', () => {
    render(<Footer />);
    const headingElement = screen.getByText('Portal motoryzacyjny wykonany przez Michał Mosiołek ©');
    expect(headingElement).toBeInTheDocument();
})

it('should render Brak dostepnych aut when there are no cars', () => {
    render(<CarsPageHeader carListLength={0} />)
    const headingElement = screen.getByText('Brak dostepnych aut');
    expect(headingElement).toBeInTheDocument();
})

it('should password and confirmed password be the same', () => {
    render(<MockedLoginComponent />)
    const passwordInput = screen.getByTestId("password");
    const confirmPasswordInput = screen.getByTestId("confirm-password");
    fireEvent.change(passwordInput, { target: {value: "siemka"}});
    fireEvent.change(confirmPasswordInput, { target: { value: "siemka"}});
    expect(passwordInput.value).toBe(confirmPasswordInput.value);
})

it('should email in registration be in special regex', () => {
    render(<MockedRegisterComponent />)
    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, { target: { value: "test@test.pl"}})
    expect(emailValidation(emailInput.value)).toBe(true);
})

it('should open modal after clicking proper button')