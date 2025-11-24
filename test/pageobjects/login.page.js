
const { $ } = require('@wdio/globals');
const Page = require('./page');
const allure = require('@wdio/allure-reporter').default;

class LoginPage extends Page {

    get inputUsername () {
        return $('#j_username');
    }

    get inputPassword () {
        return $('#j_password');
    }

    get dropdowncookievalue () {
        return $('#cookieValue');
    }

    get btnSubmit () {
        return $('input[type="submit"]');
    }

    get errorMessage() {
        return $('.error-msg'); // Update this if your selector differs
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        const ss1 = await browser.takeScreenshot();
        allure.addAttachment('Step 1 - Username Entered', Buffer.from(ss1, 'base64'), 'image/png');

        await this.inputPassword.setValue(password);
        const ss2 = await browser.takeScreenshot();
        allure.addAttachment('Step 2 - Password Entered', Buffer.from(ss2, 'base64'), 'image/png');

        await this.dropdowncookievalue.click();
        await this.dropdowncookievalue.selectByIndex(1);
        const ss3 = await browser.takeScreenshot();
        allure.addAttachment('Step 3 - Dropdown Selected', Buffer.from(ss3, 'base64'), 'image/png');

        await this.btnSubmit.click();
        await browser.pause(5000); // wait for page to load

        const ss4 = await browser.takeScreenshot();
        allure.addAttachment('Step 4 - After Login Click', Buffer.from(ss4, 'base64'), 'image/png');
    }

    async isLoginFailed() {
        try {
            await this.errorMessage.waitForDisplayed({ timeout: 5000 });
            return false;
        } catch (error) {
            return true;
        }
    }

    async open () {
        await browser.pause(1000);
        return super.open('https://nims.nihilent.com/hrms/signin.jsp');
    }
    

}



module.exports = new LoginPage();
