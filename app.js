import {MDCTextField} from '@material/textfield';
import {MDCSelect} from '@material/select';
import {MDCRipple} from '@material/ripple';

const shippingForm = document.querySelector('#crane-shipping-form');
shippingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert('Success!');
});

// new MDCRipple(document.querySelector('.mdc-button'));
new MDCSelect(document.querySelector('.mdc-select'));

const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFieldElements.forEach((textFieldEl) => {
  new MDCTextField(textFieldEl);
});

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

// const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
// iconButtonRipple.unbounded = true;
