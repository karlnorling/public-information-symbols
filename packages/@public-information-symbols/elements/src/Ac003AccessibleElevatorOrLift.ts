// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M78.163 70.935h52.917v52.917H78.163z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-78.163 -70.935)"/><path d="m104.62 76.656-2.087 1.934-.017 2.19 1.357-.999.016 3.633h1.464l.016-3.633 1.357.998-.017-2.189zm-16.78 2.458v33.208h2.713V79.114Zm30.85.047v33.208h2.712V79.161Zm-25.314 5.438v1.125h22.49v-1.125zm4.562 3.467a1.409 1.409 0 1 0 0 2.817 1.409 1.409 0 0 0 0-2.817m9.357 2.695c-.775 0-1.406.621-1.406 1.394 0 .765.63 1.395 1.406 1.395.78 0 1.407-.63 1.407-1.395 0-.773-.626-1.394-1.407-1.394m6.93.364a.438.438 0 1 0 0 .877.438.438 0 0 0 0-.877m-17.928.13c-.48.062-.582.348-.713.666l-1.723 5.456c-.104.33.05.671.344.764.295.093.616-.097.72-.428L96.35 93.2v3.137l-1.348 9.243a.785.785 0 0 0 .665.891l.019.003a.785.785 0 0 0 .892-.665l1.028-7.048c.007-.226.653-.235.67.006l1.026 7.042a.785.785 0 0 0 .893.665l.018-.003a.785.785 0 0 0 .665-.891l-1.347-9.243V93.2l1.425 4.513c.104.33.425.521.72.428s.448-.433.343-.764l-1.722-5.456c-.13-.367-.385-.658-.714-.666h-2.669zm17.928 1.884a.438.438 0 1 0 0 .877.438.438 0 0 0 0-.877m-6.738.732q-.088-.001-.18.008c-.649.074-1.122.576-1.06 1.126l.533 4.72c.271.755.726.916 1.406.908h3.524l1.676 3.85c.192.44.668.655 1.067.482l.073-.032c.399-.174.566-.669.374-1.11l-1.835-4.216c-.236-.46-.431-.572-.926-.593h-3.065l-.158-1.4h2.619a.547.547 0 1 0 0-1.096h-2.743l-.2-1.778c-.057-.498-.533-.86-1.105-.87m6.738 1.282a.438.438 0 1 0 0 .877.438.438 0 0 0 0-.877m-8.134 2.085a5.06 5.06 0 0 0-2.224 4.186 5.066 5.066 0 0 0 5.058 5.058 5.05 5.05 0 0 0 4.013-1.984l-.534-1.227a3.93 3.93 0 0 1-3.479 2.09 3.93 3.93 0 0 1-3.937-3.937c0-1.127.47-2.14 1.223-2.856zm-12.715 11.826v1.125h22.49v-1.125zm10.513 2.31-.016 3.633-1.357-.999.017 2.19 2.088 1.934 2.088-1.935.017-2.189-1.357.999-.016-3.634z" style="stroke-width:.51536" transform="translate(-78.163 -70.935)"/>`;
const _DefaultDesc = `Accessible elevator or lift`;
const _DefaultTitle = 'Accessible elevator or lift';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Ac003AccessibleElevatorOrLift extends HTMLElement {
  static readonly tagName = 'pi-ac-003-accessible-elevator-or-lift';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-ac-003-accessible-elevator-or-lift`;
    const titleId = `pi-title-ac-003-accessible-elevator-or-lift`;
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
