import { expect } from 'chai';
import words from '../src/words.js';

describe('words.js tests', () => {
  it('should split a string into an array of words using default pattern', () => {
    const result = words('fred, barney, & pebbles');
    expect(result).to.deep.equal(['fred', 'barney', 'pebbles']);
  });

  it('should split a string into an array of words using a custom pattern', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g);
    expect(result).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

  it('should handle an empty string', () => {
    const result = words('');
    expect(result).to.deep.equal([]);
  });

  it('should handle a string with no spaces or separators', () => {
    const result = words('abc123');
    expect(result).to.deep.equal(['abc123']);
  });

  it('should handle a string with spaces', () => {
    const result = words('  word1   word2  ');
    expect(result).to.deep.equal(['word1', 'word2']);
  });

  it('should handle a string with leading and trailing spaces', () => {
    const result = words('  word1   word2  ');
    expect(result).to.deep.equal(['word1', 'word2']);
  });

  it('should handle a string with Unicode characters', () => {
    const result = words('café, mañana');
    expect(result).to.deep.equal(['café', 'mañana']);
  });

  it('should handle a custom pattern with Unicode characters', () => {
    const result = words('café, mañana', /[^, ]+/g);
    expect(result).to.deep.equal(['café', 'mañana']);
  });

  it('should handle null input', () => {
    const result = words(null);
    expect(result).to.deep.equal([]);
  });

  it('should handle undefined input', () => {
    const result = words(undefined);
    expect(result).to.deep.equal([]);
  });

  it('should handle a custom pattern with no matches', () => {
    const result = words('abc123', /[^xyz]+/g);
    expect(result).to.deep.equal([]);
  });
});
