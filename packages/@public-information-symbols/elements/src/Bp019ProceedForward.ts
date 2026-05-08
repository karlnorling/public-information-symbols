// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M146.992 94.682h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-146.992 -94.682)"/><path d="M165.233 99.991a3.232 3.232 0 1 0 0 6.464 3.232 3.232 0 0 0 0-6.464m-.795 7.413c-.996.077-1.773.431-2.372 1.265l-3.566 4.9c-.516.639-.718 1.243-.9 1.991l-1.74 7.152a1.174 1.174 0 0 0 .864 1.422 1.174 1.174 0 0 0 1.421-.866l2.006-8.06.74-1.027c.185-.216.565-.348.553.186v7.248q0 .224.033.439l-.976 2.959c-.782 2.686-1.65 4.97-1.757 5.282-.119.349-1.143 2.004-2.214 3.438l-3.153 4.425c-.53.745-.358 1.77.386 2.301.745.53 1.77.358 2.301-.386l4.518-6.34c1.51-3.465 1.519-3.485 2.704-6.662l.773-2.089c.272-.644.727-.66 1 .066l4.927 16.074a1.647 1.647 0 0 0 2.06 1.094 1.646 1.646 0 0 0 1.095-2.062l-5.642-18.407a2 2 0 0 0-.067-.178v-5.823c.007-.41.034-.501.248-.013.165.334.37.614.707.854l6.074 4.317a1.166 1.166 0 0 0 1.63-.276 1.167 1.167 0 0 0-.276-1.63l-6.256-4.447-2.186-4.714c-.594-1.396-1.33-2.435-2.934-2.433m16.134 15.744-3.832 2.798h9.064l-11.254 8.03 3.088 2.417 11.656-8.443.581 7.077 3.958-3.334-.865-8.545h-.228z" style="fill:#000;stroke-width:.418117" transform="translate(-146.992 -94.682)"/>`;
const _DefaultDesc = `Proceed forward`;
const _DefaultTitle = 'Proceed forward';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Bp019ProceedForward extends HTMLElement {
  static readonly tagName = 'pi-bp-019-proceed-forward';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-bp-019-proceed-forward`;
    const titleId = `pi-title-bp-019-proceed-forward`;
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
