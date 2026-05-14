// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 52.917 52.917"`;
const _Body = `<g style="display:inline"><path d="M127.525 72.775h52.917v52.917h-52.917z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-127.525 -72.775)"/><path d="M164.598 81.237a2.74 2.74 0 0 0-2.745 2.745v13.662a1 1 0 0 1 .13-.007h8.07c.779 0 1.406.627 1.406 1.406v.033c0 .779-.627 1.406-1.406 1.406h-1.618l-3.673 3.969h-2.909v10.034a2.74 2.74 0 0 0 2.745 2.745h9.817V81.237Zm-31.045 3.89v15.176l.219.18c3.385 2.78 6.631 6.938 9.724 9.46l.1.08.12.034c1.407.385 3.29.99 5.064 1.36s3.453.605 4.632-.167l.012-.01.012-.008c1.696-1.233 3.038-3.245 5.191-5.873l.803-.98h-7.082l-.156.113c-1.177.84-2.074.936-2.825.699s-1.414-.876-1.912-1.719a7.1 7.1 0 0 1-.908-2.754c-.083-.794.086-1.343.244-1.605.218.058.55.176.985.34.813.307 1.954.753 3.38 1.192l-2.025 2.341h14.874l3.648-4.07h-7.156v-4.582h-3.882l-1.192 1.378c-3.665-1.344-6.941-2.147-10.284-3.956-1.84-1.52-3.885-3.334-5.976-4.618l-.002-.002c-1.64-.994-3.27-1.318-4.838-1.783zm1.199 1.658c1.319.37 2.592.654 3.785 1.377 1.98 1.215 4.027 3.022 5.906 4.572l.045.037.052.028c3.556 1.93 6.957 2.738 10.61 4.09l.009.004.008.002c1.691.572 2.307 1.815 2.18 2.595-.064.39-.27.692-.725.893-.457.2-1.204.27-2.27-.018l-2.367-.723-.004-.002c-1.602-.467-2.86-.962-3.781-1.31-.46-.174-.833-.313-1.157-.395a1.8 1.8 0 0 0-.486-.068.83.83 0 0 0-.623.256c-.614.67-.692 1.658-.58 2.72a8.2 8.2 0 0 0 1.069 3.239c.598 1.013 1.45 1.893 2.584 2.252 1.066.337 2.335.097 3.64-.754h4.264c-1.68 2.102-2.949 3.777-4.164 4.666-.554.357-2.042.346-3.72-.004-1.635-.342-3.416-.908-4.846-1.305-2.826-2.327-6-6.295-9.428-9.172z" style="display:inline;fill:#181818;fill-opacity:1;stroke-width:1.2" transform="translate(-127.525 -72.775)"/></g>`;
const _DefaultDesc = `Ticket validation`;
const _DefaultTitle = 'Ticket validation';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Pf011TicketValidation extends HTMLElement {
  static readonly tagName = 'pi-pf-011-ticket-validation';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-pf-011-ticket-validation`;
    const titleId = `pi-title-pf-011-ticket-validation`;
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
