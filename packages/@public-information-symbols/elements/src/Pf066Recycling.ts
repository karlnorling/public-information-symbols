// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.742 49.742"`;
const _Body = `<path d="M79.904 123.56h49.742v49.742H79.904z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-79.904 -123.56)"/><path d="M100.73 135.113c-.516.055-1.107.512-1.772 1.475l-3.186 5.519 5.535 3.186 4.461-7.837.004-.006c.623-1.016 1.113-1.66 1.79-2.043.23-.13.474-.224.74-.293h-7.551zm9.45.567c-1.116 0-1.759.084-2.257.366s-.923.8-1.526 1.785v.002l-1.056 1.853 1.48 2.644-1.993 1.148 6.35.148 3.263-5.654-1.954 1.075c-1.316-2.247-.004-.035-1.377-2.324-.261-.436-.52-.783-.847-1.043zm4.927 7.834-5.514 3.183 3.236 5.604 3.124-.027c1.223.04 2.765-1.439 2.34-3.242zm-17.394 1.93h-6.528l1.908 1.155c-1.287 2.264-.028.02-1.324 2.354-.822 1.41-.728 1.708.082 3.266.76 1.463 2.122 3.726 3.525 6.026-.442-1.012-.224-2.386.515-3.545l2.878-4.837 1.991 1.153zm11.678 5.227-3.303 5.425 3.265 5.653.046-2.23c2.604-.017.032.014 2.7-.03 1.588-.027 1.844-.223 2.789-1.704.887-1.39 2.136-3.673 3.427-6.037-.656.888-1.926 1.358-3.299 1.298l-5.628-.074zm-11.761 2.507-1.539 2.72c-.646 1.039-.137 3.114 1.637 3.647h6.373v-6.366z" style="display:inline;fill:#000;stroke-width:.433431" transform="translate(-79.904 -123.56)"/>`;
const _DefaultDesc = `Recycling`;
const _DefaultTitle = 'Recycling';
const _DefaultWidth = `188`;
const _DefaultHeight = `188`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Pf066Recycling extends HTMLElement {
  static readonly tagName = 'pi-pf-066-recycling';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-pf-066-recycling`;
    const titleId = `pi-title-pf-066-recycling`;
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
