import { test } from '../customFixtures/salesForceFixture';
import { URLConstants } from '../constants/urlConstants';
import { credentials } from '../constants/credentialData';

// Test to create a new Lead in Salesforce

test('Create a new Lead', async ({ SalesforceLogin, SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC017' },
        { type: 'Test Description', description: 'Create a new Lead with salutation, first name, last name, and company' },
        { type: 'Category', description: 'Lead Management' }
    );

    await SalesforceLogin.loadApp(URLConstants.adminURL);
    await SalesforceLogin.type(selectors.login.usernameInput, 'Username', credentials.ADMINLOGIN.username);
    await SalesforceLogin.click(selectors.login.loginBtn, 'Log In', 'Button');
    await SalesforceLogin.type(selectors.login.passwordInput, 'Password', credentials.ADMINLOGIN.password);
    await SalesforceLogin.click(selectors.login.loginBtn, 'Log In', 'Button');

    await SalesforceHome.appLauncher();
    await SalesforceHome.searchApp('Leads');
    await SalesforceHome.clickApp('Leads');

    await SalesforceLead.newButton();
    await SalesforceLead.selectSalutation('Mr.');
    await SalesforceLead.fillFirstName('John');
    await SalesforceLead.fillLastName('Doe');
    await SalesforceLead.fillCompany('Acme Corp');
    await SalesforceLead.saveButton();
    await SalesforceLead.verifyLeadName('Mr. John Doe');
});