import { test } from '../customFixtures/salesForceFixture';
import { JdeSummaryAvailabilityPage } from '../pages/jdeSummaryAvailabilityPage';
import { URLConstants } from '../constants/urlConstants';

test('Verify user can login with valid credentials and verify Sales Order details', async ({ JdeSummaryAvailability }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'JDE_SalesOrderDetails' },
        { type: 'Test Description', description: 'Verify user can login with valid credentials and verify Sales Order details' },
        { type: 'Category', description: 'JDE' },
        { type: 'Type', description: 'Smoke' }
    );

    await JdeSummaryAvailability.navigateToUrl(URLConstants.adminURL);
    await JdeSummaryAvailability.typeUsername('TESTT02');
    await JdeSummaryAvailability.typePassword('Welcome123');
    await JdeSummaryAvailability.clickSignIn();
    await JdeSummaryAvailability.verifyPageTitle('JD Edwards');
    await JdeSummaryAvailability.clickNavigator();
    await JdeSummaryAvailability.clickEnterpriseOneMenus();
    await JdeSummaryAvailability.clickOrderManagement();
    await JdeSummaryAvailability.clickSalesOrderManagement();
    await JdeSummaryAvailability.clickDailySalesOrderManagementProcessing();
    await JdeSummaryAvailability.clickSalesOrderProcessing();
    await JdeSummaryAvailability.clickEnterOrdersHeader();
    await JdeSummaryAvailability.clickAddIcon();
    await JdeSummaryAvailability.enterBranchPlant('10');
    await JdeSummaryAvailability.enterSoldTo('17001');
    await JdeSummaryAvailability.enterShipTo('17001');
    await JdeSummaryAvailability.enterRequestedDate('09/17/2026');
    await JdeSummaryAvailability.enterCustomerPO('anu-3');
    await JdeSummaryAvailability.clickOkIcon();
    await JdeSummaryAvailability.clickOkIcon();
    await JdeSummaryAvailability.verifyEnterOrdersHeaderTitle('Enter Orders Header - Sales Order Detail Revisions');
    await JdeSummaryAvailability.storeOrderNumber();
    const ord = JdeSummaryAvailability.getOrderNumber();
    await JdeSummaryAvailability.enterItemNumber('220');
    await JdeSummaryAvailability.enterQuantityOrdered('2');
    await JdeSummaryAvailability.clickOkIcon();
    await JdeSummaryAvailability.clickNavigatorIcon();
    await JdeSummaryAvailability.clickEnterpriseOneMenus();
    await JdeSummaryAvailability.clickOrderManagement();
    await JdeSummaryAvailability.clickSalesOrderManagement();
    await JdeSummaryAvailability.clickDailySalesOrderManagementProcessing();
    await JdeSummaryAvailability.clickSalesOrderProcessing();
    await JdeSummaryAvailability.clickSalesOrderDetail();
    await JdeSummaryAvailability.enterOrderNumber(ord);
    await JdeSummaryAvailability.clickFindIcon();
    await JdeSummaryAvailability.verifyCustomerPOContains('anu-3');
    await JdeSummaryAvailability.verifyQuantityOrderedContains(2);
    await JdeSummaryAvailability.verifySecondItemNumberContains('220');
});