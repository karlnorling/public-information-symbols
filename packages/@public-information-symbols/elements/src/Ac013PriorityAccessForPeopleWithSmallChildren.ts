// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

const _Attrs = `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.917 52.917"`;
const _Body = `<path d="M157.964 112.141h52.917v52.917h-52.917z" style="display:inline;fill:#fff;fill-opacity:1;stroke:none;stroke-width:2.01819" transform="translate(-157.964 -112.141)"/><path d="M185.19 119.259a2.82 2.82 0 0 0-2.822 2.82 2.82 2.82 0 0 0 2.821 2.821 2.82 2.82 0 0 0 2.821-2.82 2.82 2.82 0 0 0-2.82-2.821m-3.369 6.656c-1.302 0-2.212.986-2.349 1.727 0 .019-1.45 5.573-1.45 5.573-.172.701-.137 1.263.253 1.746l6.395 3.648-.457.8-2.843-1.621c-.013 6.62-.129 13.343-.085 18.603 0 .859.73 1.55 1.634 1.55.905 0 1.632-.691 1.632-1.55v-13.756c.008-.532 1.315-.478 1.317 0v13.756c0 .859.729 1.55 1.634 1.55s1.632-.691 1.632-1.55c.276-6.47-.026-13.015-.062-19.375l.994-.564c.509-.196.734-.419.756-.937l.1-7.3c.021-.93-1.152-2.274-2.55-2.3zm.788 1.25a1.863 1.863 0 1 1 0 3.725 1.863 1.863 0 0 1 0-3.725m3.337 2.948c.892.005 1.106 1.212.526 1.577l-1.75.95.45 1.625.875-.425c.27-.135.4-.212.7-.1l1.5.65c.947.341.5 1.817-.625 1.55l-.925-.4c-.179-.09-.172-.11-.325 0-.533.456-.77.559-1.38.167l-2.804-1.65c-.76-.403-.736-1.938.5-2.494l2.834-1.373a1.3 1.3 0 0 1 .424-.077" style="display:inline;fill:#000;stroke-width:3.48351;stroke-linecap:round" transform="translate(-157.964 -112.141)"/>`;
const _DefaultDesc = `Priority access for people with small children`;
const _DefaultTitle = 'Priority access for people with small children';
const _DefaultWidth = `200.001`;
const _DefaultHeight = `200.001`;
const _h = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');

export class Ac013PriorityAccessForPeopleWithSmallChildren extends HTMLElement {
  static readonly tagName = 'pi-ac-013-priority-access-for-people-with-small-children';
  static readonly observedAttributes = ['title', 'description', 'width', 'height'];

  connectedCallback(): void { this._render(); }
  attributeChangedCallback(): void { this._render(); }

  private _render(): void {
    const descId = `pi-desc-ac-013-priority-access-for-people-with-small-children`;
    const titleId = `pi-title-ac-013-priority-access-for-people-with-small-children`;
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
