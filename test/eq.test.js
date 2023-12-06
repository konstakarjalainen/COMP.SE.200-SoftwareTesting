import { expect } from 'chai';
import eq from '../src/eq.js';

describe('eq.js tests', () => {
  it('should return true for equivalent numbers', () => {
    expect(eq(42, 42)).to.be.true;
  });

  it('should return false for different numbers', () => {
    expect(eq(42, 23)).to.be.false;
  });

  it('should return true for equivalent strings', () => {
    expect(eq('abc', 'abc')).to.be.true;
  });

  it('should return false for different strings', () => {
    expect(eq('abc', 'xyz')).to.be.false;
  });

  it('should return true for equivalent booleans', () => {
    expect(eq(true, true)).to.be.true;
    expect(eq(false, false)).to.be.true;
  });

  it('should return false for different booleans', () => {
    expect(eq(true, false)).to.be.false;
    expect(eq(false, true)).to.be.false;
  });

  it('should return true for equivalent null values', () => {
    expect(eq(null, null)).to.be.true;
  });

  it('should return false for different null values', () => {
    expect(eq(null, undefined)).to.be.false;
  });

  it('should return true for equivalent undefined values', () => {
    expect(eq(undefined, undefined)).to.be.true;
  });

  it('should return false for different undefined values', () => {
    expect(eq(undefined, null)).to.be.false;
  });

  it('should return true for equivalent NaN values', () => {
    expect(eq(NaN, NaN)).to.be.true;
  });

  it('should return false for different NaN values', () => {
    expect(eq(NaN, 42)).to.be.false;
    expect(eq(23, NaN)).to.be.false;
  });

  it('should return true for equivalent objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(eq(obj1, obj1)).to.be.true;
    expect(eq(obj1, obj2)).to.be.true;
  });

  it('should return false for different objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(eq(obj1, obj2)).to.be.false;
  });

  it('should return true for equivalent arrays', () => {
    const arr1 = [1, 2, [3, 4]];
    const arr2 = [1, 2, [3, 4]];
    expect(eq(arr1, arr1)).to.be.true;
    expect(eq(arr1, arr2)).to.be.true;
  });

  it('should return false for different arrays', () => {
    const arr1 = [1, 2, [3, 4]];
    const arr2 = [1, 2, [3, 5]];
    expect(eq(arr1, arr2)).to.be.false;
  });

  it('should return true for equivalent symbols', () => {
    const sym1 = Symbol('test');
    const sym2 = Symbol('test');
    expect(eq(sym1, sym1)).to.be.true;
    expect(eq(sym1, sym2)).to.be.true;
  });

  it('should return false for different symbols', () => {
    const sym1 = Symbol('test1');
    const sym2 = Symbol('test2');
    expect(eq(sym1, sym2)).to.be.false;
  });

  it('should return true for equivalent values with SameValueZero comparison', () => {
    expect(eq(0, -0)).to.be.true;
    expect(eq(-0, 0)).to.be.true;
  });
});
