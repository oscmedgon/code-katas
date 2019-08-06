const assert = require('assert');
const {expect} = require('chai');

const transformDecToRoman = require('../katas/roman');

describe('Roman tests', function() {
    it('should return error when any argument is passed', function() {
        expect(transformDecToRoman).to.throw();
    });
    it('should return error when the argument isn\'t a number', function() {
        expect(() => transformDecToRoman('1')).to.throw();
    });
    it('should return error when the argument isn\'t a number', function() {
        expect(() => transformDecToRoman(console.log)).to.throw();
    });
    it('should return I when passing 1 as argument', function() {
        assert.equal(transformDecToRoman(1), 'I');
    });
    it('should return III when passing 3 as argument', function() {
        assert.equal(transformDecToRoman(3), 'III');
    });
    it('should return IV when passing 4 as argument', function() {
        assert.equal(transformDecToRoman(4), 'IV');
    });
    it('should return VII when passing 7 as argument', function() {
        assert.equal(transformDecToRoman(7), 'VII');
    });
    it('should return IX when passing 9 as argument', function() {
        assert.equal(transformDecToRoman(9), 'IX');
    });
    it('should return XXII when passing 22 as argument', function() {
        assert.equal(transformDecToRoman(22), 'XXII');
    });
    it('should return XL when passing 40 as argument', function() {
        assert.equal(transformDecToRoman(40), 'XL');
    });
    it('should return XCIV when passing 94 as argument', function() {
        assert.equal(transformDecToRoman(94), 'XCIV');
    });
    it('should return CXII when passing 122 as argument', function() {
        assert.equal(transformDecToRoman(122), 'CXXII');
    });
    it('should return CDXLIX when passing 449 as argument', function() {
        assert.equal(transformDecToRoman(449), 'CDXLIX');
    });
    it('should return CMLXXXIV when passing 984 as argument', function() {
        assert.equal(transformDecToRoman(984), 'CMLXXXIV');
    });
    it('should return MCMLXXXIV when passing 1984 as argument', function() {
        assert.equal(transformDecToRoman(1984), 'MCMLXXXIV');
    });
    it('should return MMMCDXLIX when passing 3449 as argument', function() {
        assert.equal(transformDecToRoman(3449), 'MMMCDXLIX');
    });
});
