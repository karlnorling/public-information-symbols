// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M100.574 77.154h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-100.574 -77.154)"/><path d="M134.78 89.891a1.796 1.796 0 0 0-1.795 1.796 1.796 1.796 0 0 0 1.795 1.795 1.796 1.796 0 0 0 1.796-1.795 1.796 1.796 0 0 0-1.796-1.796m2.596 3.224c-.52-.01-1.536.444-1.67 1.147l-1.218 6.435a.614.614 0 1 0 1.209.228l.848-4.485 3.22 2.556c.166.102.089.292-.047.412l-2.525 1.955c-.316.365-.351.754-.32 1.152l.009.705-8.125 3.522v-.828c0-.86-.693-1.553-1.553-1.553s-1.552.692-1.552 1.553v2.174l-8.086 3.505c.037-.679-.27-1.092-.906-.998l-3.381.568 1.783-3.953q.011-.025.02-.051l3.175 2.554a.696.696 0 0 0 .98-.107.696.696 0 0 0-.106-.98l-4.758-3.828c-1.162-.71-2.085-.378-2.695.886l-2.27 5.031a1.85 1.85 0 0 0 .928 2.456c.7.415 2.64.015 4.337-.324l-7.098 3.077c-.175.076-.237.32-.138.548l.185.426c.098.228.318.35.493.274l7.67-3.325-.334 2.678a.696.696 0 0 0 .605.779l.09.01a.696.696 0 0 0 .779-.605l.443-3.548 8.284-3.59v7.764h3.105v-9.111l8.143-3.53.036 2.996a.74.74 0 0 0 .737.737.735.735 0 0 0 .737-.737v-3.65l8.08-3.503c.175-.076.236-.32.138-.547l-.185-.427c-.074-.17-.216-.282-.357-.295a.3.3 0 0 0-.137.022l-5.256 2.278 2.444-1.837c.587-.466.708-2.126-.005-2.697l-4.628-3.536a1.76 1.76 0 0 0-1.128-.383m-23.076 7.377a1.796 1.796 0 0 0-1.796 1.796 1.796 1.796 0 0 0 1.796 1.795 1.796 1.796 0 0 0 1.795-1.795 1.796 1.796 0 0 0-1.795-1.796" style="fill:#1f0000;stroke-width:1.2;stroke-linecap:round" transform="translate(-100.574 -77.154)"/>`;
const _DefaultDesc = `Play area`;
const _DefaultTitle = 'Play area';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tc005PlayArea extends HTMLElement {
  static readonly tagName = 'pi-tc-005-play-area';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tc-005-play-area`;
    const titleId = `pi-title-tc-005-play-area`;
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
