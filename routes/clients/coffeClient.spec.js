const {
    fetchCoffeeByCountry,
    fetchCoffeeFilteredByCountry,
    fetchCoffeeSortedByRating,
    fetchAllCoffeeTypes
} = require('./coffeeClient');

describe('coffeeClient', () => {
    it('should get coffee types by country', () => {
        const result = fetchCoffeeByCountry();
        expect(result).toMatchSnapshot();
    });

    it('should get coffee types filtered by country', () => {
        const result = fetchCoffeeFilteredByCountry('FI');
        expect(result).toMatchSnapshot();
    });

    it('should get coffee types sorted by rating', () => {
        const result = fetchCoffeeSortedByRating();
        expect(result).toMatchSnapshot();
    });

    it('should get all coffee types', () => {
        const result = fetchAllCoffeeTypes();
        expect(result).toMatchSnapshot();
    });
});