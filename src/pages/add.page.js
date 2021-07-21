const { Button, Input } = require('../elements');

class AddPage {
  constructor() {
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');

    this.submitButton = new Button('button');
        
    this.myClinics = new Button('a.link_link__3zEN3=Clinics');

    this.addButton = new Button('button.styles_btn___s1BB=Add');

    this.nameСlinics = new Input('input[name="name"]');

    this.addressСlinics = new Input('input[name="address"]');

    this.statusDdl = new Button('div.selectStyles__control', 0);
   
    this.cityDdl = new Button('div.selectStyles__control', 1);
    
    this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

    this.buttonAdd = new Button("//form[@class='styles_createForm__1HWb7']/div/button[contains(text(), 'Add')]");
    
  }

  async register({ email, password, name, address, status, city }) {

    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    
    await this.submitButton.click();

    await this.myClinics.click();
 
    await this.addButton.click();

    await this.nameСlinics.setValue(name);
    await this.addressСlinics.setValue(address);

    await browser.pause(2000); 
    await this.statusDdl.click();
    await this.ddlOption.clickByText(status);

    await browser.pause(2000); 
    await this.cityDdl.click();
    await this.ddlOption.clickByText(city); 

    await browser.pause(2000); 

    await this.buttonAdd.click();
  }
}


module.exports = { AddPage };
