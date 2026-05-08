// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M67.964 69.25h52.917v52.917H67.964z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-67.964 -69.25)"/><path d="m102.103 77.319 1.587 5.771h5.074l1.587-5.771zm1.843 7.492v2.262c-3.887-.232-6.042-.41-10.024-.443-4.47.29-4.038 3.59-2.783 6.353l2.439-.044c-.117-1.232-.14-2.022.133-2.326.88-.983 7.241.618 10.301.433l-.022 4.144h4.524V84.81Zm-23.743 9.454c-.147 0-.307.013-.472.042l-.127.021c-.661.115-1.155.43-1.107.707l3.303 19.062.011-.002v.002h15.818v-.002l.011.002 3.303-19.062c.048-.277-.446-.592-1.108-.707l-.126-.021a3 3 0 0 0-.473-.042c-.442.001-.772.127-.808.335l-.703 4.053-.17.077c-.625.274-1.408.522-1.809.514-.918-.02-1.445-.356-2.016-.752-.57-.397-1.207-.897-2.135-.88-1.105.019-1.777.633-2.321 1.108s-.97.845-1.928.854c-.56.005-1.203-.311-1.91-.696-.708-.384-1.476-.834-2.38-.859-.498-.014-.977.171-1.393.338l-.65-3.757c-.037-.208-.368-.334-.81-.335m11.41 4.346c.565-.01.949.286 1.547.701.598.416 1.39.907 2.564.932.594.012 1.224-.185 1.798-.415l-.357 2.062c-.533.204-1.098.361-1.419.355-.918-.02-1.445-.358-2.016-.754-.57-.397-1.207-.895-2.135-.879-1.105.02-1.777.634-2.321 1.11-.545.475-.97.844-1.928.853-.56.005-1.203-.313-1.91-.697-.708-.385-1.476-.833-2.38-.858a2.7 2.7 0 0 0-.905.154l-.313-1.807.183-.077c.37-.15.841-.276 1.008-.272.566.016 1.218.35 1.93.736.712.387 1.487.827 2.396.819 1.247-.012 2.013-.607 2.576-1.1.564-.492.916-.85 1.682-.863m0 3.002c.565-.01.949.286 1.547.701.598.416 1.39.907 2.564.932.407.008.832-.082 1.243-.214l-1.488 8.588H83.96l-1.635-9.439c.292-.095.58-.163.704-.16.566.016 1.218.35 1.93.737.712.386 1.487.826 2.396.818 1.247-.012 2.013-.607 2.576-1.1s.916-.85 1.682-.863" style="display:inline;stroke-width:.79375" transform="translate(-67.964 -69.25)"/>`;
const _DefaultDesc = `Drinking water`;
const _DefaultTitle = "Drinking water";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Pf007DrinkingWater extends HTMLElement {
  static readonly tagName = "pi-pf-007-drinking-water";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-pf-007-drinking-water`;
    const titleId = `pi-title-pf-007-drinking-water`;
    const _w = this.hasAttribute("width") ? _h(this.getAttribute("width")!) : _DefaultWidth;
    const _ht = this.hasAttribute("height") ? _h(this.getAttribute("height")!) : _DefaultHeight;
    const resolvedTitle = this.getAttribute("title") ?? _DefaultTitle;
    const resolvedDesc = this.getAttribute("description") ?? _DefaultDesc;
    this.style.display = "contents";
    this.innerHTML = `<svg ${_Attrs} width="${_w}" height="${_ht}" role="img" aria-labelledby="${titleId} ${descId}">
  <title id="${titleId}">${_h(resolvedTitle)}</title>
  <desc id="${descId}">${_h(resolvedDesc)}</desc>
  ${_Body}</svg>`;
  }
}
