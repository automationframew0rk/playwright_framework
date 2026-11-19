import { test as baseTest } from '@playwright/test';
import { SalesforceAccountPage } from '../pages/salesforceAccountPage';
import { SalesforceHomePage } from '../pages/salesforceHomePage';
import { SalesforceLoginPage } from '../pages/salesforceLogin';
import { TricentisAutomobilePage } from '../pages/tricentisAutomobilePage';

type SalesforceFixtures = {
    SalesforceLogin: SalesforceLoginPage;
    SalesforceHome: SalesforceHomePage;
    SalesforceAccount: SalesforceAccountPage;
    TricentisAutomobile: TricentisAutomobilePage;
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

    TricentisAutomobile: async ({ page, context }, use) => {
        await use(new TricentisAutomobilePage(page, context));
    },
});
