// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M144.387 120.627h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-144.387 -120.627)"/><path d="m179.267 128.052-2.894.012c-.78-.023-1.123.146-1.657 1.062l-1.238 2.232 2.54 1.498 2.138-3.633c.41-.686.54-.812 1.11-1.171m.468.335c-.232-.008-.474.071-.721.26-.447.416-.979 1.329-1.02 1.574l.72 1.256-.957.453 2.958.042 1.494-2.615-.914.649-.249-.52c-.34-.638-.8-1.081-1.31-1.1m-18.776 2.64a.3.3 0 1 0 0 .6c.198.007.17-.038.111.224l-1.368 6.084-.292 4.763-1.254 2.72c-.353.615-.377 1.033-.38 1.671l-.084 16.65c.434 1.737 1.29 2.105 2.713 2.17v.007h.275c.433.009.914 0 1.447-.004h1.137c.533.005 1.014.013 1.447.004h.276v-.007c1.422-.065 2.278-.433 2.712-2.17l-.084-16.65c-.003-.638-.027-1.056-.38-1.67l-1.254-2.72-.291-4.764-1.378-6.127c-.044-.192-.01-.186.12-.18a.3.3 0 1 0 0-.6zm21.62 1.088-2.58 1.485 1.554 2.561 1.629-.012c.363-.017 1.006-.56.876-1.4zm-8.252.862-2.916.047.75.388-.267.56c-.63.957-.846 1.154-.342 2.122.359.69.939 1.675 1.617 2.735-.208-.477-.07-1.035.287-1.566l1.385-2.33.852.527zm5.482 2.509-1.393 2.602 1.393 2.533.006-1.05h.641c1.338.082 1.481.032 2.148-1.025a31 31 0 0 0 1.497-2.596c-.315.414-1.033.518-1.529.575l-2.74.006zm-5.48 1.06-.607.927c-.286.498-.236 1.822.6 2.073l3.074-.003-.056-2.975zm-10.043 6.633s.993.623 1.533 1.756c.417.873.695 2.923.695 2.923l-1.192-.053s-.054-1.522-.236-2.24c-.21-.831-.8-2.386-.8-2.386m2.266 18.072.05 2.575c-.79.83-1.587.991-2.675.925 1.477-.8 1.942-2.043 2.625-3.5" style="display:inline;fill:#000;stroke-width:.203109" transform="translate(-144.387 -120.627)"/>`;
const _DefaultDesc = `Recycling – glass`;
const _DefaultTitle = "Recycling – glass";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Pf065RecyclingGlass extends HTMLElement {
  static readonly tagName = "pi-pf-065-recycling-glass";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-pf-065-recycling-glass`;
    const titleId = `pi-title-pf-065-recycling-glass`;
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
