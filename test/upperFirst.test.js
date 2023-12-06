import { expect } from 'chai';
import upperFirst from '../src/upperFirst.js';

describe('upperFirst.js tests', () => {
  it('should convert the first character of a lowercase string to uppercase', () => {
    const result = upperFirst('fred');
    expect(result).to.equal('Fred');
  });

  it('should convert the first character of an uppercase string to uppercase', () => {
    const result = upperFirst('FRED');
    expect(result).to.equal('FRED');
  });

  it('should handle an empty string', () => {
    const result = upperFirst('');
    expect(result).to.equal('');
  });

  it('should handle a single-character lowercase string', () => {
    const result = upperFirst('a');
    expect(result).to.equal('A');
  });

  it('should handle a single-character uppercase string', () => {
    const result = upperFirst('Z');
    expect(result).to.equal('Z');
  });

  it('should handle a string with leading and trailing spaces', () => {
    const result = upperFirst('  word  ');
    expect(result).to.equal('  Word  ');
  });

  it('should handle a string with non-alphabetic characters', () => {
    const result = upperFirst('123abc');
    expect(result).to.equal('123abc');
  });

  it('should handle null input', () => {
    const result = upperFirst(null);
    expect(result).to.equal('Null');
  });

  it('should handle undefined input', () => {
    const result = upperFirst(undefined);
    expect(result).to.equal('Undefined');
  });

  it('should handle non-string input', () => {
    const result = upperFirst(123);
    expect(result).to.equal('123');
  });

  it('should handle non-string input with toString method', () => {
    const customObject = {
      toString: () => 'customObject',
    };
    const result = upperFirst(customObject);
    expect(result).to.equal('Customobject');
  });

  it('should handle Unicode characters', () => {
    const result = upperFirst('café');
    expect(result).to.equal('Café');
  });
});
