import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp.js tests', () => {
  it('should clamp a number within the inclusive bounds', () => {
    const result = clamp(-10, -5, 5);
    expect(result).to.equal(-5);
  });

  it('should clamp a number to the lower bound', () => {
    const result = clamp(-10, 0, 5);
    expect(result).to.equal(0);
  });

  it('should clamp a number to the upper bound', () => {
    const result = clamp(10, -5, 5);
    expect(result).to.equal(5);
  });

  it('should handle a number within the bounds', () => {
    const result = clamp(3, 1, 5);
    expect(result).to.equal(3);
  });

  it('should handle a floating-point number within the bounds', () => {
    const result = clamp(3.14, 1, 5);
    expect(result).to.equal(3.14);
  });

  it('should handle a number equal to the lower bound', () => {
    const result = clamp(1, 1, 5);
    expect(result).to.equal(1);
  });

  it('should handle a number equal to the upper bound', () => {
    const result = clamp(5, 1, 5);
    expect(result).to.equal(5);
  });

  it('should handle the lower bound as NaN', () => {
    const result = clamp(3, NaN, 5);
    expect(result).to.be.NaN;
  });

  it('should handle the upper bound as NaN', () => {
    const result = clamp(3, 1, NaN);
    expect(result).to.be.NaN;
  });

  it('should handle both bounds as NaN', () => {
    const result = clamp(3, NaN, NaN);
    expect(result).to.be.NaN;
  });

  it('should handle NaN input', () => {
    const result = clamp(NaN, 1, 5);
    expect(result).to.be.NaN;
  });

  it('should handle Infinity input', () => {
    const result = clamp(Infinity, 1, 5);
    expect(result).to.equal(5);
  });

  it('should handle -Infinity input', () => {
    const result = clamp(-Infinity, 1, 5);
    expect(result).to.equal(1);
  });
});