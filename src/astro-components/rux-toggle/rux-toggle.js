import { Element as PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js";
import { html } from "/node_modules/@polymer/polymer/polymer-element.js";

/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxToggle extends PolymerElement {
  static get properties() {
    return {
      _id: {
        type: "",
        value: () => {
          return `toggle-${Math.floor(Math.random() * 1000)}`;
        }
      },
      disabled: {
        type: Boolean,
        value: false
      },
      checked: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return html`
      <style>
      :host {
        box-sizing: border-box;
      
        margin: 0 2px;
        font-weight: 600;
        font-size: 12px;
      
        outline: 0;
        display: inline-block;
      
        border: 1px solid #101923;
        height: 1.375rem;
        width: 4.375rem;
      
        position: relative;
      
        background: linear-gradient(
          to right,
          #005a8f 0%,
          #005a8f 50%,
          #000 50%,
          #000 100%
        );
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);
      
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      *,
      *::after *::before {
        box-sizing: inherit;
      }
      
      :host::before,
      :host::after {
        display: inline-block;
      
        top: 0;
        position: absolute;
        color: #fff;
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1px;
      }
      
      :host::before {
        content: "ON";
        left: 0;
      }
      
      :host::after {
        content: "OFF";
        right: 0;
      }
      
      :host input {
        display: none !important;
      }
      
      /* .rux-toggle__input {
        display: none;
      } */
      
      .rux-toggle__button {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
      
        width: 100%;
      
        cursor: pointer;
        z-index: 20;
      }
      .rux-toggle__button::after {
        box-sizing: border-box;
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
        background: #005a8f
          url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%226%22%20height%3D%226%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%22a%22%20x1%3D%2250%25%22%20x2%3D%2250%25%22%20y1%3D%220%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23111111%22%2F%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23055A9F%22%2F%3E%0A%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3Ccircle%20id%3D%22b%22%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%0A%20%20%20%20%3Cfilter%20id%3D%22c%22%20width%3D%22150%25%22%20height%3D%22150%25%22%20x%3D%22-25%25%22%20y%3D%22-25%25%22%20filterUnits%3D%22objectBoundingBox%22%3E%0A%20%20%20%20%20%20%3CfeGaussianBlur%20in%3D%22sa%22%20result%3D%22sb%22%20stdDeviation%3D%221%22%2F%3E%0A%20%20%20%20%20%20%3CfeOffset%20dy%3D%221%22%20in%3D%22sb%22%20result%3D%22so%22%2F%3E%0A%20%20%20%20%20%20%3CfeComposite%20in%3D%22so%22%20in2%3D%22sa%22%20k2%3D%22-1%22%20k3%3D%221%22%20operator%3D%22arithmetic%22%20result%3D%22si%22%2F%3E%0A%20%20%20%20%20%20%3CfeColorMatrix%20in%3D%22si%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%0A%20%20%20%20%3C%2Ffilter%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cuse%20fill%3D%22url(%23a)%22%20xlink%3Ahref%3D%22%23b%22%2F%3E%0A%20%20%20%20%3Cuse%20fill%3D%22%23000%22%20filter%3D%22url(%23c)%22%20xlink%3Ahref%3D%22%23b%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E")
          center center no-repeat;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        transition: left 0.1s ease-out;
        top: 0;
        left: 0;
        z-index: 10;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      }
      
      .rux-toggle__input:checked + .rux-toggle__button::after {
        left: 50%;
      }
      
      :host([disabled]) {
        opacity: 0.4;
      }
      .rux-toggle__input:disabled + .rux-toggle__button {
        cursor: not-allowed;
      }
</style>      
      
      <input class="rux-toggle__input" type="checkbox" id="[[_id]]" disabled$=[[disabled]] checked={{checked::change}}></input>
      <label for$="[[_id]]" class="rux-toggle__button">[[_label]]</label> 
      `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    console.log(this.checkedLabel);
    // this._label = this.checked ? this.checkedLabel : this.uncheckedLabel;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  ready() {
    super.ready();
  }

  _setLabel() {
    console.log("updating");
    this._label = this.checked ? this.checkedLabel : this.uncheckedLabel;
  }
}

customElements.define("rux-toggle", RuxToggle);
