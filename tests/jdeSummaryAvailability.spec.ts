import { test } from '../customFixtures/salesForceFixture';
import { JdeSummaryAvailabilityPage } from '../pages/jdeSummaryAvailabilityPage';

// We add the new page to the test fixture in salesForceFixture.ts, so we import it here

// Since the existing fixture does not have JdeSummaryAvailabilityPage registered,
// we will register it in the fixture file (done below).

test('Verify User can able to login with valid credentials', async ({ page, context }) => {
    const jdePage = new JdeSummaryAvailabilityPage(page, context);

    await jdePage.navigateToUrl('https://mirajde-dvtrweb.birlasoft.com/jde/E1Menu.maf?');
    await jdePage.typeUsername('TESTT02');
    await jdePage.typePassword('Welcome123');
    await jdePage.clickSignIn();
    await jdePage.verifyPageTitle('JD Edwards');
    await jdePage.clickNavigator();
    await jdePage.clickEnterpriseOneMenus();
    await jdePage.clickLogisticsManagement();
    await jdePage.clickInventoryManagement();
    await jdePage.clickDailyProcessing();
    await jdePage.clickInventoryInquiries();
    await jdePage.clickSummaryAvailability();
    await jdePage.verifyPageTitle('Summary Availability - Work With Item Availability');
    await jdePage.enterItemNumber('220');
    await jdePage.enterBranchPlant('10');
    await jdePage.selectDisplayOption('Omit Zero Quantities');
    await jdePage.clickFindIcon();
    await jdePage.verifyOnHand('996');
});
