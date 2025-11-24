
const Page = require('./page');
const allure = require('@wdio/allure-reporter').default;  // Import Allure reporter

class ProfilePage extends Page {

    async open() {
        // Step 1: Wait and maximize window
        await browser.pause(3000);
        await browser.maximizeWindow();

        // Step 2: Click main menu item
        await $('(//a[@onmousemove="return showStatus()"])[5]').click();
        await browser.pause(3000);

        // Step 3: Take screenshot and attach to Allure report
        const screenshot1 = await browser.takeScreenshot();
        allure.addAttachment('1_my_profile_clicked', Buffer.from(screenshot1, 'base64'), 'image/png');

        // Step 4: Hover on "My Forms" and click it
        const moved = await $('//a[text()="My Forms"]');
        await moved.moveTo();
        await moved.click();
        await browser.pause(2000);
                                                                                  
        // Step 5: Screenshot after clicking My Forms
        const screenshot2 = await browser.takeScreenshot();
        allure.addAttachment('2_my_forms_clicked', Buffer.from(screenshot2, 'base64'), 'image/png');

        // Step 6: Hover on "Leave Status" and click it
        const movedto = await $('//a[text()=" Leave Status "] ');
        await movedto.moveTo();
        await movedto.click();
        await browser.pause(5000);

        // Step 7: Screenshot after clicking Leave Status
        const screenshot3 = await browser.takeScreenshot();
        allure.addAttachment('3_leave_status_clicked', Buffer.from(screenshot3, 'base64'), 'image/png');

        // Step 8: Click main menu again
        await $('(//a[@onmousemove="return showStatus()"])[5]').click();
        await browser.pause(2000);

        // Step 9: Screenshot after clicking main menu again
        const screenshot4 = await browser.takeScreenshot();
        allure.addAttachment('4_My_profile_clicked_again', Buffer.from(screenshot4, 'base64'), 'image/png');

        // Step 10: Hover on "Personal Information" and click it
        const moved1 = await $('//a[text()="Personal Information"]');
        await moved1.moveTo();
        await moved1.click();
        await browser.pause(2000);

        // Step 11: Screenshot after clicking Personal Information
        const screenshot5 = await browser.takeScreenshot();
        allure.addAttachment('5_personal_information_clicked', Buffer.from(screenshot5, 'base64'), 'image/png');

        // Step 12: Hover on "Project Allocation Details" and click it
        const movedto2 = await $('//a[text()=" Project Allocation Details "]');
        await movedto2.moveTo();
        await movedto2.click();
        await browser.pause(2000);
        const screenshot6 = await browser.takeScreenshot();
        allure.addAttachment('6_project_allocation_details', Buffer.from(screenshot6, 'base64'), 'image/png');

        // Step 13: Click main menu again
        await $('(//a[@onmousemove="return showStatus()"])[5]').click();
        await browser.pause(2000);
        const screenshot6_1 = await browser.takeScreenshot();
        allure.addAttachment('6_1_my_forms_clicked_again', Buffer.from(screenshot6_1, 'base64'), 'image/png');

        // Step 14: Hover on "Personal Information" again and click it
        const moved3 = await $('//a[text()="Personal Information"]');
        await moved3.moveTo();
        await moved3.click();
        await browser.pause(2000);
        const screenshot6_2 = await browser.takeScreenshot();
        allure.addAttachment('6_2_personal_information_clicked_again', Buffer.from(screenshot6_2, 'base64'), 'image/png');

        // Step 15: Hover on "Salary Slips" and click it
        const movedto3 = await $('//a[text()=" Salary Slips "]');
        await movedto3.moveTo();
        await movedto3.click();
        await browser.pause(2000);
        const screenshot7 = await browser.takeScreenshot();
        allure.addAttachment('clicked_salary_slips', Buffer.from(screenshot7, 'base64'), 'image/png');

        // Step 16: Select month dropdown and choose "Feb"
        await $('//select[@name="month"]').click();
        await $('//option[text()="Feb"]').click();
        const screenshot8 = await browser.takeScreenshot();
        allure.addAttachment('8_salary_slips_feb_selected', Buffer.from(screenshot8, 'base64'), 'image/png');
        await browser.pause(2000);
        await $('//select[@id="year"]').click();
        
        await browser.pause(1000);
        await $('//option[text()="2025"]').click();
        const screenshot9 = await browser.takeScreenshot();
        allure.addAttachment('9_salary_slips_year_selected', Buffer.from(screenshot9, 'base64'), 'image/png');
         await browser.pause(1000); 
         await $('//input[@id="search"]').click();
          const screenshot10 = await browser.takeScreenshot();
        allure.addAttachment('10_salary_slips_year_details', Buffer.from(screenshot10, 'base64'), 'image/png');
        await browser.pause(2000);
         // const screenshot9 = await browser.takeScreenshot();
        // Click again to ensure selection

        // Step 17: Take final screenshot (optional)
        
        // Step 18: Click "Home" link to finish
        await $('//a[text()="Home"]').click();
        const screenshot11 = await browser.takeScreenshot();
        allure.addAttachment('clicked_home_page', Buffer.from(screenshot11, 'base64'), 'image/png');
    }
}

module.exports = new ProfilePage();
