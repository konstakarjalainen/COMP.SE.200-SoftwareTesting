import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

describe('toInteger.js tests', () => {
  it('should convert a positive integer to an integer', () => {
    const result = toInteger(42);
    expect(result).to.equal(42);
  });

  it('should convert a negative integer to an integer', () => {
    const result = toInteger(-23);
    expect(result).to.equal(-23);
  });

  it('should convert a positive float to an integer by truncation', () => {
    const result = toInteger(3.14);
    expect(result).to.equal(3);
  });

  it('should convert a negative float to an integer by truncation', () => {
    const result = toInteger(-2.718);
    expect(result).to.equal(-2);
  });

  it('should convert zero to an integer', () => {
    const result = toInteger(0);
    expect(result).to.equal(0);
  });

  it('should convert a string representing a positive integer to an integer', () => {
    const result = toInteger('42');
    expect(result).to.equal(42);
  });

  it('should convert a string representing a negative integer to an integer', () => {
    const result = toInteger('-23');
    expect(result).to.equal(-23);
  });

  it('should convert a string representing a positive float to an integer by truncation', () => {
    const result = toInteger('3.14');
    expect(result).to.equal(3);
  });

  it('should convert a string representing a negative float to an integer by truncation', () => {
    const result = toInteger('-2.718');
    expect(result).to.equal(-2);
  });

  it('should convert a string representing zero to an integer', () => {
    const result = toInteger('0');
    expect(result).to.equal(0);
  });

  it('should convert a string representing NaN to NaN', () => {
    const result = toInteger('NaN');
    expect(result).to.equal(0);
  });

  it('should convert a string representing Infinity to max integer', () => {
    const result = toInteger('Infinity');
    expect(result).to.equal(Number.MAX_VALUE);
  });

  it('should convert a string representing -Infinity to min integer number', () => {
    const result = toInteger('-Infinity');
    expect(result).to.equal(-Number.MAX_VALUE);
  });

  it('should handle a very small positive float and return 0', () => {
    const result = toInteger(Number.MIN_VALUE);
    expect(result).to.equal(0);
  });

  it('should handle a very small negative float and return 0', () => {
    const result = toInteger(-Number.MIN_VALUE);
    expect(result).to.equal(0);
  });

  it('should handle null input', () => {
    const result = toInteger(null);
    expect(result).to.equal(0);
  });

  it('should handle undefined input', () => {
    const result = toInteger(undefined);
    expect(result).to.equal(0);
  });

  it('should handle a symbol input', () => {
    const sym = Symbol('test');
    const result = toInteger(sym);
    expect(result).to.equal(0);
  });

  it('should handle an object input with a valueOf method', () => {
    const obj = {
      valueOf: () => 42,
    };
    const result = toInteger(obj);
    expect(result).to.equal(42);
  });

  it('should handle an object input without a valueOf method', () => {
    const obj = {
      toString: () => '3.14',
    };
    const result = toInteger(obj);
    expect(result).to.equal(3);
  });

  it('should handle a non-string input', () => {
    const result = toInteger(true);
    expect(result).to.equal(1);
  });

  it('should handle a non-string input with toString method', () => {
    const customObject = {
      toString: () => '123',
    };
    const result = toInteger(customObject);
    expect(result).to.equal(123);
  });
});
