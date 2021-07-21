// [] Тест 3 на зміну даних в профілі користувача.

const { expect } = require('chai');

const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Edit data user:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.pause(10000); 
    await browser.reloadSession();
  });

  it('сhange of data in the female-doctor profilein', async function () {
    await app.editPage.register({
      email: 'Zlata20001Doc@gmail.com',
      password: 'Zlata2001DP',
      surname: `Zlat-Zlata`,
      phone: `387770007007`,

    });


// проверка edit
    await browser.pause(2000); 

    const newSurnameFieldEd = await $('span.styles_name__2vTNE');
    const newSurnameFieldEdText = await newSurnameFieldEd.getText();
    expect(newSurnameFieldEdText).to.be.eql(`Zlata Zlat-Zlata`);                 

    const newPhoneFieldEd = await $('a.styles_text__1HrCV');
    const newPhoneFieldEdText = await newPhoneFieldEd.getText();
    expect(newPhoneFieldEdText).to.be.eql('387770007007');    


  });

});
