// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.751 122.219h52.917v52.917H78.751z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.751 -122.219)"/><path d="m117.304 129.918-3.261 5.08h1.505l-2.54 3.889h1.38l-2.604 3.951h4.234v3.482h2.571v-3.482h4.234l-2.603-3.951h1.38l-2.54-3.89h1.505zm-17.73 6.837a2.525 2.525 0 1 0-.001 5.05 2.525 2.525 0 0 0 0-5.05m-7.77 4.547c-.656-.005-1.248.344-1.47.93l-2.105 5.536c-.298.782.176 1.683 1.062 2.02l1.062.403c.885.337 1.838-.022 2.135-.804l2.104-5.536c.297-.782-.176-1.683-1.062-2.02l-1.061-.403a1.9 1.9 0 0 0-.666-.126m5.887.604a3.19 3.19 0 0 0-3.004 2.101l-2.366 6.36c-.227.578-.256 1.024-.321 1.55l-.688 5.592-3.53 7.422a1.72 1.72 0 0 0 .763 2.314c.852.43 1.899.097 2.313-.763l3.347-6.945c.23-.475.399-1.046.456-1.496l.276-2.34c.02-.281.196-.346.466-.035l2.383 2.682 2.23 7.802a1.72 1.72 0 0 0 2.103 1.23c.923-.242 1.488-1.184 1.23-2.103l-2.085-7.421a5.2 5.2 0 0 0-.647-1.425l-2.606-2.982q.102-.193.179-.402l1.686-4.602 1.03 1.601c.187.286.421.367.762.366l4.692-.012v16.488c0 .243.228.439.51.439s.51-.196.51-.44V150.4c.61-.107 1.07-.763 1.07-1.428 0-.79-.638-1.427-1.428-1.427h-4.124c-1.263-1.626-2.002-4.768-4.105-5.44a3.2 3.2 0 0 0-1.102-.198" style="fill:#1f0000;stroke-width:1.2;stroke-linecap:round" transform="translate(-78.751 -122.219)"/>`;
const _DefaultDesc = `Hiking trail`;
const _DefaultTitle = "Hiking trail";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tc009HikingTrail extends HTMLElement {
  static readonly tagName = "pi-tc-009-hiking-trail";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tc-009-hiking-trail`;
    const titleId = `pi-title-tc-009-hiking-trail`;
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
