import chai from 'chai';
const expect = chai.expect;
import capitalize from "../src/capitalize.js"

describe('capitalize.js tests', () => {
  it('should capitalize the first letter of a string', () => {
    const result = capitalize('hello');
    expect(result).to.equal('Hello');
  });

  it('should handle an empty string', () => {
    const result = capitalize('');
    expect(result).to.equal('');
  });

  it('should capitalize a single-character string', () => {
    const result = capitalize('a');
    expect(result).to.equal('A');
  });

  it('should handle null input', () => {
    const result = capitalize(null);
    expect(result).to.equal('Null');
  });

  it('should handle undefined input', () => {
    const result = capitalize(undefined);
    expect(result).to.equal('Undefined');
  });

  it('should handle numbers by converting to string', () => {
    const result = capitalize(123);
    expect(result).to.equal('123');
  });

  it('should capitalize the first letter of a mixed-case string', () => {
    const result = capitalize('miXeD');
    expect(result).to.equal('Mixed');
  });

  it('should handle special characters in the string', () => {
    const result = capitalize('@special');
    expect(result).to.equal('@special');
  });

  it('should handle non-string input by converting to string', () => {
    const result = capitalize(true);
    expect(result).to.equal('True');
  });

  it('should handle non-string input with toString method', () => {
    const customObject = {
      toString: () => 'customObject',
    };
    const result = capitalize(customObject);
    expect(result).to.equal('Customobject');
  });
});