/* eslint-disable no-unused-vars */
import { storiesOf } from '@storybook/polymer';
import { html, render } from 'lit-html';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { RuxButton } from '../src/components/rux-button/rux-button.js';
import { RuxIcon } from '../src/components/rux-icon/rux-icon.js'; // not finished yet
import Readme from '../src/components/rux-button/README.md';
/* eslint-enable no-unused-vars */

storiesOf('Components|Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Standard Button',
    () => {

      const sizeOptions = {
        Small: 'small',
        Standard: '',
        Large: 'large'
      };
 
      const size = select('Size', sizeOptions, '');
      const disabled = boolean('Disabled', false);
      const outline = boolean('Outline', false);
      const withIcon = boolean('With Icon', false);
      const iconOnly = boolean('Icon Only', false);
      return html`
        <div style="padding: 10%; display: flex; justify-content: center;">
          <rux-button 
            .size="${size}" 
            ?disabled="${disabled}" 
            ?outline="${outline}" 
            ?icon-only="${iconOnly}"
            .icon="${withIcon ? 'utility:caution' : null}" 
            >Button</rux-button>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        markdown: Readme,
      },
    },
  )
  .add(
    'Grouped Buttons',
    () => {
    
      return html`
        <style>
        .rux-button-group rux-button:not(:last-child) {
          margin-right: 0.625rem;
        }
        .light-theme {
          --exampleContainerBackgroundColor: var(--colorWhite, rgb(255,255,255));
          --exampleContainerBorderColor: var(--colorQuaternaryLighten1, rgb(217, 222, 233));
        }
        .dark-theme {
          --exampleContainerBackgroundColor: var(--colorTertiaryDarken1, rgb(32, 50, 70));
          --exampleContainerBorderColor: var(--colorTertiary,  rgb(40, 63, 88));
        }
        .example-container {
          min-width: 20rem;
          background: var(--exampleContainerBackgroundColor, rgb(32, 50, 70));
          border: 1px solid var(--exampleContainerBorderColor,  rgb(40, 63, 88));
          padding: .625rem;
          display: flex;

        }
      </style>
        <div style="padding: 10%; display: flex; justify-content: center;">
          <div class="example-container">
            <div class="rux-button-group">
              <rux-button outline>Cancel</rux-button>
              <rux-button>Continue</rux-button>
            </div>
          </div>
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        markdown: '# Grouped Buttons\n\nCommon button groupings follow these conventions: \n\n- Cancel buttons are always presented to the left of actions such as “Submit.”\n\n- Always group together “Ok/Cancel” buttons. Do not justify them apart, but keep a reasonable margin between the buttons.\n\n- Buttons within the same group should maintain their inherent size. Do not stretch one button to match another’s width. \n\nRead the [Rux-Buttons Readme](/?path=/info/components-buttons--standard-button) for more information.',
      },
    },
  )
  .add(
    'All Button Variants',
    () => {
      return html`
        <style>
         .button-list { 
           list-style-type: none;
           margin: 0 1rem 0 0;
           padding: 0;
           display: flex;
           flex-flow: column;
         }
         .button-list li {
           margin: 0 1rem 1rem 0;
           display: flex;
         } 
         .button-list li rux-button:not(:last-child) {
          margin-right: 1rem;
        }
        </style>
        <div style="padding: 8vh 2vw; display: flex; flex-flow: row wrap; justify-content: space-evenly;">
          <ul class="button-list">

            <li>
              <rux-button size="small" icon-only icon="utility:caution">Small Icon-only Button</rux-button>
              <rux-button size="small">Small Button</rux-button>
            </li>
            <li>
              <rux-button size="small" icon="utility:caution">Small Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="small" icon-only disabled icon="utility:caution">Small Disabled Icon-only Button</rux-button>
              <rux-button size="small" disabled>Small Disabled Button</rux-button>
            </li>
            <li>
              <rux-button size="small" disabled icon="utility:caution">Small Disabled Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="small" icon-only outline icon="utility:caution">Small Outline Icon-only Button</rux-button>
              <rux-button size="small" outline>Small Outline Button</rux-button>
            </li>
            <li>
              <rux-button size="small" outline icon="utility:caution">Small Outline Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="small" icon-only disabled outline icon="utility:caution">Small Disabled Outline Icon-only Button</rux-button>
              <rux-button size="small" outline disabled>Small Disabled Outline Button</rux-button>
            </li>
            <li>
              <rux-button size="small" outline disabled icon="utility:caution">Small Disabled Outline Button with Icon</rux-button>
            </li>
          </ul>
          <ul class="button-list">
          <li>
              <rux-button icon-only icon="utility:caution">Standard Icon-only Button</rux-button>
              <rux-button>Standard Button</rux-button>
            </li>
            <li>
              <rux-button icon="utility:caution">Standard Button with Icon</rux-button>
            </li>
            <li>
              <rux-button icon-only disabled icon="utility:caution">Standard Disabled Icon-only Button</rux-button>
              <rux-button disabled>Standard Disabled Button</rux-button>
            </li>
            <li>
              <rux-button disabled icon="utility:caution">Standard Disabled Button with Icon</rux-button>
            </li>
            <li>
              <rux-button icon-only outline icon="utility:caution">Standard Outline Icon-only Button</rux-button>
              <rux-button outline>Standard Outline Button</rux-button>
            </li>
            <li>
              <rux-button outline icon="utility:caution">Standard Outline Button with Icon</rux-button>
            </li>
            <li>
              <rux-button icon-only disabled outline icon="utility:caution">Standard Disabled Outline Icon-only Button</rux-button>
              <rux-button outline disabled>Standard Disabled Outline Button</rux-button>
            </li>
            <li>
              <rux-button outline disabled icon="utility:caution">Standard Disabled Outline Button with Icon</rux-button>
            </li>
          </ul>
          <ul class="button-list">
          <li>
              <rux-button size="large" icon-only icon="utility:caution">Large Icon-only Button</rux-button>
              <rux-button size="large">Large Button</rux-button>
            </li>
            <li>
              <rux-button size="large" icon="utility:caution">Large Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="large" icon-only disabled icon="utility:caution">Large Disabled Icon-only Button</rux-button>
              <rux-button size="large" disabled>Large Disabled Button</rux-button>
            </li>
            <li>
              <rux-button size="large" disabled icon="utility:caution">Large Disabled Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="large" icon-only outline icon="utility:caution">Large Outline Icon-only Button</rux-button>
              <rux-button size="large" outline>Large Outline Button</rux-button>
            </li>
            <li>
              <rux-button size="large" outline icon="utility:caution">Large Outline Button with Icon</rux-button>
            </li>
            <li>
              <rux-button size="large" icon-only disabled outline icon="utility:caution">Large Disabled Outline Icon-only Button</rux-button>
              <rux-button size="large" outline disabled>Large Disabled Outline Button</rux-button>
            </li>
            <li>
              <rux-button size="large" outline disabled icon="utility:caution">Large Disabled Outline Button with Icon</rux-button>
            </li>
          </ul>
          <!-- <ul class="button-list">
            <li>
              <input class="rux-button" type="submit" value="input type=submit">
            </li>
            <li>
              <input class="rux-button" type="button" value="input type=button">
            </li>
            <li>
              <input class="rux-button" type="reset" value="input type=reset">
            </li>
            <li>
              <input class="rux-button" type="submit" value="input disabled" disabled>
            </li>
          </ul> -->
        </div>
      `;
    },
    {
      exports: {
        render,
        html,
      },
      notes: {
        markdown: '_Readme content copied from [Rux-Buttons](/?path=/info/components-buttons--standard-button) below for your convenience._\n\n' + Readme,
      },
    },
  );