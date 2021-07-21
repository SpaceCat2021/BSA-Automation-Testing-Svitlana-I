const { AuthPage } = require('./auth.page');
const { SinglPage } = require('./singl.page');
const { EditPage } = require('./edit.page');
const { ProfilePage } = require('./profile.page');
const { AddPage } = require('./add.page');

class App {
  constructor() {
    this.authPage = new AuthPage();
    this.singlPage = new SinglPage();
    this.editPage = new EditPage();
    this.profilePage = new ProfilePage();
    this.addPage = new AddPage();
  }
}

module.exports = { App };
