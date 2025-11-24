require('../../utils/createScreenshotFolder');
const { expect, browser } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const ProfilePage = require('../pageobjects/profile.page');
const LogoutPage = require('../pageobjects/logout.page'); // Import the againlogin page object
 // Import the invalid login page object 



describe('Nimis HRMS', () => {
it('login', async () => {
        await LoginPage.open();
        await browser.pause(2000);
        await browser.saveScreenshot('./test/screenshots/login1Page.png');
        await LoginPage.login('almohamedadnaan.s@nihilent.com', 'User@2810');
        await browser.pause(2000);
        await browser.saveScreenshot('./test/screenshots/loginPage.png');
        
        
    });
    it('profile page', async () => {
        
        await ProfilePage.open();
        await browser.pause(2000);
        

      
    });
    it('logout', async () => {
        await browser.pause(2000);
        await LogoutPage.logout();
        await browser.pause(2000);
        
      //  await browser.saveScreenshot("logout.png")   // Call logout on the instance

    });-
    it('Login with invalid credentials', async () => {
        
        await LoginPage.open();
        await LoginPage.login('invalid_user@example.com', 'WrongPassword!');
        
        const failed = await LoginPage.isLoginFailed();
        expect(failed).toBe(true);  // Expect error message to be displayed
    });

    
});
    