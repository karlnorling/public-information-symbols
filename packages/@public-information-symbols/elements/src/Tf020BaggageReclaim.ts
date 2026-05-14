// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M243.01 111.889h52.917v52.917H243.01z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-243.01 -111.89)"/><path d="M263.586 122.861a2.528 2.528 0 1 0 0 5.056 2.528 2.528 0 0 0 0-5.056m-2.296 5.168c-2.89-.007-4.205 4.412-6.591 8.92-.52.902-.472 1.97.034 2.798l.527 12.703c.031.766.617 1.384 1.384 1.384h.025c.767 0 1.352-.618 1.384-1.384l.49-11.818c.361-.23.675-.548.904-.946 1.323-2.29 2.627-4.568 3.945-6.854l1.75 2.058c.395.464.856.794 1.464.922l3.99 1.2c.42.133.983-.078 1.138-.49.155-.413-.127-.97-.54-1.125l-4.167-1.795-3.001-3.702c-.754-.87-.964-1.16-1.763-1.62a1.9 1.9 0 0 0-.973-.25m13.31 9.916c-.435 0-.785.33-.785.737v.943h-3.193v8.966h9.79v-8.966h-3.192v-.943c0-.408-.35-.737-.785-.737zm.344.575h1.147c.272 0 .49.205.49.46v.645h-2.127v-.645c0-.255.218-.46.49-.46m-5.465 1.105c-.584 0-1.053.441-1.053.989v6.989c0 .547.47.988 1.053.988h.185v-8.966zm11.89 0v8.966h.186c.583 0 1.053-.44 1.053-.988v-6.99c0-.547-.47-.988-1.053-.988zm-13.032 10.12a1.994 1.994 0 0 0-1.984 1.985c0 1.088.896 1.982 1.984 1.982h16.269v-1.2h-16.269a.77.77 0 0 1-.785-.782c0-.445.34-.786.785-.786h16.269v-1.199zm1.936 1.215a.769.769 0 1 0 0 1.537.769.769 0 0 0 0-1.537m2.539 0a.769.769 0 1 0 0 1.537.769.769 0 0 0 0-1.537m2.538 0a.769.769 0 1 0 .001 1.537.769.769 0 0 0 0-1.537m2.54 0a.769.769 0 1 0 0 1.537.769.769 0 0 0 0-1.537m2.539 0a.769.769 0 1 0 0 1.537.769.769 0 0 0 0-1.537m2.539 0a.769.769 0 1 0 0 1.537.769.769 0 0 0 0-1.537" style="display:inline;fill:#000;fill-opacity:1;stroke:none;stroke-width:.821571;stroke-opacity:1" transform="translate(-243.01 -111.89)"/>`;
const _DefaultDesc = `Baggage reclaim`;
const _DefaultTitle = 'Baggage reclaim';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tf020BaggageReclaim extends HTMLElement {
  static readonly tagName = 'pi-tf-020-baggage-reclaim';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tf-020-baggage-reclaim`;
    const titleId = `pi-title-tf-020-baggage-reclaim`;
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
