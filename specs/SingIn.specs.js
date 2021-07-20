// [] Тест 1 на логін c валідними даними.
// [] Тест 2 на логін с невалідними даними.

const { expect } = require('chai');

const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();

describe('Sign In:', function () {
  beforeEach(async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });


  afterEach(async function () {
    await browser.pause(10000); 
    await browser.reloadSession();
  });

  it('should be able to sign in female-doctor', async function () {
    await app.singlPage.register({
      email: `Zlata20001Doc@gmail.com`,
      password: 'Zlata2001DP',
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

  it('should be able to sign in male-doctor', async function () {
    await app.singlPage.register({
      email: `Zlat20001Doc@gmail.com`,
      password: 'Zlata2001DP',
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


  it('should be able to sign in male-patient', async function () {
    await app.singlPage.register({
      email: `Zlat2001@gmail.com`,
      password: 'Zlat2001',
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
    await app.singlPage.register({
      email: `Zlata2001@gmail.com`,
      password: 'Zlata2001',
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

  it('fault to sign in female-doctor', async function () {
    await app.singlPage.register({
      email: ``,
      password: '',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  });  

  it('fault to sign in male-doctor', async function () {
    await app.singlPage.register({
      email: `   `,
      password: '   ',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  }); 

  it('fault to sign in male-patient', async function () {
    await app.singlPage.register({
      email: `Zlat2001@gmail@com`,
      password: 'Zlat2001',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  }); 

  it('fault to sign in male-patient', async function () {
    await app.singlPage.register({
      email: `[|]'~<!--@/*$%^&#*/()?>,*/\@gmail.com`,
      password: 'Zlat2001',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  }); 

  it('fault to sign in female-patient', async function () {
    await app.singlPage.register({
      email: `Zlata2001@gmail.com`,
      password: '[|]',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  }); 

  it('fault to sign in female-doctor', async function () {
    await app.singlPage.register({
      email: `<script>alert("Hi, I hacked this!")</script><script>alert`,
      password: 'Zlata2001DP',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  }); 

  it('fault to sign in female-doctor', async function () {
    await app.singlPage.register({
      email: `Zlata20001Doc@gmail.com`,
      password: '<script>alert("Hi, I hacked this!")</script><script>alert',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  });

  it('fault to sign in female-doctor', async function () {
    await app.singlPage.register({
      email: `Zlata20001Doc@gmail.com`,
      password: ' .Zlata2001DP',
    });

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/sign-in');
  });


});
