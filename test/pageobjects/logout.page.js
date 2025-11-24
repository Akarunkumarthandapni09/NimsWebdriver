const { $ } = require('@wdio/globals');
const Page = require('./page');
const allure = require('@wdio/allure-reporter').default;

class LogoutPage extends Page {
    // Selector for Signout link/button
    get signoutLink() {
        return $('//a[text()="Signout"]');

    }
    

    // Method to perform logout
    async logout() {
        await browser.pause(1000); // optional pause before logout
        await this.signoutLink.waitForClickable({ timeout: 5000 });
        await browser.saveScreenshot('./test/screenshots/logoutPage.png'); // S
        await this.signoutLink.click();
        await browser.pause(1000); 
        await browser.saveScreenshot('./test/screenshots/logoutPage2.png');
        const singout = await browser.takeScreenshot();
        allure.addAttachment('singout_clicked', Buffer.from(singout, 'base64'), 'image/png');
        
        // use after logout
    }
}

// Export an instance of LogoutPage (important!)
module.exports = new LogoutPage();
