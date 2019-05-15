import { LitElement, html } from 'lit-element';
// import style from './rux-clock.css';
import RuxUtils from '../rux-utils/datetime.js';

/** Class representing a single Clock instance. */
/**
 * @polymer
 * @extends HTMLElement
 */
export class RuxClock extends LitElement {
  static get properties() {
    return {
      aos: {
        type: Date,
      },
      los: {
        type: Date,
      },
      timezone: {
        type: String,
        reflect: true,
      },
      locale: {
        type: String,
      },
      hideTimezone: {
        type: Boolean,
        attribute: 'hide-timezone',
      },
      hideDate: {
        type: Boolean,
        attribute: 'hide-date',
      },
      compact: {
        type: Boolean,
      },
      time: {
        type: String,
      },
      dayOfYear: {
        type: String,
      },
    };
  }
  get passPeriodOptions() {
    return {
      hour12: false,
    };
  }
  get clockOptions() {
    if (!this.hideTimezone) {
      return {
        hour12: false,
        timeZone: this.timezone,
        timeZoneName: 'short',
      };
    }
    return {
      hour12: false,
    };
  }

  constructor() {
    super();

    this.timezone = 'UTC';
    this.locale = 'us-EN';
    this.hideTimezone = false;
    this.hideDate = false;


    this.updateTime();
  }

  /*
    Lifecycle hooks should occur after the constructor and before custom methods
  */
  connectedCallback() {
    super.connectedCallback();

    this._timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._timer);
  }

  /*
    Public functions should occur after lifecycle hooks
  */

  /*
    Private functions should occur after public functions
  */
  updateTime() {
    this.time = RuxUtils.formatTime(new Date(), this.locale, this.clockOptions);
    this.dayOfYear = RuxUtils.dayOfYear();
  }

  /*
    Template and styles blocks should appear as the very last code blocks
  */
  render() {
    return html`
      <style>
        :host {
          display: flex;
          margin: 0 1rem;

          color: var(--clockTextColor, rgb(255, 255, 255));

          font-size: 1.15rem;

          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .rux-clock__segment {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rux-clock__segment__value {
          display: flex;
          align-items: center;
          font-family: var(--fontFamilyMono, 'Roboto Mono', monospace);
          font-weight: 700;

          border: 1px solid var(--clockBorderColor, rgb(40, 63, 88));

          background-color: var(--clockBackgroundColor, rgb(20, 32, 44));
          margin-bottom: 0.25rem;

          white-space: nowrap;
          overflow-y: hidden;
          text-overflow: ellipsis;
        }

        .rux-clock__segment__value {
          font-size: 1.75rem;
          height: 2.75rem;
          padding: 0 0.75rem;
        }

        :host([compact]) .rux-clock__segment__value {
          height: 2.75rem;
          padding: 0 0.75rem;
          font-size: 1.15rem;
          font-weight: 500;
        }

        .rux-clock__segment__label {
          font-size: 0.875rem;
        }

        .rux-clock__day-of-the-year .rux-clock__segment__value {
          border-right: none;
        }

        .rux-clock__segment--secondary .rux-clock__segment__value {
          font-weight: 100;
        }

        .rux-clock__aos {
          margin-left: 1em;
        }

        .rux-clock__los {
          margin-left: 0.5em;
        }
      </style>

      ${!this.hideDate ?
        html`
          <div class="rux-clock__segment rux-clock__day-of-the-year">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__day-of-year-label">
              ${this.dayOfYear}
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__day-of-year-label">Date</div>
          </div>
        ` : ''}

      <div class="rux-clock__segment rux-clock__time">
        <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label">
          ${this.time}
        </div>
        <div class="rux-clock__segment__label" id="rux-clock__time-label">
          Time
        </div>
      </div>

      ${this.aos ?
        html`
          <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__aos">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--aos">
              ${RuxUtils.formatTime(this.aos, this.locale, this.passPeriodOptions)}
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label--aos">
              AOS
            </div>
          </div>
        `: ''}
      ${this.los ?
        html`
          <div class="rux-clock__segment rux-clock__segment--secondary rux-clock__los">
            <div class="rux-clock__segment__value" aria-labelledby="rux-clock__time-label--los">
              ${RuxUtils.formatTime(this.los, this.locale, this.passPeriodOptions)}
            </div>
            <div class="rux-clock__segment__label" id="rux-clock__time-label--los">
              LOS
            </div>
          </div>
        ` : ''}
    `;
  }

  /* uses the lit-scss-loader to import external CSS */
  /* static get styles() {
    return css`
      ${style}
    `;
  } */
}
customElements.define('rux-clock', RuxClock);
