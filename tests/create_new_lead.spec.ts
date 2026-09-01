import { test } from '../customFixtures/salesForceFixture';test('Create a new Lead', async ({ SalesforceLogin, SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'OpenAI' },
        { type: 'TestCase', description: 'CreateNewLead' },
        { type: 'Test Description', description: 'Verify that a new Lead is created successfully in Salesforce' },
        { type: 'Category', description: 'Lead Management' },
        { type: 'Type', description: 'Smoke' }
    );

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.searchApp("Leads");
    await SalesforceHome.clickApp("Leads");
    await SalesforceLead.newButton();
    await SalesforceLead.salutation();
    await SalesforceLead.selectMrOption();
    await SalesforceLead.firstName("John");
    await SalesforceLead.lastName("Doe");
    await SalesforceLead.company("Acme Corp");
    await SalesforceLead.saveButton();
    await SalesforceLead.verifyLeadName("John Doe");
});
