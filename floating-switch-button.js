class FloatingSwitchButton extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.createShadowRoot();

  }
}
// TODO: Need to dynamically build the menu items based on the passed in attrs

// TODO: Add conditional positioning of menu items

// TODO: Allow custom styles to be passed into the shadow dom

// TODO: Add conditional positioning of menu (bottom left, top right, etc)

// TODO: Allow dynamic trigger text or image or icon

// TODO: Should maybe find a better name for these class names...not very intuitive
// but floating-switch-button-container seems way too long
const _template = `
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
