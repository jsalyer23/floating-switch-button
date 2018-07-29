String.prototype.capitalize = function () { return this.charAt(0).toUpperCase() + this.slice(1); };

class FloatingSwitchButton extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.createShadowRoot();
    /**
     * List of Objects assed in with an action and display
     * @type {Array<Object>} [{ display: String, action: String }]
     */
    this._items = []; // TODO: Should not work if value passed in is not correct format
  }

  get items() { return this._items; }

  set items(val) { this.setAttribute('items', val); }

  // Array of attributes to watch on the component
  static get observedAttributes() { return ['items']; }

  // Called when an attribute changes if it is within the list of observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    // const switchButton = this.shadow.querySelector(selectors: DOMString);
    // name will always be 'items' due to observedAttributes()
    switch (name) {
      case 'items':
        if (Array.isArray(newValue) && newValue.length > 0) { this._items = newValue; }
        else { console.error(this._typeErrorDisplay(newValue)); }
        break;
      default:
        console.error(this._attrErrorDisplay(name));
    }

    this._updateRendering();
  }

  // Called when element is added to the DOM so it is rendered
  connectedCallback() { this._updateRendering(); }
  // TODO: Loop through and create inner elements based on _items attr
  _updateRendering() {
    const template = `
      <style>
        /*  Button Positioning */
        .fs-btn-container {
          display: inline-block;
          position: relative;
          font-size: 16px;
          font-family: "Arial";
        }

        /* Button Styles */
        .fs-btn {
          background: #3498db;
          min-width: 100px;
          color: #fff;
          letter-spacing: 0.025rem;
          box-sizing: border-box;
          padding: 10px 30px 10px 20px;
          position: relative;
          cursor: pointer;
          transition: background .3s ease;
        }

        .fs-btn:hover {
          background: #2980b9;
          transition: background .3s ease;
        }

        /* Item Styles */
        /* TODO: Fix these... could be more specifically named */
        .fs-btn-container ul {
          padding: 0;
          list-style: none;
          box-shadow: 0px 2px 6px 0 rgba(0,0,0,0.2);
          position: absolute;
          left: 0;
          margin-top: 2px;
          top: 100%;
          min-width: 90%;
        }
        .fs-btn-container li {
          background: #fff;
          padding: 8px 10px 8px 15px;
          box-sizing: border-box;
          cursor: pointer;
          transition: background .2s ease;
        }

        .fs-btn-container li:hover {
          background: #f6f6f6;
          transition: background .2s ease;
        }

      </style>
      <div class="fs-btn-container">
        <div class="fs-btn">+</div>
        <ul class='dropdown-selection'>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
        </ul>
      </div>
    `;
    this.shadow.innerHTML = template;
  }

  _typeErrorDisplay(val) {
    return `
      ${(typeof val).capitalize()} is not an accepted type. Please use an Array of Objects.
      i.e. [{ display: 'Bananas', action: 'https://example.com' }]
    `;
  }

  _attrErrorDisplay(attrName) {
    return `${attrName} is not registered for this component. Only "items" is currently supported.`;
  }
}

window.customElements.define('floating-switch-button', FloatingSwitchButton);
// TODO: Need to dynamically build the menu items based on the passed in attrs

// TODO: Add conditional positioning of menu items

// TODO: Allow custom styles to be passed into the shadow dom

// TODO: Add conditional positioning of menu (bottom left, top right, etc)

// TODO: Allow dynamic trigger text or image or icon

// TODO: Should maybe find a better name for these class names...not very intuitive
// but floating-switch-button-container seems way too long
