
export const initialValidationValues = {
    name: false,
    price: false,
    rating: false,
    description: false,
    enginePower: false,
    engineCapacity: false,
    gearbox: false,
    carBody: false,
    productionCountry: false,
}

export type InitialValidationValuesType = {
    name: boolean,
    price: boolean,
    rating: boolean,
    description: boolean,
    enginePower: boolean,
    engineCapacity: boolean,
    gearbox: boolean,
    carBody: boolean,
    productionCountry: boolean,
}


const carNameValidation = (name : string) : boolean => {
    return name.length > 5 && name.length < 20;
}

const carPriceValidation = (price: number) : boolean => {
    return price > 1000 && price < 1000000;
}

const carDescriptionValidation = (description : string) : boolean => {
    return description.length > 10 && description.length < 300;
}

const carEnginePowerValidation = (power : number) : boolean => {
    return power > 0 && power < 10;
}

const carEngineCapacityValidation = (capacity : number) : boolean => {
    return capacity > 0 && capacity < 10.0;
}



export  { carNameValidation, carPriceValidation,carDescriptionValidation, carEnginePowerValidation, carEngineCapacityValidation };