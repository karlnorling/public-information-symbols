// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { SvgParts } from '@public-information-symbols/core/render';
import { PISymbolBase } from './PISymbolBase';
import type { SymbolSource } from './PISymbolBase';

const _parts: SvgParts = {"attrs":"xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52.917 52.917\"","body":"<path d=\"M200.393 127.981h52.917v52.917h-52.917z\" style=\"fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819\" transform=\"translate(-200.393 -127.981)\"/><path d=\"M225.895 136.523v.026c-.826.907-1.382 2.814-1.41 4.109l-.378 10.766-13.7 9.6.045 1.24c.034.93.24 1.214 1.37 1.023l12.585-3.563.3 6.8-5.695 3.9v2.418l7.84-2.1 7.839 2.1v-2.417l-5.696-3.9.3-6.8 12.585 3.562c1.13.19 1.337-.094 1.37-1.023l.046-1.24-13.7-9.6-.379-10.766c-.027-1.295-.583-3.202-1.41-4.109v-.026c-.324-.337-.638-.485-.955-.485-.318 0-.633.147-.957.485\" style=\"fill:#000;stroke-width:.7\" transform=\"translate(-200.393 -127.981)\"/>","width":"200.001","height":"200.001"};
const _title = "Airport, or Aircraft";
const _description = "Airport, or Aircraft";

export class Tf001AirportOrAircraft extends PISymbolBase {
  static override readonly tagName = 'pi-tf-001-airport-or-aircraft';

  protected override _source(): SymbolSource {
    return { parts: _parts, title: _title, description: _description };
  }
}
