// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M132.538 176.245h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-132.538 -176.245)"/><path d="M144.04 187.168a3.703 3.703 0 0 0-3.712 3.711v19.634l3.743 2.434-4.735 5.292 4.053-.006 3.865-4.665h.029v.003l2.88-.002 2.88.002v-.003h.03l3.865 4.665 4.052.006-4.734-5.292 3.742-2.434v-19.634a3.703 3.703 0 0 0-3.711-3.711h-5.293q-.43.001-.831.094a3.8 3.8 0 0 0-.83-.094zm3.142 1.595h5.963a.23.23 0 0 1 .232.232v1.071a.23.23 0 0 1-.232.232h-5.963a.23.23 0 0 1-.232-.232v-1.071a.23.23 0 0 1 .232-.232m-2.862 3.06h11.686a1.16 1.16 0 0 1 1.169 1.157v8.197h-14.023v-8.197c0-.64.521-1.156 1.168-1.156M161.545 194v1.399h2.601c.177 0 .32.142.32.319v.609a.32.32 0 0 1-.32.32h-2.6v1.49h5.55c.178 0 .32.142.32.319v5.901a.106.106 0 0 1-.106.107h-5.765v5.81h2.708v2.114c0 .446.36.806.806.806h1.642c.447 0 .807-.36.807-.806v-2.114h1.764v-13.871a2.4 2.4 0 0 0-2.403-2.403zm9.326 5.064v2.494h3.054c.122 0 .166.08.197.198l.769 2.928h-4.02v5.71h3.033v1.969c0 .37.297.667.666.667h1.549c.37 0 .667-.298.667-.667v-1.968h1.87v-3.345a2.36 2.36 0 0 0-2.364-2.366l-.77-2.928c-.221-.844-.724-1.598-1.597-1.598h-1.018v-1.094zm-25.924 5.674a1.83 1.83 0 0 1 1.829 1.828 1.83 1.83 0 0 1-1.829 1.828 1.83 1.83 0 0 1-1.828-1.828 1.83 1.83 0 0 1 1.828-1.828m10.432 0a1.83 1.83 0 0 1 1.828 1.828 1.83 1.83 0 0 1-1.828 1.828 1.83 1.83 0 0 1-1.828-1.828 1.83 1.83 0 0 1 1.828-1.828m10.577 1.703a1.31 1.31 0 0 1 1.308 1.308 1.31 1.31 0 0 1-1.308 1.308 1.31 1.31 0 0 1-1.308-1.308 1.31 1.31 0 0 1 1.308-1.308m9.37.03a1.23 1.23 0 0 1 1.231 1.232 1.23 1.23 0 0 1-1.232 1.232 1.23 1.23 0 0 1-1.232-1.232 1.23 1.23 0 0 1 1.232-1.232" style="display:inline;fill:#000;stroke-width:.899999" transform="translate(-132.538 -176.245)"/>`;
const _DefaultDesc = `Transportation Centre`;
const _DefaultTitle = 'Transportation Centre';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tf028TransportationCentre extends HTMLElement {
  static readonly tagName = 'pi-tf-028-transportation-centre';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tf-028-transportation-centre`;
    const titleId = `pi-title-tf-028-transportation-centre`;
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
