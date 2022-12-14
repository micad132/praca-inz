

const newsTitleValidation = (title : string) : boolean => {
    return title.length >5 && title.length < 30;
}

const newsDescriptionValidation = (description: string) : boolean => {
    return description.length > 10 && description.length < 100;
}





export { newsTitleValidation, newsDescriptionValidation };