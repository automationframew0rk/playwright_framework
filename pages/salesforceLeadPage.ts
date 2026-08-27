import { BrowserContext, expect, Page } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

export class SalesforceLeadPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    /**
     * Clicks the App Launcher button.
     */
    async appLauncher() {
        await this.click(selectors.lead.appLauncherBtn, 'App Launcher', 'Button');
    }

    /**
     * Types a search term into the app search input.
     * @param value The search term to type.
     */
    async searchApp(value: string) {
        await this.type(selectors.lead.appSearchInput, 'Search apps and items...', value);
    }

    /**
     * Clicks on the specified app from the app launcher.
     * @param appName The name of the app to click.
     */
    async clickApp(appName: string) {
        await this.click(selectors.lead.appName(appName), appName, 'App link');
    }

    /**
     * Clicks the New button to create a new lead.
     */
    async newButton() {
        await this.click(selectors.lead.newBtn, 'New', 'Button');
    }

    /**
     * Selects a salutation from the dropdown.
     * @param salutation The salutation to select (e.g., "Mr.").
     */
    async selectSalutation(salutation: string) {
        await this.click(selectors.lead.salutationDropdown, 'Salutation', 'Dropdown');
        await this.click(selectors.lead.salutationOption(salutation), salutation, 'Option');
    }

    /**
     * Fills the First Name field.
     * @param firstName The first name to fill.
     */
    async fillFirstName(firstName: string) {
        await this.type(selectors.lead.firstNameInput, 'First Name', firstName);
    }

    /**
     * Fills the Last Name field.
     * @param lastName The last name to fill.
     */
    async fillLastName(lastName: string) {
        await this.type(selectors.lead.lastNameInput, 'Last Name', lastName);
    }

    /**
     * Fills the Company field.
     * @param company The company name to fill.
     */
    async fillCompany(company: string) {
        await this.type(selectors.lead.companyInput, 'Company', company);
    }

    /**
     * Clicks the Save button to save the lead.
     */
    async saveButton() {
        await this.click(selectors.lead.saveBtn, 'Save', 'Button');
    }

    /**
     * Verifies that the lead with the given full name is visible.
     * @param fullName The full name to verify (e.g., "Mr. John Doe").
     */
    async verifyLeadName(fullName: string) {
        await expect(this.page.locator(selectors.lead.leadName(fullName))).toBeVisible();
    }
}
