import { expect } from 'chai';
import toNumber from '../src/toNumber.js';

describe('toNumber.js tests', () => {
  it('should convert a positive integer to a number', () => {
    const result = toNumber(42);
    expect(result).to.equal(42);
  });

  it('should convert a negative integer to a number', () => {
    const result = toNumber(-23);
    expect(result).to.equal(-23);
  });

  it('should convert a positive float to a number', () => {
    const result = toNumber(3.14);
    expect(result).to.equal(3.14);
  });

  it('should convert a negative float to a number', () => {
    const result = toNumber(-2.718);
    expect(result).to.equal(-2.718);
  });

  it('should convert zero to a number', () => {
    const result = toNumber(0);
    expect(result).to.equal(0);
  });

  it('should convert a string representing a positive integer to a number', () => {
    const result = toNumber('42');
    expect(result).to.equal(42);
  });

  it('should convert a string representing a negative integer to a number', () => {
    const result = toNumber('-23');
    expect(result).to.equal(-23);
  });

  it('should convert a string representing a positive float to a number', () => {
    const result = toNumber('3.14');
    expect(result).to.equal(3.14);
  });

  it('should convert a string representing a negative float to a number', () => {
    const result = toNumber('-2.718');
    expect(result).to.equal(-2.718);
  });

  it('should convert a string representing zero to a number', () => {
    const result = toNumber('0');
    expect(result).to.equal(0);
  });

  it('should convert a string representing NaN to NaN', () => {
    const result = toNumber('NaN');
    expect(result).to.be.NaN;
  });

  it('should convert a string representing Infinity to Infinity', () => {
    const result = toNumber('Infinity');
    expect(result).to.equal(Infinity);
  });

  it('should convert a string representing -Infinity to -Infinity', () => {
    const result = toNumber('-Infinity');
    expect(result).to.equal(-Infinity);
  });

  it('should convert a string representing a binary number to a number', () => {
    const result = toNumber('0b1010');
    expect(result).to.equal(10);
  });

  it('should convert a string representing an octal number to a number', () => {
    const result = toNumber('0o72');
    expect(result).to.equal(58);
  });

  it('should convert a string representing a bad hexadecimal number to NaN', () => {
    const result = toNumber('-0x2g');
    expect(result).to.be.NaN;
  });

  it('should handle null input', () => {
    const result = toNumber(null);
    expect(result).to.equal(0);
  });

  it('should handle undefined input', () => {
    const result = toNumber(undefined);
    expect(result).to.be.NaN;
  });

  it('should handle a symbol input', () => {
    const sym = Symbol('test');
    const result = toNumber(sym);
    expect(result).to.be.NaN;
  });

  it('should handle an object input with a valueOf method', () => {
    const obj = {
      valueOf: () => 42,
    };
    const result = toNumber(obj);
    expect(result).to.equal(42);
  });

  it('should handle an object input without a valueOf method', () => {
    const obj = {
      toString: () => '3.14',
    };
    const result = toNumber(obj);
    expect(result).to.equal(3.14);
  });

  it('should handle a non-string input', () => {
    const result = toNumber(true);
    expect(result).to.equal(1);
  });

  it('should handle a non-string input with toString method', () => {
    const customObject = {
      toString: () => '123',
    };
    const result = toNumber(customObject);
    expect(result).to.equal(123);
  });
});
