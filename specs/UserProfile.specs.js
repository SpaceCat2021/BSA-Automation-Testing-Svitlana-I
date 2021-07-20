// [] Тест 4 на зміну спеціальності та клініки для доктора.

const { expect } = require('chai');

const rundomNumber = () => Date.now();

describe('User Profile:', function () {

  it('Change of clinic and specialty of a female doctor', async function () {

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
    await browser.pause(2000); 

    const myProfile = await $('a.link_link__3zEN3=My Profile');  // меню My Profile button выход  <a class="link_link__3zEN3 link_active__2yhrp" href="/user-profile/1a704228-5201-4244-b5a3-72329c8c4ec9" aria-current="page">My Profile</a>  ('div.header_pagesSection__2Rgck"><a class="link_link__3zEN3" href="/doctors">Doctors</a><a class="link_link__3zEN3" href="/clinics">Clinics</a><a class="link_link__3zEN3 link_active__2yhrp" href="/user-profile/1a704228-5201-4244-b5a3-72329c8c4ec9" aria-current="page">My Profile</a><a class="link_link__3zEN3" href="/my-chats">My Chats</a></div>
    
    await myProfile.waitForDisplayed({ timeout: 5000 });
    await myProfile.click(); 

    await browser.pause(2000); 

// корректировка данных доктора 

    const ddls = await $$('div.selectStyles__control.css-6h7vey-control');  // меню  <div class="selectStyles__control 

    const specialtyDdl = ddls[0];  //  Select specialty:/    для каждого меню своя переменная 
    const clinicDdl = ddls[1];  //  Select Clinic:/    для каждого меню своя переменная 

    const surgeonOption = await $('div.selectStyles__option=surgeon');  // по классу поиск surgeon 
    
    const specialtyButton = await $("//form[@class='styles_selectFormWrapper__vOryy']/div/button[contains(text(), 'Save')]");

    await specialtyDdl .waitForDisplayed({ timeout: 5000 });  
    await specialtyDdl .click();       

    await surgeonOption.waitForDisplayed({ timeout: 5000 });  
    await surgeonOption.click();                             // 1- кликаем на specialty  -открытие
    
    await specialtyButton.waitForDisplayed({ timeout: 5000 });
    await specialtyButton.click();

    await browser.pause(2000); 

    const clinicOption = await $('div.selectStyles__option=New York-Presbyterian Hospital-Columbia and Cornell');

    const clinicButton = await $("//form[@class='styles_selectFormWrapper__1UXSB']/div/button[contains(text(), 'Save')]");

    await browser.pause(2000); 

    

    await clinicDdl .waitForDisplayed({ timeout: 5000 });  
    await clinicDdl .click();   

    await clinicOption.waitForDisplayed({ timeout: 5000 });  
    await clinicOption.click();                             // 1- кликаем на Clinic -открытие

    await browser.pause(5000); 

    await clinicButton.waitForDisplayed({ timeout: 5000 });
    await clinicButton.click();

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