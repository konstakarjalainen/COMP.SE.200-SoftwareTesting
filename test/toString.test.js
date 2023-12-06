import { expect } from 'chai';
import toString from '../src/toString.js';

describe('toString.js tests', () => {
  it('should convert null to an empty string', () => {
    const result = toString(null);
    expect(result).to.equal('');
  });

  it('should convert undefined to an empty string', () => {
    const result = toString(undefined);
    expect(result).to.equal('');
  });

  it('should convert a string to itself', () => {
    const result = toString('abc');
    expect(result).to.equal('abc');
  });

  it('should convert a number to its string representation', () => {
    const result = toString(123);
    expect(result).to.equal('123');
  });

  it('should preserve the sign of -0', () => {
    const result = toString(-0);
    expect(result).to.equal('-0');
  });

  it('should convert an array to its string representation', () => {
    const result = toString([1, 2, 3]);
    expect(result).to.equal('1,2,3');
  });

  it('should recursively convert nested arrays', () => {
    const result = toString([1, [2, [3]]]);
    expect(result).to.equal('1,2,3');
  });

  it('should convert a symbol to its string representation', () => {
    const sym = Symbol('test');
    const result = toString(sym);
    expect(result).to.equal(sym.toString());
  });

  it('should handle a mix of different types in an array', () => {
    const result = toString(['abc', 123, null, undefined, Symbol('test')]);
    expect(result).to.equal('abc,123,,,' + Symbol('test').toString());
  });

  it('should handle NaN', () => {
    const result = toString(NaN);
    expect(result).to.equal('NaN');
  });

  it('should handle Infinity', () => {
    const result = toString(Infinity);
    expect(result).to.equal('Infinity');
  });

  it('should handle -Infinity', () => {
    const result = toString(-Infinity);
    expect(result).to.equal('-Infinity');
  });

  it('should handle true and false', () => {
    const resultTrue = toString(true);
    const resultFalse = toString(false);
    expect(resultTrue).to.equal('true');
    expect(resultFalse).to.equal('false');
  });
});
