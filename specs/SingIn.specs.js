// [] Тест 1 на логін c валідними даними.
// [] Тест 2 на логін с невалідними даними.

const { expect } = require('chai');

const rundomNumber = () => Math.floor(Math.random() * 10000).toString();

describe('SignIn:', function () {

  it('should be able to sign in female-doctor', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlata20001Doc@gmail.com`);   // Zlata20001Doc@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Zlata2001DP');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/doctors');

    await browser.pause(5000);     // выход из системы 

    const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO');  // меню-выподающее  button выход
    const logoutButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3');  // кнопка logout выход
   
    await menuButton.waitForDisplayed({ timeout: 5000 });
    await menuButton.click(); 

    await logoutButton.waitForDisplayed({ timeout: 5000 });
    await logoutButton.click();

    await browser.waitUntil(
      async function () {
        const urlIn = await browser.getUrl();
        return urlIn === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlIn = await browser.getUrl();
    expect(urlIn).to.be.eql('http://46.101.234.121/sign-in');    

    await browser.reloadSession();
    await browser.pause(5000);
  });


  it('should be able to sign in male-doctor', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlat20001Doc@gmail.com`);   // Zlat20001Doc@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Zlata2001DP');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/doctors');

    await browser.pause(5000);   

    const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO');  // меню-выподающее  button выход
    const logoutButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3');  // кнопка logout выход
   
    await menuButton.waitForDisplayed({ timeout: 5000 });
    await menuButton.click(); 

    await logoutButton.waitForDisplayed({ timeout: 5000 });
    await logoutButton.click();

    await browser.waitUntil(
      async function () {
        const urlIn = await browser.getUrl();
        return urlIn === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlIn = await browser.getUrl();
    expect(urlIn).to.be.eql('http://46.101.234.121/sign-in');    

    await browser.reloadSession();
    await browser.pause(5000);
  });


  it('should be able to sign in male-patient', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlat2001@gmail.com`);   // Zlat2001@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Zlat2001');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/doctors');

    await browser.pause(5000);   

    const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO');  // меню-выподающее  button выход
    const logoutButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3');  // кнопка logout выход
   
    await menuButton.waitForDisplayed({ timeout: 5000 });
    await menuButton.click(); 

    await logoutButton.waitForDisplayed({ timeout: 5000 });
    await logoutButton.click();

    await browser.waitUntil(
      async function () {
        const urlIn = await browser.getUrl();
        return urlIn === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlIn = await browser.getUrl();
    expect(urlIn).to.be.eql('http://46.101.234.121/sign-in');    

    await browser.reloadSession();
    await browser.pause(5000);
  });

  it('should be able to sign in female-patient', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlata2001@gmail.com`);   // Zlata2001@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Zlata2001');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/doctors');

    await browser.pause(5000);   

    const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO');  // меню-выподающее  button выход
    const logoutButton = await $('button.styles_btn___s1BB.styles_without-border__3Vbp3');  // кнопка logout выход
   
    await menuButton.waitForDisplayed({ timeout: 5000 });
    await menuButton.click(); 

    await logoutButton.waitForDisplayed({ timeout: 5000 });
    await logoutButton.click();

    await browser.waitUntil(
      async function () {
        const urlIn = await browser.getUrl();
        return urlIn === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlIn = await browser.getUrl();
    expect(urlIn).to.be.eql('http://46.101.234.121/sign-in');    

    await browser.reloadSession();
    await browser.pause(5000);
  });


  it('fault to sign in female-doctor', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(``);   // Zlata20001Doc@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/sign-in');

    await browser.reloadSession();
    await browser.pause(5000);
  });


  it('fault to sign in male-doctor', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`   `);   

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('   ');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/sign-in');

    await browser.reloadSession();
    await browser.pause(5000);
  });


  it('fault to sign in male-patient', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlat2001@gmail@com`);   

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Zlat2001');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/sign-in');
 
    await browser.reloadSession();
    await browser.pause(5000);
  });

  it('fault to sign in female-patient', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`[|]'~<!--@/*$%^&#*/()?>,*/\@gmail.com`);   

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Zlata2001');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/sign-in');

    await browser.reloadSession();
    await browser.pause(5000);
  });

  it('fault to sign in female-patient', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlata2001@gmail.com`);  

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('[|]');                               

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const urlDoc = await browser.getUrl();
        return urlDoc === 'http://46.101.234.121/sign-in';
      },
      { timeout: 5000 },
    );

    const urlDoc = await browser.getUrl();
    expect(urlDoc).to.be.eql('http://46.101.234.121/sign-in');

    await browser.reloadSession();
    await browser.pause(5000);
  });  

    it('fault to sign in female-doctor', async function () {
  
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
  
      const emailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
  
      const signInButton = await $('button');
  
      await emailField.waitForDisplayed({ timeout: 5000 });
      await emailField.setValue('<script>alert("Hi, I hacked this!")</script><script>alert');   // Zlata20001Doc@gmail.com     `Zlata${rundomNumber()}@gmail.com`
  
      await passwordField.waitForDisplayed({ timeout: 5000 }); 
      await passwordField.setValue('Zlata2001DP');                               
  
      await signInButton.waitForDisplayed({ timeout: 5000 });
      await signInButton.click();
  
      await browser.waitUntil(
        async function () {
          const urlDoc = await browser.getUrl();
          return urlDoc === 'http://46.101.234.121/sign-in';
        },
        { timeout: 5000 },
      );
  
      const urlDoc = await browser.getUrl();
      expect(urlDoc).to.be.eql('http://46.101.234.121/sign-in');
  
      await browser.reloadSession();
      await browser.pause(5000);
    });

    it('fault to sign in female-doctor', async function () {
  
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
  
      const emailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
  
      const signInButton = await $('button');
  
      await emailField.waitForDisplayed({ timeout: 5000 });
      await emailField.setValue('Zlata20001Doc@gmail.com');  
  
      await passwordField.waitForDisplayed({ timeout: 5000 }); 
      await passwordField.setValue('<script>alert("Hi, I hacked this!")</script><script>alert');                               
  
      await signInButton.waitForDisplayed({ timeout: 5000 });
      await signInButton.click();
  
      await browser.waitUntil(
        async function () {
          const urlDoc = await browser.getUrl();
          return urlDoc === 'http://46.101.234.121/sign-in';
        },
        { timeout: 5000 },
      );
  
      const urlDoc = await browser.getUrl();
      expect(urlDoc).to.be.eql('http://46.101.234.121/sign-in');
  
      await browser.reloadSession();
      await browser.pause(5000);
    });

  });