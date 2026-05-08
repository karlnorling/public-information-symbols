// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M187.154 138.542h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-187.154 -138.542)"/><path d="m226.997 146.1-3.262 5.08h1.506l-2.54 3.889h1.38l-2.604 3.952h4.234v3.481h2.571v-3.481h4.234l-2.603-3.952h1.38l-2.54-3.89h1.505zm-19.795 5.5a2.484 2.484 0 0 0-2.485 2.485 2.484 2.484 0 0 0 2.485 2.484 2.484 2.484 0 0 0 2.483-2.484 2.484 2.484 0 0 0-2.483-2.484m-2.02 5.823c-.464-.002-.825.15-1.349.416l-5.361 2.94c-.278.149-.433.265-.59.57l-2.923 5.152a1.274 1.274 0 0 0 .493 1.738 1.274 1.274 0 0 0 1.738-.493l2.755-4.939 1.773-.896-1.702 5.738c-.477 2.31-.784 4.393-1.244 6.665-.044.42-.178.698-.383 1.066l-3.452 6.178a1.52 1.52 0 0 0 .499 2.097 1.52 1.52 0 0 0 2.096-.499l3.705-6.037c.37-.602.635-1.215.858-1.891l1.109-3.49c.037-.213.267-.227.421-.007l2.274 3.32.612 7.449a1.52 1.52 0 0 0 1.643 1.394c.842-.069 1.449-.801 1.394-1.644l-.471-7.296c-.046-.717.016-1.46-.434-2.074l-2.343-4.301.75-2.637.054.265.032.327c.021.254.088.422.217.628l2.791 4.475c.357.571 1.066.797 1.655.47q.104-.06.192-.134a1.1 1.1 0 0 0 .428-.425l1.82-3.265.892-.266c.211-.059.268-.012.227.19a204 204 0 0 1-1.642 8.512l-2.184 4.79c-.316.633-.125 1.393.493 1.738a1.275 1.275 0 0 0 1.738-.494l2.29-4.105c.237-.425.459-.86.6-1.327l.525-2.135c.075-.426.22-.289.416-.011l1.731 2.465 1.148 4.813c.15.692.827 1.128 1.518.978s1.103-.822.979-1.519l-.8-4.475c-.101-.56-.197-.978-.508-1.518l-1.931-3.662.555-3.492.996 1.004c.277.266.47.366.869.396l4.254.446a1.01 1.01 0 0 0 1.115-.9 1.01 1.01 0 0 0-.899-1.114l-3.936-.42c-1.005-.962-2.64-3.483-4.044-3.78-.676-.08-1.051.039-1.615.254-1.335.51-2.586 1.072-3.954 1.695-.238.097-.364.156-.487.413l-1.228 2.2-1.907-3.126c-1.19-2.534-.073-7.196-2.88-8.107-.607-.206-1.028-.301-1.389-.303zm13.8 2.206a2.18 2.18 0 1 0 0 4.36 2.18 2.18 0 0 0 0-4.36" style="fill:#1f0000;stroke-width:1.2;stroke-linecap:round" transform="translate(-187.154 -138.542)"/>`;
const _DefaultDesc = `Natural area with public access`;
const _DefaultTitle = 'Natural area with public access';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tc008NaturalAreaWithPublicAccess extends HTMLElement {
  static readonly tagName = 'pi-tc-008-natural-area-with-public-access';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tc-008-natural-area-with-public-access`;
    const titleId = `pi-title-tc-008-natural-area-with-public-access`;
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
