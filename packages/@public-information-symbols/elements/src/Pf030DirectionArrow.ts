// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { SvgParts } from '@public-information-symbols/core/render';
import { PISymbolBase } from './PISymbolBase';
import type { SymbolSource } from './PISymbolBase';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M102.253 172.115h52.917v52.917h-52.917z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-102.253 -172.115)\"/><path d=\"m123.793 186.473 7.38 7.381h-22.741v9.439h22.741l-7.38 7.381h12.434l12.764-12.1-12.764-12.1z\" style=\"stroke-width:2.13258\" transform=\"translate(-102.253 -172.115)\"/>","width":"200.001","height":"200.001"};
const _title = "Direction arrow";
const _description = "Direction arrow";

export class Pf030DirectionArrow extends PISymbolBase {
  static override readonly tagName = 'pi-pf-030-direction-arrow';

  protected override _source(): SymbolSource {
    return { parts: _parts, title: _title, description: _description };
  }
}
