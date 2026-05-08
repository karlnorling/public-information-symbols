// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M28.541 79.638h52.917v52.917H28.541z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-28.541 -79.638)"/><path d="M63.1 85.72a.264.264 0 0 0-.232.392l1.117 2.046-4.427 8.117h-1.615v1.302H70.63v-1.302h-1.614l-4.428-8.117 1.116-2.047a.264.264 0 1 0-.464-.254l-.953 1.748-.953-1.748a.26.26 0 0 0-.233-.138m1.187 7.211 2.024 3.344H62.42zm-13.893 3.492c-2.332 2.788-3.57 4.079-4.48 9.048-.518-1.037-1.02-2.039-1.94-2.75.297 2.326.723 4.22.077 7.053-.901-1.018-1.107-1.847-2.861-2.085.378.743 1.207 2.516 1.288 3.56.441 4.887 1.896 7.414 5.274 7.937-1.148-.486-1.682-1.687-1.864-3.708-.04-.514-.447-1.387-.633-1.753.862.117.963.526 1.405 1.027.317-1.395.108-2.328-.038-3.473.452.35.699.843.954 1.354.447-2.447 1.055-3.083 2.2-4.456.223 1.132.964 1.975 1.483 2.949.44.818.562 1.62.544 2.556.403-.248.527-.593.72-1.006.486 1.297.17 2.557-.24 3.627.416-.18.563-.462.75-.852.403 1.895-.915 3.19-2.345 3.72 3.404-.6 7.3-3.443 6.336-7.978-.382.793-.682 1.362-1.53 1.73.838-2.174 1.48-4.73.488-7.363-.39.839-.643 1.537-1.463 2.04.036-1.898-.214-3.527-1.11-5.189-1.055-1.976-2.562-3.69-3.015-5.988m-4.431 23.638c-.408 0-6.593 1.98-6.593 1.98s.562 2.201.633 2.13c.072-.072 6.113-1.762 6.113-1.762l-2.658 2.752 1.799 1.313 3.95-4.235 3.95 4.235 1.8-1.313-2.66-2.752s6.042 1.69 6.114 1.762c.071.071.633-2.13.633-2.13s-6.184-1.98-6.592-1.98H48.83z" style="display:inline;fill:#1f0000;fill-opacity:1;stroke:none;stroke-width:.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" transform="translate(-28.541 -79.638)"/>`;
const _DefaultDesc = `Location for Campfires`;
const _DefaultTitle = 'Location for Campfires';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Tc010LocationForCampfires extends HTMLElement {
  static readonly tagName = 'pi-tc-010-location-for-campfires';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-tc-010-location-for-campfires`;
    const titleId = `pi-title-tc-010-location-for-campfires`;
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
