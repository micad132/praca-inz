
const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
const postalCodeRegex = new RegExp("^[0-9]{2}-[0-9]{3}$");

export {emailRegex, postalCodeRegex}