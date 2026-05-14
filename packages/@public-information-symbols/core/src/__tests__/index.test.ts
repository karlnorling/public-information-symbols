import { getAllSymbols, getSymbol, getSymbolsByCategory } from '../index';

describe('@public-information-symbols/core', () => {
  it('getAllSymbols returns an array', () => {
    expect(Array.isArray(getAllSymbols())).toBe(true);
  });

  it('getSymbol returns undefined for unknown id', () => {
    expect(getSymbol('nonexistent')).toBeUndefined();
  });

  it('getSymbolsByCategory returns a filtered array', () => {
    const result = getSymbolsByCategory('accessibility');
    expect(Array.isArray(result)).toBe(true);
    result.forEach((s) => expect(s.category).toBe('accessibility'));
  });
});
