import { symbols } from './symbols.generated';
import type { PISymbol, SymbolCategory } from './types';

export type { PISymbol, SymbolAssets, SymbolCategory } from './types';
export { symbols } from './symbols.generated';

export const getAllSymbols = (): PISymbol[] => symbols;

export const getSymbol = (id: string): PISymbol | undefined => symbols.find((s) => s.id === id);

export const getSymbolsByCategory = (category: SymbolCategory): PISymbol[] =>
  symbols.filter((s) => s.category === category);
