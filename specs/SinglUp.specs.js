// [] Тест 1 на регистрацию и логин ДЗ-1.


const { expect } = require('chai');

const rundomNumber = () => Math.floor(Math.random() * 10000).toString();

describe('SingUp_Registration:', function () {

  it('should be able to register female-doctor', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const femaleOption = await $('div.selectStyles__option=female');  
    const doctorOption = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Zlata');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Zlat');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('01/01/2001');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlata${rundomNumber()}@gmail.com`);   // Zlata20001Doc@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Zlata2001DP');                               

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Zlata2001DP');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('387770007777');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await doctorOption.waitForDisplayed({ timeout: 5000 });
    await doctorOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

    await browser.pause(5000);    
    
    // выход 

  const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO.styles_gray-light__3fTxu.styles_expand__23Rf0');  // меню-выподающее  button выход
    
  await menuButton.waitForDisplayed({ timeout: 5000 });
  await menuButton.click(); 

  await browser.pause(2000);   
  const logoutButton = await $('button.styles_btn___s1BB=Logout');  // кнопка logout выход
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

  await browser.pause(5000);   
  await browser.reloadSession();

});


  it('should be able to register male-doctor', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const maleOption = await $('div.selectStyles__option=male');
    const doctorOption = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Zlat');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Zlat');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('31/12/2001');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlata${rundomNumber()}@gmail.com`);     // Zlat20001Doc@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); //Zlat2001D
    await passwordField.setValue('Zlata2001DP');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Zlata2001DP');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('389990009999');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await maleOption.waitForDisplayed({ timeout: 5000 });
    await maleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await doctorOption.waitForDisplayed({ timeout: 5000 });
    await doctorOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

    await browser.pause(5000);  
    
    // выход 

    const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO.styles_gray-light__3fTxu.styles_expand__23Rf0');  // меню-выподающее  button выход
    
    await menuButton.waitForDisplayed({ timeout: 5000 });
    await menuButton.click(); 
  
    await browser.pause(2000);   
    const logoutButton = await $('button.styles_btn___s1BB=Logout');  // кнопка logout выход
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
  
    await browser.pause(5000);   
    await browser.reloadSession();
  
  });


   it('should be able to register male-patient', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const maleOption = await $('div.selectStyles__option=male');
    const patientOption = await $('div.selectStyles__option=patient');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Zlat');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Zlat');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('10/05/2005');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlata${rundomNumber()}@gmail.com`);     // Zlat2001P@gmail.com

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Zlata2001DP');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Zlata2001DP');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('383330003333');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await maleOption.waitForDisplayed({ timeout: 5000 });
    await maleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await patientOption.waitForDisplayed({ timeout: 5000 });
    await patientOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

  await browser.pause(5000);  
    
    // выход 

    const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO.styles_gray-light__3fTxu.styles_expand__23Rf0');  // меню-выподающее  button выход
    
    await menuButton.waitForDisplayed({ timeout: 5000 });
    await menuButton.click(); 
  
    await browser.pause(2000);   
    const logoutButton = await $('button.styles_btn___s1BB=Logout');  // кнопка logout выход
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
  
    await browser.pause(5000);   
    await browser.reloadSession();
  
  });


   it('should be able to register female-patient', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const femaleOption = await $('div.selectStyles__option=female');
    const patientOption = await $('div.selectStyles__option=patient');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Zlata');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Zlat');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('20/08/2008');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`Zlata${rundomNumber()}@gmail.com`);    // Zlata2001@gmail.com

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Zlata2001DP');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Zlata2001DP');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('385550005555');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await patientOption.waitForDisplayed({ timeout: 5000 });
    await patientOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');

    await browser.pause(5000);  
    
    // выход 

    const menuButton = await $('button.styles_btn___s1BB.styles_medium-round__3KyFO.styles_gray-light__3fTxu.styles_expand__23Rf0');  // меню-выподающее  button выход
    
    await menuButton.waitForDisplayed({ timeout: 5000 });
    await menuButton.click(); 
  
    await browser.pause(2000);   
    const logoutButton = await $('button.styles_btn___s1BB=Logout');  // кнопка logout выход
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
  
    await browser.pause(5000);   
    await browser.reloadSession();
  
  });

});