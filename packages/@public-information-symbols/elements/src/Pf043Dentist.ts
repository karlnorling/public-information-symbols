// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M67.45 94.039h52.917v52.917H67.45z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-67.45 -94.039)"/><path d="M102.198 102.752v3.7h-3.7v3.2h3.7v3.7h3.2v-3.7h3.7v-3.2h-3.7v-3.7zm-8.888 7.619c-2.141.01-4.032 1.185-4.915 1.19-.948-.046-3.113-1.18-4.953-1.19q-.194 0-.395.013c-3.646.548-4.506 3.385-4.3 6.5.407 4.54 1.819 4.646 2.275 7.15.512 2.807.205 5.76.45 8.601.146 1.755 1.098 5.798 2.476 5.6 1.742-.429.67-5.295 1.8-7.875.725-1.658.875-3.442 2.647-3.522 1.647.067 1.92 1.864 2.647 3.522 1.13 2.58.057 7.446 1.8 7.875 1.378.198 2.329-3.845 2.475-5.6.245-2.842-.062-5.794.45-8.6.456-2.505 1.868-2.611 2.275-7.15.207-3.116-.478-6.2-4.3-6.5a6 6 0 0 0-.432-.014" style="fill:#000;fill-opacity:1;stroke-width:1.2" transform="translate(-67.45 -94.039)"/>`;
const _DefaultDesc = `Dentist`;
const _DefaultTitle = 'Dentist';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Pf043Dentist extends HTMLElement {
  static readonly tagName = 'pi-pf-043-dentist';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-pf-043-dentist`;
    const titleId = `pi-title-pf-043-dentist`;
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
