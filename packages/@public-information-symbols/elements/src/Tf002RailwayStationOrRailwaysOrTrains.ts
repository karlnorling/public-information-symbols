// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M93.832 136.412h52.917v52.917H93.832z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-93.832 -136.412)"/><path d="M114.369 142.495c-2.599 0-4.193 1.795-4.22 3.83-5.043.461-7.304 2.927-7.3 4.4v19.901c.616.75 1.556 1.826 3 1.6.235 1.309.732 2.23 1.14 3.45-2.42.61-4.84 1.723-7.463 3.965v3.606h3.606c4.657-4.742 8.863-6.88 17.882-6.738-1.954.758-3.799 1.65-5.364 3.762v2.9h4.7c3.352-6.534 8.305-7.543 20.7-7.2l.005-.613h-.866v-1.663h.525v-6.242c-10.334-1.796-11.788-3.726-14.977-17.194l-.002.008c-.4-1.479-2.684-3.526-7.235-3.942-.027-2.036-1.533-3.83-4.131-3.83m-.011 1.33a2.829 2.829 0 1 1 0 5.656 2.829 2.829 0 0 1 0-5.657m-9.094 7.064h18.187c.097 0 .176.078.176.175v6.374a.175.175 0 0 1-.176.176h-18.187a.175.175 0 0 1-.175-.176v-6.374c0-.097.078-.175.175-.175m22.01 10.873c.122-.006.26.07.394.24l1.396 1.794c.277.355.402.818.424 1.251v1.848c0 .409-.461.592-.765.322l-1.397-1.268c-.277-.27-.4-.516-.389-.92v-2.868c.053-.25.181-.391.337-.399m-19.404.643a3.111 3.111 0 1 1 0 6.222 3.111 3.111 0 0 1 0-6.222m12.976 0a3.111 3.111 0 1 1 0 6.222 3.111 3.111 0 0 1 0-6.222m9.712 3.026a.8.8 0 0 1 .368.104l1.329.81c.23.21.456.448.458.781v1.844c-.002.213-.378.257-.688.104l-1.412-.727c-.206-.148-.288-.283-.288-.558v-2.116c.001-.164.097-.237.233-.242m3.362 1.753q.099-.003.245.065l1.498.57c.277.125.485.224.484.564v1.58c-.007.199-.17.359-.46.3l-1.652-.445c-.234-.095-.383-.203-.38-.479v-1.65c-.009-.278.05-.503.265-.505m3.477 1.04q.09-.003.195.02l1.605.24c.295.074.485.223.47.561v1.488c-.003.204-.167.316-.457.303l-1.801-.129c-.268-.036-.462-.29-.462-.595v-1.423c0-.31.185-.462.45-.466" style="display:inline;fill:#000;stroke-width:.7" transform="translate(-93.832 -136.412)"/>`;
const _DefaultDesc = `Railway station, or Railways, or Trains`;
const _DefaultTitle = "Railway station, or Railways, or Trains";
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");

export class Tf002RailwayStationOrRailwaysOrTrains extends HTMLElement {
  static readonly tagName = "pi-tf-002-railway-station-or-railways-or-trains";
  static readonly observedAttributes = ["title", "description", "width", "height"];

  connectedCallback(): void {
    this._render();
  }
  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const descId = `pi-desc-tf-002-railway-station-or-railways-or-trains`;
    const titleId = `pi-title-tf-002-railway-station-or-railways-or-trains`;
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
