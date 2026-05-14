// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M103.767 65.8h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-103.767 -65.8)"/><path d="m146.38 72.444-32.673 9.49.182.625.182.625 13.658-3.967v2.159c-.02.204-.253.524-.56.533h-1.32l-.017.002c-.798.046-1.592.314-2.228.804s-1.116 1.243-1.145 2.145v17.598c.05 2.303 1.73 4.187 4.032 4.211h6.78v-1.299h-6.767c-1.629-.017-2.707-1.215-2.744-2.94V84.899c.017-.48.242-.85.637-1.153.394-.303.956-.502 1.503-.535h1.303c1.03-.027 1.747-.844 1.823-1.722l.002-.03V78.84l17.717-5.146-.182-.625zm-18.566 12.342a2.57 2.57 0 0 0-2.572 2.572 2.57 2.57 0 0 0 2.572 2.572 2.57 2.57 0 0 0 2.571-2.572 2.57 2.57 0 0 0-2.571-2.572m.25 5.99a2.316 2.316 0 0 0-2.32 2.321v8.5a2.316 2.316 0 0 0 2.586 2.305q.093.016.19.016h6.35v6.947c0 .669.54 1.207 1.208 1.207.67 0 1.208-.538 1.208-1.207v-8.17a1.19 1.19 0 0 0-1.192-1.192h-5.709v-2.478h4.094a1.11 1.11 0 0 0 1.113-1.114 1.11 1.11 0 0 0-1.113-1.113h-4.094v-3.7a2.316 2.316 0 0 0-2.32-2.321" style="color:#000;fill:#000;stroke-width:1.3;-inkscape-stroke:none" transform="translate(-103.767 -65.8)"/>`;
const _DefaultDesc = `Chair lift`;
const _DefaultTitle = 'Chair lift';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tf013ChairLift extends HTMLElement {
  static readonly tagName = 'pi-tf-013-chair-lift';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tf-013-chair-lift`;
    const titleId = `pi-title-tf-013-chair-lift`;
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
