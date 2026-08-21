import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC021: Create Account', async ({ SalesforceLogin, SalesforceHome, SalesforceAccount }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC021' },
        { type: 'Test Description', description: 'Verify that a new Account is created successfully in Salesforce' },
        { type: 'Category', description: 'Account Management' },
        { type: 'Type', description: 'Smoke' }
    );

    const accountName = FakerData.getRandomTitle();

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
});
