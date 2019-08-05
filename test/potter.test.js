const assert = require('assert');
const potter = require('../katas/potter');
describe('general sales', function() {
    it('should return 0 no input is passed', function() {
        assert.equal(potter(), 0);
    });
    it('should return 8 when you buy 1', function() {
        assert.equal(potter({first: 1}), 8);
        assert.equal(potter({third: 1}), 8);
    });
    it('should apply a discount of 5% when buy 2 books', function() {
        assert.equal(potter({first: 1, second: 1}), 15.2)
    });
    it('should apply a discount of 10% when buy 3 books', function() {
        assert.equal(potter({first: 1, second: 1, third: 1}), 21.6)
    });
    it('should apply a discount of 25% when buy 5 books', function() {
        assert.equal(potter({first: 1, second: 1, third: 1, fourth: 1, fifth: 1}), 30)
    });
});
describe('Different discounts to groups of books', function() {
    it('should apply a discount of 5% when buy 2 different books and buy three books', function () {
        assert.equal(potter({first: 2, second: 1}), 23.2)
    });
    it('should apply a discount of 25% when buy 5 different books and an additional three different books', function () {
        assert.equal(potter({first: 2, second: 2, third: 2, fourth: 1, fifth: 1}), 51.6)
    });
    it('should apply a discount of 25% when buy 5 different books, an additional three different books with a 10% discount and an additional book', function () {
        assert.equal(potter({first: 3, second: 2, third: 2, fourth: 1, fifth: 1}), 59.6)
    });
    it('should apply a discount of 25% when buy 5 different books, an additional three different books with a 10% discount and 3 additional book', function () {
        assert.equal(potter({first: 5, second: 2, third: 2, fourth: 1, fifth: 1}), 75.6)
    });
});
