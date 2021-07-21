// [] Тест 5 на додавання нової клініки. patient

const { expect } = require('chai');

const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Add a clinic:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.pause(10000); 
    await browser.reloadSession();
  });

  it('adding a clinic the female-doctor profilein', async function () {
    await app.addPage.register({
      email: 'john_admin1@admin.com',
      password: 'Pa55word',
      name: `Mount Sinai Hospital NY ${rundomNumber()}`,
      address: `${rundomNumber()} Manhattan`,
      status: 'private',
      city: 'New York, NY',    

    });


// проверка add
  const checkClinic = await $$('.styles_cardContainer__qjzSj');   // for (i = 0; i < array.length - 1; i++) массив (div.styles_cardContainer__qjzSj)
  const newIndexClinic = checkClinic.length - 1;

  const newNameСlinics = await checkClinic[newIndexClinic].$('.styles_title__3xRcc');
  const newNameСlinicsText = await newNameСlinics.getText();
  expect(newNameСlinicsText).to.be.eql(`Mount Sinai Hospital NY ${rundomNumber()}`);    // (`span[contains(text(), 'Mount Sinai Hospital NY')]`)

  const newAddressСlinics = await checkClinic[newIndexClinic].$('.styles_text__3aW2M');
  const newAddressСlinicsText = await newAddressСlinics.getText();
  expect(newAddressСlinicsText).to.be.eql(`${rundomNumber()} Manhattan`);                 // (`span[contains(text(), 'Manhattan')]`)

  const newStatusСlinics = await checkClinic[newIndexClinic].$('.styles_label__BkQx3');
  const newStatusСlinicsText = await newStatusСlinics.getText();
  expect(newStatusСlinicsText).to.be.eql('Private');

 
  });

});
