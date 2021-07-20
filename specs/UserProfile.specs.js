// [] Тест 4 на зміну спеціальності та клініки для доктора.

const { expect } = require('chai');

const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('User Profile:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.pause(10000); 
    await browser.reloadSession();
  });

  it('Change of clinic and specialty of a female doctor', async function () {
    await app.profilePage.register({
      email: `Zlata20001Doc@gmail.com`,
      password: 'Zlata2001DP',
      specialty: 'surgeon',
      clinic: 'New York-Presbyterian Hospital-Columbia and Cornell',    

    });

// проверка данных
    await browser.pause(5000);   

    const newSpecialty = await $('div.selectStyles__single-value.css-1uccc91-singleValue');
    const newSpecialtyText = await newSpecialty.getText();
    expect(newSpecialtyText).to.be.eql('Surgeon');   

    const newClinic = await $('.styles_selectFormWrapper__1UXSB .selectStyles__single-value');
    const newClinicText = await newClinic.getText();

    expect(newClinicText).to.be.eql('New York-Presbyterian Hospital-Columbia And Cornell');
  });

});
