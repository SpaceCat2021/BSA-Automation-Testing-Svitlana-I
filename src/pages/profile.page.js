const { Button, Input } = require('../elements');

class ProfilePage {
  constructor() {
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');

    this.submitButton = new Button('button');
        
    this.myProfile= new Button('a.link_link__3zEN3=My Profile');

    this.specialtyDdl = new Button('div.selectStyles__control.css-6h7vey-control', 0);
    this.specialtyButton = new Button("//form[@class='styles_selectFormWrapper__vOryy']/div/button[contains(text(), 'Save')]");

    this.clinicDdl = new Button('div.selectStyles__control.css-6h7vey-control', 1);
    this.clinicButton = new Button("//form[@class='styles_selectFormWrapper__1UXSB']/div/button[contains(text(), 'Save')]");

    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    
  }

  async register({ email, password, specialty, clinic }) {

    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    
    await this.submitButton.click();

    await this.myProfile.click();

    await this.specialtyDdl.click();
    await this.ddlOption.clickByText(specialty);
    await this.specialtyButton.click();

    await browser.pause(5000); 

    await this.clinicDdl.click();
    await this.ddlOption.clickByText(clinic);    
    await this.clinicButton.click();
  }
}


module.exports = { ProfilePage };
