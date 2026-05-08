// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M289.776 36.336h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-289.776 -36.336)"/><path d="M300.22 46.154v9.988l20.24-9.988zm18.453 5.504a1.582 1.582 0 1 0 0 3.165 1.582 1.582 0 0 0 0-3.165m.414 3.497a1.42 1.42 0 0 0-1.423 1.423V59l-2.66 2.212a.56.56 0 0 0-.073.79l.012.014a.56.56 0 0 0 .79.073l1.931-1.605v9.843c0 .51.41.919.918.919.51 0 .919-.41.919-.919v-3.441l1.89 1.492c.4.315.975.246 1.29-.153a.917.917 0 0 0-.154-1.29l-3.026-2.39v-.262l1.008-1.6v-4.499l.78 1.073.206 3.476a.56.56 0 0 0 .593.526h.018a.56.56 0 0 0 .527-.594l-.216-3.642a.56.56 0 0 0-.134-.334l-.032-.048c-.746-.925-1.429-2.02-2.06-2.963a1.42 1.42 0 0 0-1.104-.523m7.456 11.043v2.76h-5.8v2.759h-5.707v2.479h-6.033v2.713h-6.08v2.525l.046-.093h7.475l21.805-10.117v-3.026zm5.706 3.943-19.828 9.2h19.828z" style="color:#000;fill:#000;stroke-width:.782203;-inkscape-stroke:none" transform="translate(-289.776 -36.336)"/>`;
const _DefaultDesc = `Pedestrian underpass`;
const _DefaultTitle = 'Pedestrian underpass';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Pf067PedestrianUnderpass extends HTMLElement {
  static readonly tagName = 'pi-pf-067-pedestrian-underpass';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-pf-067-pedestrian-underpass`;
    const titleId = `pi-title-pf-067-pedestrian-underpass`;
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
