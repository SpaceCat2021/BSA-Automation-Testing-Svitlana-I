const { Button, Input } = require('../elements');

class SinglPage {
  constructor() {
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');

    this.genderDdl = new Button('div.selectStyles__control', 0);
    this.statusDdl = new Button('div.selectStyles__control', 1);

    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    this.submitButton = new Button('button');
  }

  async register({ email, password, }) {
    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);

    await this.submitButton.click();
  }
}

module.exports = { SinglPage };
