// [] Тест 5 на додавання нової клініки. patient


const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('Add a clinic:', function () {

  it('adding a clinic the female-doctor profilein', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);   // Zlata20001Doc@gmail.com     `Zlata${rundomNumber()}@gmail.com`

    await passwordField.waitForDisplayed({ timeout: 5000 }); 
    await passwordField.setValue('Pa55word');                               

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

// клиники 
    await browser.pause(2000); 

    const myClinics = await $('a.link_link__3zEN3=Clinics');  // меню кнопка Clinics  
    
    await myClinics.waitForDisplayed({ timeout: 5000 });
    await myClinics.click(); 

    await browser.pause(2000); 


// Проверка перехода на стариницу клиника 

    await browser.waitUntil(
    async function () {
    const urlEdit = await browser.getUrl();
    return urlEdit === 'http://46.101.234.121/clinics';
  },
  { timeout: 5000 },
);

const urlEdit = await browser.getUrl();
expect(urlEdit).to.be.eql('http://46.101.234.121/clinics');  

// Проверка кнопки Add
   await browser.pause(5000);  

   const addButton = await $('button.styles_btn___s1BB=Add');  // кнопка Add клиники 
   
   await addButton.waitForDisplayed({ timeout: 5000 });
   await addButton.click(); 

   await browser.pause(5000);  

// Ввод данных в поля clinics

const nameСlinics = await $('input[name="name"]');   // данный тест проходит с ошибкой 
const addressСlinics = await $('input[name="address"]');

await nameСlinics.waitForDisplayed({ timeout: 5000 });
await nameСlinics.setValue('Mount Sinai Hospital NY');

await addressСlinics.waitForDisplayed({ timeout: 5000 });
await addressСlinics.setValue('1190 Manhattan');


const ddls = await $$('div.selectStyles__control.css-6h7vey-control'); 

const statusDdl = ddls[0];  //  Select status:/    для каждого меню своя переменная 
const cityDdl = ddls[1];  //  Select city:/    для каждого меню своя переменная 

const statusСlinics = await $('div.selectStyles__option=private');  //  

const cityСlinics = await $('div.selectStyles__option=New York, NY');

await statusDdl.waitForDisplayed({ timeout: 5000 });  
await statusDdl.click();                             // 1- кликаем на status -открытие

await statusСlinics.waitForDisplayed({ timeout: 5000 }); 
await statusСlinics.click();                               // 2- выбираем private 

await cityDdl.waitForDisplayed({ timeout: 5000 });  
await cityDdl.click();                             // 1- кликаем на City -открытие

await cityСlinics.waitForDisplayed({ timeout: 5000 }); 
await cityСlinics.click();                               // 2- выбираем 	Нью-Йорк

//кнопка add
await browser.pause(5000);

const buttonAdd = await $("//form[@class='styles_createForm__1HWb7']/div/button[contains(text(), 'Add')]");

await buttonAdd.waitForDisplayed({ timeout: 5000 });
await buttonAdd.click(); 

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