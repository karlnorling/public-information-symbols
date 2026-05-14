// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M66.806 128.752h52.917v52.917H66.806z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-66.806 -128.752)"/><path d="M83.02 137s-.7 6.285-.41 9.177c.138 1.37.413 2.077 1.04 3.223.763 1.476 1.903 2.05 2.5 3.363.146.332.201.638.2.838-.03 5.774-.167 16.732-.195 18.916l-.005.384c.285.31.652.448 1.044.498v.003l.053.004q.187.018.375.016.19.002.374-.016l.054-.004v-.003c.392-.05.76-.188 1.044-.498 0 0 0-.134-.005-.384-.027-2.184-.165-13.142-.195-18.916a2.2 2.2 0 0 1 .2-.838c.598-1.313 1.737-1.887 2.5-3.363.628-1.146.903-1.852 1.04-3.223.291-2.892-.41-9.177-.41-9.177h-1.288v8.18a.617.617 0 0 1-.618.619.617.617 0 0 1-.619-.619V137H88.24v8.18a.617.617 0 0 1-.618.619.617.617 0 0 1-.619-.619V137h-1.459v8.18a.617.617 0 0 1-.618.619.617.617 0 0 1-.619-.619V137zm19.908 0a4.314 4.314 0 0 0-4.313 4.332v12.318a4.32 4.32 0 0 0 2.545 3.954v14.65c0 .786.347 1.168.778 1.168h1.273c.431 0 .778-.382.778-1.169v-35.146a4.3 4.3 0 0 0-.954-.107z" style="display:inline;fill:#000;stroke-width:1.7;stroke-linecap:round" transform="translate(-66.806 -128.752)"/>`;
const _DefaultDesc = `Restaurant`;
const _DefaultTitle = 'Restaurant';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Cf001Restaurant extends HTMLElement {
  static readonly tagName = 'pi-cf-001-restaurant';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-cf-001-restaurant`;
    const titleId = `pi-title-cf-001-restaurant`;
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
