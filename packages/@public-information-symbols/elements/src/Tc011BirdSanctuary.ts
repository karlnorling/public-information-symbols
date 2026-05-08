// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M93.832 19.671h52.917v52.917H93.832z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-93.832 -19.67)"/><path d="M113.034 27.814a.2.2 0 0 0-.067.016c-1.376 3.342-2.053 5.64-5.125 7.021l-.03-.152c.291-.14.582-.28.86-.45-.05-2.132-1.268-3.511-2.293-4.062l-.165.015c.174.412.276.784.334 1.254.006.063-.09.08-.106.035a4.2 4.2 0 0 0-.68-1.347l-.18.06c.802 1.738 1.215 2.866 1 4.413-.685-.4-1.236-.933-1.865-1.473-.125-.142-.205-.138-.382-.138h-.5l-1.17-.267c.767.467 1.87 1.168 2.169 1.309 1.759.987 3.05 2.668 4.379 3.463.298.138.903.173 1.273.362.428.39.612.653 1.31.908.136.054.347-.003.529-.054.138-.404.119-.69 0-1.055-.565-.046-.901-.195-1.216-.48 2.104-1.907 3.705-4.279 3.415-7.65l-.115-.1c-.49.756-.923 1.478-1.605 2.083-.095.075-.187-.012-.146-.072.642-.868.994-1.795 1.12-2.92l-.205.012a66 66 0 0 1-.988 2c-.064.106-.231.036-.176-.06a5.9 5.9 0 0 0 .71-2.38c.008-.11.046-.298-.085-.29m20.938 8.197a.6.6 0 0 0-.173.04c-3.56 8.65-5.312 14.593-13.263 18.17l-.079-.394c.756-.364 1.51-.728 2.227-1.165-.128-5.518-3.279-9.085-5.932-10.512l-.427.039c.45 1.067.713 2.03.863 3.245.017.165-.232.209-.274.09-.384-1.272-.945-2.42-1.759-3.485l-.465.155c2.074 4.497 3.142 7.416 2.589 11.421-1.775-1.034-3.2-2.417-4.83-3.813-.321-.366-.528-.358-.986-.358h-1.297l-3.026-.69c1.984 1.208 4.84 3.022 5.613 3.388 4.55 2.553 7.895 6.904 11.331 8.962.774.355 2.337.447 3.296.935 1.108 1.012 1.582 1.69 3.39 2.35.35.138.897-.009 1.366-.14.358-1.046.309-1.787 0-2.73-1.46-.117-2.331-.504-3.145-1.24 5.444-4.938 9.586-11.074 8.837-19.795l-.297-.26c-1.27 1.956-2.39 3.824-4.156 5.39-.244.192-.483-.031-.376-.188 1.662-2.245 2.572-4.644 2.9-7.555l-.532.031a170 170 0 0 1-2.555 5.173c-.166.275-.6.094-.456-.154 1.005-1.885 1.676-3.943 1.835-6.156.02-.286.12-.773-.219-.754" style="fill:#000;fill-opacity:1;stroke:none;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-93.832 -19.67)"/>`;
const _DefaultDesc = `Bird sanctuary`;
const _DefaultTitle = "Bird sanctuary";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tc011BirdSanctuary extends HTMLElement {
  static readonly tagName = "pi-tc-011-bird-sanctuary";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tc-011-bird-sanctuary`;
    const titleId = `pi-title-tc-011-bird-sanctuary`;
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
