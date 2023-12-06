import chai from 'chai';
const expect = chai.expect;
import ceil from "../src/ceil.js"

describe('ceil.js tests', () => {
  it('should round up a positive number to the nearest integer', () => {
    const result = ceil(4.006);
    expect(result).to.equal(5);
  });

  it('should round up a positive number to the specified precision', () => {
    const result = ceil(6.004, 2);
    expect(result).to.equal(6.01);
  });

  it('should round up a large number to the nearest multiple of 100', () => {
    const result = ceil(6040, -2);
    expect(result).to.equal(6100);
  });

  it('should round up a negative number to the nearest integer', () => {
    const result = ceil(-4.006);
    expect(result).to.equal(-4);
  });

  it('should round up a negative number to the specified precision', () => {
    const result = ceil(-6.004, 2);
    expect(result).to.equal(-6);
  });

  it('should round up a negative large number to the nearest multiple of 100', () => {
    const result = ceil(-6040, -2);
    expect(result).to.equal(-6000);
  });

  it('should handle zero', () => {
    const result = ceil(0);
    expect(result).to.equal(0);
  });

  it('should handle precision as zero', () => {
    const result = ceil(3.14, 0);
    expect(result).to.equal(4);
  });

  it('should handle precision as a negative number', () => {
    const result = ceil(1234, -2);
    expect(result).to.equal(1300);
  });

  it('should handle precision as a large positive number', () => {
    const result = ceil(987.654, 10);
    expect(result).to.equal(987.654);
  });

  it('should handle NaN input', () => {
    const result = ceil(NaN);
    expect(result).to.be.NaN;
  });

  it('should handle Infinity input', () => {
    const result = ceil(Infinity);
    expect(result).to.equal(Infinity);
  });

  it('should handle precision as Infinity', () => {
    const result = ceil(123.456, Infinity);
    expect(result).to.equal(123.456);
  });
});