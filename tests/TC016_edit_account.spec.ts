import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC016: Edit Account', async ({ SalesforceLogin, SalesforceHome, SalesforceAccount }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC016' },
        { type: 'Test Description', description: 'Edits existing account records with updated information' },
        { type: 'Category', description: 'Account Management' }
    );

    const accountName = FakerData.getRandomTitle();
    const updatedName = FakerData.getRandomTitle();
    const phone = FakerData.getMobileNumber();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Accounts");
    await SalesforceHome.clickApp("Accounts");
    await SalesforceAccount.newButton();
    await SalesforceAccount.accountName(accountName);
    await SalesforceAccount.phoneNumber(FakerData.getMobileNumber());
    await SalesforceAccount.saveButton();
    await SalesforceAccount.verifyAccountName(accountName);

    await SalesforceAccount.editAccount();
    await SalesforceAccount.accountName(updatedName);
    await SalesforceAccount.phoneNumber(phone);
    await SalesforceAccount.saveButton();
    await SalesforceAccount.verifyAccountName(updatedName);
});
