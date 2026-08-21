import { BrowserContext, expect, Page } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

export class SalesforceAccountPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    async newButton() {
        await this.validateElementVisibility(selectors.accounts.newBtn, 'New Button');
        await this.click(selectors.accounts.newBtn, 'New', 'Button');
    }

    async accountName(value: string) {
        await this.type(selectors.accounts.accountNameInput, 'Account Name', value);
    }

    async phoneNumber(value: string) {
        await this.type(selectors.accounts.phoneInput, 'Phone', value);
    }

    async saveButton() {
        await this.click(selectors.accounts.saveBtn, 'Save', 'Button');
    }

    async verifyAccountName(value: string) {
        await this.spinnerDisappear();
        await expect(this.page.locator(selectors.accounts.verificationText)).toContainText(value);
    }

    async searchAccount(accountName: string) {
        await this.type(selectors.accounts.searchInput, 'Search Accounts', accountName);
        await this.keyboardAction(selectors.accounts.searchInput, 'Enter', 'Input', 'Search Accounts');
        await this.spinnerDisappear();
    }

    async clickAccountRecord(accountName: string) {
        await this.click(selectors.accounts.accountRecordLink(accountName), accountName, 'Account link');
    }

    async editAccount() {
        await this.click(selectors.accounts.editBtn, 'Edit', 'Button');
    }

    async deleteAccount() {
        await this.click(selectors.accounts.deleteBtn, 'Delete', 'Button');
        await this.click(selectors.accounts.confirmDeleteBtn, 'Confirm Delete', 'Button');
    }

    async verifyAccountDeleted(accountName: string) {
        const deletedToast = this.page.locator(selectors.accounts.toastMessage)
            .filter({ hasText: 'was deleted' })
            .first();
        await expect(deletedToast).toContainText(accountName);
    }
}
