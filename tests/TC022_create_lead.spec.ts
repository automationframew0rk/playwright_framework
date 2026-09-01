import { test } from '../customFixtures/salesForceFixture';
import { URLConstants } from '../constants/urlConstants';
import { credentials } from '../constants/credentialData';

test('TC022: Create Lead', async ({ SalesforceLogin, SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'OpenAI' },
        { type: 'TestCase', description: 'TC022' },
        { type: 'Test Description', description: 'Verify that a new Lead is created successfully in Salesforce' },
        { type: 'Category', description: 'Lead Management' },
        { type: 'Type', description: 'Smoke' }
    );

    const username = 'ADMINLOGIN';
    const password = 'ADMINLOGIN';
    const appName = 'Leads';
    const firstName = 'John';
    const lastName = 'Doe';
    const company = 'Acme Corp';
    const leadName = 'Mr. John Doe';

    await SalesforceLogin.loadApp(URLConstants.adminURL);
    await SalesforceLogin.type('#username', 'Username', username);
    await SalesforceLogin.click('#Login', 'Log In', 'Button');
    await SalesforceLogin.type('#password', 'Password', password);
    await SalesforceLogin.click('#Login', 'Log In', 'Button');
    await SalesforceHome.appLauncher();
    await SalesforceHome.searchApp(appName);
    await SalesforceHome.clickApp(appName);
    await SalesforceLead.newButton();
    await SalesforceLead.salutation();
    await SalesforceLead.selectMrOption();
    await SalesforceLead.firstName(firstName);
    await SalesforceLead.lastName(lastName);
    await SalesforceLead.company(company);
    await SalesforceLead.saveButton();
    await SalesforceLead.verifyLeadName(leadName);
});