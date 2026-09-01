import { BrowserContext, expect, Page } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

export class SalesforceLeadPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    /**
     * Clicks the New button to create a new Lead.
     */
    async newButton() {
        await this.validateElementVisibility(selectors.lead.newBtn, 'New Button');
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
     * @param firstName The first name to enter.
     */
    async fillFirstName(firstName: string) {
        await this.type(selectors.lead.firstNameInput, 'First Name', firstName);
    }

    /**
     * Fills the Last Name field.
     * @param lastName The last name to enter.
     */
    async fillLastName(lastName: string) {
        await this.type(selectors.lead.lastNameInput, 'Last Name', lastName);
    }

    /**
     * Fills the Company field.
     * @param company The company name to enter.
     */
    async fillCompany(company: string) {
        await this.type(selectors.lead.companyInput, 'Company', company);
    }

    /**
     * Clicks the Save button to save the Lead.
     */
    async saveButton() {
        await this.click(selectors.lead.saveBtn, 'Save', 'Button');
    }

    /**
     * Verifies that the Lead with the given full name is visible.
     * @param fullName The full name to verify (e.g., "Mr. John Doe").
     */
    async verifyLeadName(fullName: string) {
        await this.spinnerDisappear();
        await expect(this.page.locator(selectors.lead.verificationText(fullName))).toBeVisible();
    }
}
