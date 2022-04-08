const {coffeeTypes} = require('./coffeeTypes');

const fetchCoffeeByCountry = () => coffeeTypes.reduce((result, coffeeType) => {
    result[coffeeType.country] = result[coffeeType.country] || [];
    result[coffeeType.country].push(coffeeType);
    return result;
}, {});

const fetchCoffeeFilteredByCountry = (country) => coffeeTypes.filter(coffeeType => coffeeType.country === country);

const fetchCoffeeSortedByRating = () => coffeeTypes.sort((firstCoffeeType, secondCoffeeType) => secondCoffeeType.rating - firstCoffeeType.rating)

const fetchAllCoffeeTypes = () => coffeeTypes;

module.exports = {
    fetchCoffeeByCountry,
    fetchCoffeeFilteredByCountry,
    fetchCoffeeSortedByRating,
    fetchAllCoffeeTypes
}