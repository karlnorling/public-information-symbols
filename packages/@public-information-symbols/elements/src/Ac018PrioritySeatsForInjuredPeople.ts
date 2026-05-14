// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M120.149 95.714h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-120.149 -95.714)"/><path d="M140.202 106.59a2.829 2.829 0 1 0 0 5.659 2.829 2.829 0 0 0 0-5.658m10.946 4.573a.654.654 0 0 0-.656.655c0 .364.292.657.656.657h.141v8.538c-.007.506.117.89.399 1.282l1.709 2.37v13.018h.9v-12.967l1.748-2.427c.282-.391.407-.773.4-1.28v-8.534h.23a.655.655 0 1 0 0-1.312zm1.042 1.312h3.355v8.546c.005.423.006.418-.228.743l-1.452 2.012-1.447-2.008c-.234-.326-.233-.32-.228-.743v-.002zm-11.675.623a3.5 3.5 0 0 0-.702.056 3.46 3.46 0 0 0-2.801 4.028l1.437 8c.354 1.9 1.416 3.03 3.563 3.014h6.074l.6 7.938c.072.966.9 1.687 1.857 1.616a1.737 1.737 0 0 0 1.598-1.873l-.803-10.798a1.736 1.736 0 0 0-1.85-1.616 1.8 1.8 0 0 0-.419-.05h-3.888l-.825-4.592 4.91-.002c.589-.004 1.4-.48 1.385-1.384-.013-.767-.55-1.385-1.385-1.385h-4.136c-1.278-1.133-2.388-2.935-4.615-2.951zm-4.632 16.246v1.703h10.25v-1.703z" style="fill:#000;fill-opacity:1;stroke-width:1.2;stroke-linecap:round" transform="translate(-120.149 -95.714)"/>`;
const _DefaultDesc = `Priority seats for injured people`;
const _DefaultTitle = 'Priority seats for injured people';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Ac018PrioritySeatsForInjuredPeople extends HTMLElement {
  static readonly tagName = 'pi-ac-018-priority-seats-for-injured-people';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-ac-018-priority-seats-for-injured-people`;
    const titleId = `pi-title-ac-018-priority-seats-for-injured-people`;
    const _w = this.hasAttribute('width') ? _h(this.getAttribute('width')!) : _DefaultWidth;
    const _ht = this.hasAttribute('height') ? _h(this.getAttribute('height')!) : _DefaultHeight;
    const resolvedTitle = this.getAttribute('title') ?? _DefaultTitle;
    const resolvedDesc = this.getAttribute('description') ?? _DefaultDesc;
    this.style.display = 'contents';
    this.innerHTML = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
  }
}
