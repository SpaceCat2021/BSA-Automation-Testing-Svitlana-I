const { Button, Input } = require('../elements');

class EditPage {
  constructor() {
    this.emailField = new Input('input[name="email"]');
    this.passwordField = new Input('input[name="password"]');

    this.submitButton = new Button('button');
        
    this.myProfile= new Button('a.link_link__3zEN3=My Profile');

    this.buttonEd = new Button('button.styles_edit__ftuHl');

    this.surnameFieldEd = new Input('input[name="surname"]');

    this.phoneFieldEd  = new Input('input[name="phone"]');

    this.buttonEdit = new Button("//form[@class='styles_editForm__1rOFS']/div/button[contains(text(), 'Edit')]");
    
  }

  async register({ email, password, surname, phone }) {

    await this.emailField.setValue(email);
    await this.passwordField.setValue(password);
    
    await this.submitButton.click();

    await this.myProfile.click();
 
    await this.buttonEd.click();

    await this.surnameFieldEd.setValue(surname);
    await this.phoneFieldEd.setValue(phone);

    await browser.pause(2000); 

    await this.buttonEdit.click();
  }
}


module.exports = { EditPage };
