import { test } from '../customFixtures/salesForceFixture';

// Using URLConstants.adminURL for login URL
import { URLConstants } from '../constants/urlConstants';

test('Create a new Lead', async ({ SalesforceLogin, SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'Create a new Lead' },
        { type: 'Test Description', description: 'Creates a new lead with given details and verifies it' },
        { type: 'Category', description: 'Lead Management' }
    );

    await SalesforceLogin.loadApp(URLConstants.adminURL);
    await SalesforceLogin.salesforceLogin('ADMINLOGIN');

    await SalesforceHome.appLauncher();
    await SalesforceHome.searchApp('Leads');
    await SalesforceHome.clickApp('Leads');

    const salutation = 'Mr.';
    const firstName = 'John';
    const lastName = 'Doe';
    const company = 'Acme Corp';
    const fullName = `${salutation} ${firstName} ${lastName}`;

    await SalesforceLead.newButton();
    await SalesforceLead.selectSalutation(salutation);
    await SalesforceLead.fillFirstName(firstName);
    await SalesforceLead.fillLastName(lastName);
    await SalesforceLead.fillCompany(company);
    await SalesforceLead.saveButton();

    await SalesforceLead.verifyLeadName(fullName);
});