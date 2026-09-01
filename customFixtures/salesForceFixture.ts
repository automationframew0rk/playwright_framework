import { test as baseTest } from '@playwright/test';
import { SalesforceAccountPage } from '../pages/salesforceAccountPage';
import { SalesforceHomePage } from '../pages/salesforceHomePage';
import { SalesforceLeadPage } from '../pages/salesforceLeadPage';
import { SalesforceLoginPage } from '../pages/salesforceLogin';

type SalesforceFixtures = {
    SalesforceLogin: SalesforceLoginPage;
    SalesforceHome: SalesforceHomePage;
    SalesforceAccount: SalesforceAccountPage;
    SalesforceLead: SalesforceLeadPage;
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

    SalesforceLead: async ({ page, context }, use) => {
        await use(new SalesforceLeadPage(page, context));
    },
});
