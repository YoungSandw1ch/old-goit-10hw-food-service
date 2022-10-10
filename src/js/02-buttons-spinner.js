const SPINNER_TEXT = 'Ищем';
const WITHOUT_SPINNER_TEXT = 'Искать';

export default class SpinnerBtn {
  constructor(btnSelector) {
    this.refs = this.getRefs(btnSelector);
  }

  getRefs(btnSelector) {
    const refs = {};
    refs.btn = document.querySelector(btnSelector);
    refs.spinner = refs.btn.querySelector('.spinner');
    refs.text = refs.btn.querySelector('.label');

    return refs;
  }

  disable() {
    this.refs.spinner.classList.remove('is-hidden');
    this.refs.text.textContent = SPINNER_TEXT;
    this.refs.btn.disabled = true;
  }

  enable() {
    this.refs.spinner.classList.add('is-hidden');
    this.refs.text.textContent = WITHOUT_SPINNER_TEXT;
    this.refs.btn.disabled = false;
  }

  showSpinner() {
    this.refs.spinner.classList.remove('is-hidden');
  }

  hideSpinner() {
    this.refs.spinner.classList.add('is-hidden');
  }

  btnEnable() {
    this.refs.btn.disabled = false;
  }

  btnDisable() {
    this.refs.btn.disabled = true;
  }

  btnHide() {
    this.refs.btn.classList.add('is-hidden');
  }

  btnShow() {
    this.refs.btn.classList.remove('is-hidden');
  }

  changeText(text) {
    this.refs.text.textContent = text;
  }
}
