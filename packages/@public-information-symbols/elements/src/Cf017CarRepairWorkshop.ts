// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M120.09 145.638h52.917v52.917H120.09z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-120.09 -145.638)"/><path d="M137.1 155.22a4.435 4.435 0 0 0-4.435 4.435 4.4 4.4 0 0 0 .243 1.443l2.108-2.108 2.16.58.601 2.239-2.06 2.06a4.4 4.4 0 0 0 1.384.222 4.43 4.43 0 0 0 4.081-2.706h10.641a4.43 4.43 0 0 0 4.084 2.706 4.435 4.435 0 0 0 4.436-4.436 4.4 4.4 0 0 0-.243-1.443l-2.108 2.108-2.16-.58-.601-2.238 2.06-2.06a4.4 4.4 0 0 0-1.384-.222 4.43 4.43 0 0 0-4.081 2.705h-10.641a4.43 4.43 0 0 0-4.084-2.705m1.837 12.333c-.624 0-1.16.29-1.518.691-.357.401-.569.894-.71 1.395l-1.57 5.519h-.345c-1.13 0-2.04.91-2.04 2.04v6.12c0 1.131.91 2.041 2.04 2.041h.466v3.615h2.997v-3.615h16.671v3.615h2.997v-3.615h.466c1.13 0 2.04-.91 2.04-2.04v-6.121c0-1.13-.91-2.04-2.04-2.04h-.345l-1.568-5.52c-.142-.5-.354-.993-.71-1.394a2.04 2.04 0 0 0-1.52-.691zm0 1.103h15.31c.317 0 .5.106.694.323.193.216.362.564.475.962l1.48 5.217h-20.608l1.481-5.217c.113-.398.282-.746.475-.962.193-.217.376-.323.693-.323m-1.016 8.27a2.603 2.603 0 0 1 2.603 2.603 2.603 2.603 0 0 1-2.603 2.603 2.603 2.603 0 0 1-2.603-2.603 2.603 2.603 0 0 1 2.603-2.603m17.344 0a2.603 2.603 0 0 1 2.603 2.603 2.603 2.603 0 0 1-2.603 2.603 2.603 2.603 0 0 1-2.604-2.603 2.603 2.603 0 0 1 2.604-2.603" style="display:inline;fill:#1f0000;fill-opacity:1;stroke:none;stroke-width:.903954;stroke-linecap:round;stroke-dasharray:none" transform="translate(-120.09 -145.638)"/>`;
const _DefaultDesc = `Car repair workshop`;
const _DefaultTitle = 'Car repair workshop';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Cf017CarRepairWorkshop extends HTMLElement {
  static readonly tagName = 'pi-cf-017-car-repair-workshop';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-cf-017-car-repair-workshop`;
    const titleId = `pi-title-cf-017-car-repair-workshop`;
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
