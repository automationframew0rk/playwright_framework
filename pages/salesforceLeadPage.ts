import { BrowserContext, expect, Page } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

/**
 * Page object for Salesforce Leads page interactions.
 */
export class SalesforceLeadPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    /**
     * Clicks the New button in Leads.
     */
    async newButton() {
        await this.validateElementVisibility(selectors.leads.newBtn, 'New Button');
        await this.click(selectors.leads.newBtn, 'New', 'Button');
    }

    /**
     * Opens the salutation dropdown.
     */
    async salutation() {
        await this.click(selectors.leads.salutationDropdown, 'Salutation', 'Dropdown');
    }

    /**
     * Selects Mr. from the salutation options.
     */
    async selectMrOption() {
        await this.click(selectors.leads.salutationOptionMr, 'Mr.', 'Option');
    }

    /**
     * Enters the first name.
     * @param value First name value.
     */
    async firstName(value: string) {
        await this.type(selectors.leads.firstNameInput, 'First Name', value);
    }

    /**
     * Enters the last name.
     * @param value Last name value.
     */
    async lastName(value: string) {
        await this.type(selectors.leads.lastNameInput, 'Last Name', value);
    }

    /**
     * Enters the company name.
     * @param value Company value.
     */
    async company(value: string) {
        await this.type(selectors.leads.companyInput, 'Company', value);
    }

    /**
     * Clicks the Save button.
     */
    async saveButton() {
        await this.click(selectors.leads.saveBtn, 'Save', 'Button');
    }

    /**
     * Verifies the created lead header text.
     * @param value Expected lead header text.
     */
    async verifyLeadName(value: string) {
        await this.spinnerDisappear();
        await expect(this.page.locator(selectors.leads.leadHeader)).toContainText(value);
    }
}
