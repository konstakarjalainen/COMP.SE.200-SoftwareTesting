import { expect } from 'chai';
import endsWith from '../src/endsWith.js';

describe('endsWith.js tests', () => {
  it('should return true if string ends with the target', () => {
    const result = endsWith('abc', 'c');
    expect(result).to.be.true;
  });

  it('should return false if string does not end with the target', () => {
    const result = endsWith('abc', 'b');
    expect(result).to.be.false;
  });

  it('should return true if string ends with the target at a specified position', () => {
    const result = endsWith('abc', 'b', 2);
    expect(result).to.be.true;
  });

  it('should return false if position is less than the length of the target', () => {
    const result = endsWith('abc', 'c', 1);
    expect(result).to.be.false;
  });

  it('should handle an empty string and empty target', () => {
    const result = endsWith('', '');
    expect(result).to.be.true;
  });

  it('should handle an empty target', () => {
    const result = endsWith('abc', '');
    expect(result).to.be.true;
  });

  it('should handle an empty string', () => {
    const result = endsWith('', 'abc');
    expect(result).to.be.false;
  });

  it('should handle a null string and null target', () => {
    const result = endsWith(null, null);
    expect(result).to.be.true;
  });

  it('should handle a null target', () => {
    const result = endsWith('abc', null);
    expect(result).to.be.false;
  });

  it('should handle a null string', () => {
    const result = endsWith(null, 'abc');
    expect(result).to.be.false;
  });

  it('should handle a string containing spaces', () => {
    const result = endsWith('  abc  ', 'c  ');
    expect(result).to.be.true;
  });

  it('should handle Unicode characters', () => {
    const result = endsWith('café', 'é');
    expect(result).to.be.true;
  });

  it('should handle Unicode characters at a specified position', () => {
    const result = endsWith('café', 'é', 3);
    expect(result).to.be.false;
  });
});
