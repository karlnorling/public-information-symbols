import * as React from 'react';
import { getSymbol } from '@public-information-symbols/core';
import { getSvgParts } from '@public-information-symbols/core/render';
import type { SymbolProps } from './SymbolPropsBase';
import { renderSymbol, useSymbolUid } from './renderSymbol';

export interface SymbolByIdProps extends SymbolProps {
  /** Symbol slug ID, e.g. `"ac-001-full-accessibility"`. */
  id: string;
}

export const SymbolById = React.memo<SymbolByIdProps>(({ id, ...props }) => {
  const uid = useSymbolUid();
  const symbol = getSymbol(id);
  if (!symbol) return null;
  return renderSymbol(getSvgParts(symbol), symbol.name, symbol.description, props, uid);
});
SymbolById.displayName = 'SymbolById';
