// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M68.526 81.948h52.917v52.917H68.526z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-68.526 -81.948)"/><path d="m108.123 89.434-3.262 5.079h1.506l-2.54 3.89h1.379l-2.603 3.95h4.234v3.482h2.571v-3.481h4.234l-2.603-3.952h1.38l-2.54-3.889h1.505zM89.504 99.57a.86.86 0 0 0-.798 1.246l1.526 3.05-10.27 20.525c-.005.011-2.148.017-2.148.017-.823 0-1.486.663-1.486 1.486s.663 1.486 1.486 1.486h26.879c.823 0 1.486-.663 1.486-1.486s-.663-1.486-1.486-1.486l-2.265-.017-10.27-20.524 1.526-3.05a.86.86 0 0 0-.384-1.155.86.86 0 0 0-1.156.384l-.949 1.897-.95-1.897a.86.86 0 0 0-.74-.476m1.691 16.804 4.025 8.034h-8.05z" style="fill:#1f0000;stroke-width:1.2;stroke-linecap:round" transform="translate(-68.526 -81.948)"/>`;
const _DefaultDesc = `Campsite or Camping`;
const _DefaultTitle = 'Campsite or Camping';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tc002CampsiteOrCamping extends HTMLElement {
  static readonly tagName = 'pi-tc-002-campsite-or-camping';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tc-002-campsite-or-camping`;
    const titleId = `pi-title-tc-002-campsite-or-camping`;
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
