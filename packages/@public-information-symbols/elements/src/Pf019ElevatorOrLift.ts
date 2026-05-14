// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M95.495 53.324h52.917v52.917H95.495z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-95.495 -53.324)"/><path d="m121.954 59.11-2.088 1.935-.017 2.189 1.357-.998.016 3.633h1.464l.016-3.633 1.357.998-.017-2.19zm-15.459 2.853v33.209h2.713V61.963Zm28.204.047v33.21h2.713V62.01Zm-22.931 5.044v1.124h20.372v-1.124zm10.027 3.641a1.413 1.413 0 1 0 0 2.826 1.413 1.413 0 0 0 0-2.826m6.88 1.699a.44.44 0 0 0-.44.438.44.44 0 0 0 .44.439.44.44 0 0 0 .438-.439.44.44 0 0 0-.438-.438m-8.524 1.499c-.48.062-.584.349-.715.667l-1.728 5.471c-.104.331.05.673.345.766s.617-.098.722-.43l1.429-4.524v3.144l-1.352 9.268a.787.787 0 0 0 .667.894l.02.003a.787.787 0 0 0 .894-.667l1.03-7.067c.006-.227.655-.236.671.007l1.03 7.06c.063.433.462.73.894.667l.02-.003a.787.787 0 0 0 .666-.894l-1.351-9.268v-3.144q.02.034.046.067l.562 1.713a.594.594 0 0 0 .93.22l1.592-1.878c.186-.23.165-.553-.047-.724l-.003-.003c-.212-.17-.532-.123-.718.107l-.967 1.103c-.213-.635-.416-1.3-.64-1.922-.133-.352-.384-.625-.703-.633h-2.676zm8.524.515a.44.44 0 0 0-.44.438.44.44 0 0 0 .44.439.44.44 0 0 0 .438-.439.44.44 0 0 0-.438-.438m0 2.014a.44.44 0 0 0-.44.438.44.44 0 0 0 .44.439.44.44 0 0 0 .438-.439.44.44 0 0 0-.438-.438m-16.907 14.964v1.124h20.372v-1.124zm9.454 2.31-.016 3.632-1.357-.998.016 2.19 2.088 1.934 2.089-1.935.016-2.189-1.356.998-.016-3.633z" style="stroke-width:.51536" transform="translate(-95.495 -53.324)"/>`;
const _DefaultDesc = `Elevator or lift`;
const _DefaultTitle = 'Elevator or lift';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Pf019ElevatorOrLift extends HTMLElement {
  static readonly tagName = 'pi-pf-019-elevator-or-lift';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-pf-019-elevator-or-lift`;
    const titleId = `pi-title-pf-019-elevator-or-lift`;
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
