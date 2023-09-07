/*
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/
function maskify(cc) {
    //check if the string length is equal or less than 4
    if (cc.length <= 4){
        //return the original string if its 4 or less characters
        return cc;
    }

    //replace all characters with '#' except the last 4
    const maskedString = '#'.repeat(cc.length - 4) + cc.slice(-4);

    return maskedString
}

// Example usage:
const creditCardNumber = "1234567890123456";
const maskedCreditCard = maskify(creditCardNumber);
console.log(maskedCreditCard);

// Example usage:
const favouriteCity = "Nairobi";
const maskedFavouriteCity = maskify(favouriteCity);
console.log(maskedFavouriteCity);