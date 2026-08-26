import { test as baseTest } from '@playwright/test';
import { SalesforceAccountPage } from '../pages/salesforceAccountPage';
import { SalesforceHomePage } from '../pages/salesforceHomePage';
import { SalesforceLoginPage } from '../pages/salesforceLogin';
import { JdeSummaryAvailabilityPage } from '../pages/jdeSummaryAvailabilityPage';

type SalesforceFixtures = {
    SalesforceLogin: SalesforceLoginPage;
    SalesforceHome: SalesforceHomePage;
    SalesforceAccount: SalesforceAccountPage;
    JdeSummaryAvailability: JdeSummaryAvailabilityPage;
};

export const test = baseTest.extend<SalesforceFixtures>({
    SalesforceLogin: async ({ page, context }, use) => {
        await use(new SalesforceLoginPage(page, context));
    },

    SalesforceHome: async ({ page, context }, use) => {
        await use(new SalesforceHomePage(page, context));
    },

    SalesforceAccount: async ({ page, context }, use) => {
        await use(new SalesforceAccountPage(page, context));
    },

    JdeSummaryAvailability: async ({ page, context }, use) => {
        await use(new JdeSummaryAvailabilityPage(page, context));
    },
});
