import { test } from '../customFixtures/salesForceFixture';
import { URLConstants } from '../constants/urlConstants';

test('Verify User can able to login with valid credentials', async ({ page, context }) => {
    const jdeSummaryAvailabilityPage = new (await import('../pages/jdeSummaryAvailabilityPage')).JdeSummaryAvailabilityPage(page, context);

    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC_JDE_001' },
        { type: 'Test Description', description: 'Verify User can able to login with valid credentials' },
        { type: 'Category', description: 'JDE Summary Availability' }
    );

    await jdeSummaryAvailabilityPage.navigateTo(URLConstants.adminURL);
    await jdeSummaryAvailabilityPage.typeUsername('INTEGRATE6');
    await jdeSummaryAvailabilityPage.typePassword('welcome1');
    await jdeSummaryAvailabilityPage.clickSignIn();
    await jdeSummaryAvailabilityPage.verifyPageTitle('JD Edwards');
    await jdeSummaryAvailabilityPage.clickNavigator();
    await jdeSummaryAvailabilityPage.clickEnterpriseOneMenus();
    await jdeSummaryAvailabilityPage.clickLogisticsManagement();
    await jdeSummaryAvailabilityPage.clickInventoryManagement();
    await jdeSummaryAvailabilityPage.clickDailyProcessing();
    await jdeSummaryAvailabilityPage.clickInventoryInquiries();
    await jdeSummaryAvailabilityPage.clickSummaryAvailability();
    await jdeSummaryAvailabilityPage.verifyPageTitle('Summary Availability - Work With Item Availability');
    await jdeSummaryAvailabilityPage.enterItemNumber('220');
    await jdeSummaryAvailabilityPage.enterBranchPlant('10');
    await jdeSummaryAvailabilityPage.selectDisplayOption('Omit Zero Quantities');
    await jdeSummaryAvailabilityPage.clickFindIcon();
    await jdeSummaryAvailabilityPage.verifyOnHand('986');
});