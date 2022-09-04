
import {emailRegex, postalCodeRegex} from "../utils/regex";

const emailValidation = (value : string) : boolean => {
    return emailRegex.test(value);
}

const nameValidation = ( value : string) : boolean => {
    return value.length >5 && value.length < 30;
}

const passwordValidation = (value : string) : boolean => {
    return value.length > 5;
}

const cityNameValidation = (value : string) : boolean => {
    return value.length > 5 && value.length < 30;
}

const postalCodeValidation = (value : string) : boolean => {
    return postalCodeRegex.test(value);
}

export { emailValidation, nameValidation,  passwordValidation, cityNameValidation, postalCodeValidation };