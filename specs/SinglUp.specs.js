// [] Тест 1 на регистрацию и логин ДЗ-2.

const { expect } = require('chai');

const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('SingUp_Registration:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');
  });


  afterEach(async function () {
    await browser.pause(10000); 
    await browser.reloadSession();
  });

  it('should be able to register female-doctor', async function () {
    await app.authPage.register({
      name: `Zlata`,
      surname: 'Zlat',
      email: `Zlata${rundomNumber()}@gmail.com`,
      password: 'Zlata2001DP',
      phone: '387770007777',
      birthDate: '01/01/2001',
      status: 'doctor',
      gender: 'female',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

  });

  it('should be able to register male-doctor', async function () {
    await app.authPage.register({
      name: `Zlat`,
      surname: 'Zlat',
      email: `Zlata${rundomNumber()}@gmail.com`,
      password: 'Zlata2001DP',
      phone: '389990009999',
      birthDate: '01/01/2001',
      status: 'doctor',
      gender: 'male',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

  });


  it('should be able to register male-patient', async function () {
    await app.authPage.register({
      name: `Zlat`,
      surname: 'Zlat',
      email: `Zlata${rundomNumber()}@gmail.com`,
      password: 'Zlata2001DP',
      phone: '383330003333',
      birthDate: '10/05/2005',
      status: 'patient',
      gender: 'male',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });


  it('should be able to register female-patient', async function () {
    await app.authPage.register({
      name: `Zlata`,
      surname: 'Zlat',
      email: `Zlata${rundomNumber()}@gmail.com`,
      password: 'Zlata2001DP',
      phone: '85550005555',
      birthDate: '20/08/2008',
      status: 'patient',
      gender: 'female',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
  });  


});
