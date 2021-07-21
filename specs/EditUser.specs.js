// [] Тест 3 на зміну даних в профілі користувача.


const { expect } = require('chai');

const rundomNumber = () => Date.now();
//const rundomPhone = () => Math.floor(Math.random()*100).toString(); 

describe('Edit data user:', function () {

  it('сhange of data in the female-doctor profilein', async function () {

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

//профиль 

    const myProfile = await $('a.link_link__3zEN3=My Profile');  
    
    await myProfile.waitForDisplayed({ timeout: 5000 });
    await myProfile.click(); 

    await browser.pause(2000); 

// Проверка перехода в профиль 

    const buttonEd = await $('button.styles_edit__ftuHl');                    // Кнопка редактирования 

    await buttonEd.waitForDisplayed({ timeout: 5000 });
    await buttonEd.click(); 
    
    await browser.pause(2000); 

// Проверка перехода в профиль 

  await browser.waitUntil(
    async function () {
    const urlEdit = await browser.getUrl();
    return urlEdit === 'http://46.101.234.121/user-profile/1a704228-5201-4244-b5a3-72329c8c4ec9';
  },
  { timeout: 5000 },
);

const urlEdit = await browser.getUrl();
expect(urlEdit).to.be.eql('http://46.101.234.121/user-profile/1a704228-5201-4244-b5a3-72329c8c4ec9');  


// Корректировка профиля

const surnameFieldEd = await $('input[name="surname"]');

const phoneFieldEd = await $('input[name="phone"]');    

await surnameFieldEd.waitForDisplayed({ timeout: 5000 });
await surnameFieldEd.setValue('ZlatZlata');                       

await phoneFieldEd.waitForDisplayed({ timeout: 5000 });
await phoneFieldEd.setValue('387770007007');                  

await browser.pause(2000);

//кнопка Edit
              
     const buttonEdit = await $("//form[@class='styles_editForm__1rOFS']/div/button[contains(text(), 'Edit')]");
    
     await buttonEdit.waitForDisplayed({ timeout: 5000 });
     await buttonEdit.click(); 

     await browser.pause(2000);

// проверка edit

    const newSurnameFieldEd = await $('span.styles_name__2vTNE');
    const newSurnameFieldEdText = await newSurnameFieldEd.getText();
    expect(newSurnameFieldEdText).to.be.eql(`Zlata Zlat-Zlata`);                 

    const newPhoneFieldEd = await $('a.styles_text__1HrCV');
    const newPhoneFieldEdText = await newPhoneFieldEd.getText();
    expect(newPhoneFieldEdText).to.be.eql('387770007007');    

    await browser.pause(2000); 

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
