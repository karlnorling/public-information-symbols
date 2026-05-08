// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M105.006 66.806h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-105.006 -66.806)"/><path d="M127.259 73.746a2.783 2.783 0 1 0 0 5.567 2.783 2.783 0 0 0 0-5.567m-3.24 6.3c-.948.123-1.152.688-1.41 1.316l-3.404 10.78c-.206.652.097 1.325.68 1.509.582.184 1.216-.194 1.422-.846l2.815-8.916v6.196l-2.662 18.26a1.55 1.55 0 0 0 1.314 1.763l.037.005a1.55 1.55 0 0 0 1.763-1.314l2.03-13.924c.013-.448 1.291-.465 1.323.012l2.028 13.912a1.55 1.55 0 0 0 1.763 1.314l.037-.005a1.55 1.55 0 0 0 1.314-1.763l-2.663-18.26V83.89l2.816 8.916c.206.652.84 1.03 1.422.846.583-.184.885-.857.68-1.51l-3.405-10.78c-.254-.725-.76-1.299-1.409-1.315h-5.274zm-9.653 12.215a1 1 0 0 0-1 1v19.521h36.197V93.261a1 1 0 0 0-1-1 1 1 0 0 0-1 1v17.521h-32.197V93.261a1 1 0 0 0-1-1" style="stroke-width:1.01549" transform="translate(-105.006 -66.806)"/>`;
const _DefaultDesc = `Stand on the left (or Right)`;
const _DefaultTitle = 'Stand on the left (or Right)';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Bp002StandOnTheLeftOrRight extends HTMLElement {
  static readonly tagName = 'pi-bp-002-stand-on-the-left-or-right';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-bp-002-stand-on-the-left-or-right`;
    const titleId = `pi-title-bp-002-stand-on-the-left-or-right`;
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
