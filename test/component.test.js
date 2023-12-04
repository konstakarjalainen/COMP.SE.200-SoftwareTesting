import chai from 'chai';
const expect = chai.expect;
import add from "../src/add.js"

describe('Add.js tests', () => {
    it('should sum two positive integers', () => {
        const sum = add(6,4);
        expect(sum).to.be.equal(10);
    });
});