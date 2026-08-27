import { test } from '../customFixtures/salesForceFixture';
import { URLConstants } from '../constants/urlConstants';
import { credentials } from '../constants/credentialData';

// Test to create a new Lead in Salesforce

test('Create a new Lead', async ({ SalesforceLogin, SalesforceHome, SalesforceLead }) => {
    // Step 1: Navigate to Salesforce login URL
    await SalesforceLogin.loadApp(URLConstants.adminURL);

    // Step 2: Type username
    await SalesforceLogin.type('#username', 'Username', credentials.ADMINLOGIN.username);

    // Step 3: Click Log In button
    await SalesforceLogin.click('#Login', 'Log In', 'Button');

    // Step 4: Type password
    await SalesforceLogin.type('#password', 'Password', credentials.ADMINLOGIN.password);

    // Step 5: Click Log In button
    await SalesforceLogin.click('#Login', 'Log In', 'Button');

    // Step 6: Click App Launcher
    await SalesforceHome.appLauncher();

    // Step 7: Type "Leads" into app search
    await SalesforceHome.searchApp('Leads');

    // Step 8: Click on Leads app
    await SalesforceHome.clickApp('Leads');

    // Step 9: Click New button
    await SalesforceLead.newButton();

    // Step 10: Choose "Mr." from Salutation
    await SalesforceLead.selectSalutation('Mr.');

    // Step 11: Fill First Name with "John"
    await SalesforceLead.fillFirstName('John');

    // Step 12: Fill Last Name with "Doe"
    await SalesforceLead.fillLastName('Doe');

    // Step 13: Fill Company with "Acme Corp"
    await SalesforceLead.fillCompany('Acme Corp');

    // Step 14: Click Save
    await SalesforceLead.saveButton();

    // Step 15: Verify lead name is visible
    await SalesforceLead.verifyLeadName('Mr. John Doe');
});