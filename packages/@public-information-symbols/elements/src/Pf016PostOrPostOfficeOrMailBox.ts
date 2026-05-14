// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M290.997 100.465h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-290.997 -100.465)"/><path d="M301.019 114.852v24.143h32.874v-24.143zm2.82 1.819h27.168l-11.365 11.388c-1.504 1.464-2.712 1.525-4.319-.014-3.781-3.569-7.687-7.562-11.484-11.374m28.103 1.749v17.148l-8.593-8.556zm-28.972.067 8.56 8.56-8.56 8.522zm19.035 9.87 8.86 8.82h-26.816l8.824-8.785c1.312 1.465 2.795 2.835 4.689 2.796 2.057-.141 3.092-1.48 4.443-2.83" style="display:inline;stroke-width:1.3" transform="translate(-290.997 -100.465)"/></g>`;
const _DefaultDesc = `Post or Post office or mail box`;
const _DefaultTitle = 'Post or Post office or mail box';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Pf016PostOrPostOfficeOrMailBox extends HTMLElement {
  static readonly tagName = 'pi-pf-016-post-or-post-office-or-mail-box';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-pf-016-post-or-post-office-or-mail-box`;
    const titleId = `pi-title-pf-016-post-or-post-office-or-mail-box`;
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
