import { test as baseTest } from '@playwright/test';
import { AutomobileInsurancePage } from '../pages/automobileInsurancePage';
import { SalesforceAccountPage } from '../pages/salesforceAccountPage';
import { SalesforceHomePage } from '../pages/salesforceHomePage';
import { SalesforceLoginPage } from '../pages/salesforceLogin';

type SalesforceFixtures = {
    SalesforceLogin: SalesforceLoginPage;
    SalesforceHome: SalesforceHomePage;
    SalesforceAccount: SalesforceAccountPage;
    AutomobileInsurance: AutomobileInsurancePage;
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

    AutomobileInsurance: async ({ page, context }, use) => {
        await use(new AutomobileInsurancePage(page, context));
    },
});
