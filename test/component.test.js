import chai from 'chai';
const expect = chai.expect;
import add from "../src/add.js"

describe('add.js tests', () => {
    it('should add two numbers', () => {
      const result = add(3, 4);
      expect(result).to.equal(7);
    });
  
    it('should add zero and a number', () => {
      const result = add(0, 5);
      expect(result).to.equal(5);
    });
  
    it('should add a negative and a positive number', () => {
      const result = add(-2, 8);
      expect(result).to.equal(6);
    });

    it('should be zero when adding same negative and positive number', () => {
        const result = add(-2, 2);
        expect(result).to.equal(0);
    });
});