import { BrowserContext, expect, Page } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

export class JdeSummaryAvailabilityPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    /**
     * Navigates to the given URL.
     * @param url The URL to navigate to.
     */
    async navigateToUrl(url: string) {
        await this.loadApp(url);
    }

    /**
     * Types the username into the username input field.
     * @param username The username to type.
     */
    async typeUsername(username: string) {
        await this.type(selectors.jdeSummaryAvailability.usernameInput, 'Username', username);
    }

    /**
     * Types the password into the password input field.
     * @param password The password to type.
     */
    async typePassword(password: string) {
        await this.type(selectors.jdeSummaryAvailability.passwordInput, 'Password', password);
    }

    /**
     * Clicks the Sign In button.
     */
    async clickSignIn() {
        await this.click(selectors.jdeSummaryAvailability.signInButton, 'Sign In', 'Button');
    }

    /**
     * Verifies the page title contains the expected text.
     * @param expectedTitle The expected substring in the page title.
     */
    async verifyPageTitle(expectedTitle: string) {
        await this.spinnerDisappear();
        const title = await this.getTitle();
        expect(title).toContain(expectedTitle);
    }

    /**
     * Clicks the Navigator button.
     */
    async clickNavigator() {
        await this.click(selectors.jdeSummaryAvailability.navigatorButton, 'Navigator', 'Button');
    }

    /**
     * Clicks the EnterpriseOne Menus link.
     */
    async clickEnterpriseOneMenus() {
        await this.click(selectors.jdeSummaryAvailability.enterpriseOneMenusLink, 'EnterpriseOne Menus', 'Link');
    }

    /**
     * Clicks the Logistics Management link.
     */
    async clickLogisticsManagement() {
        await this.click(selectors.jdeSummaryAvailability.logisticsManagementLink, 'Logistics Management', 'Link');
    }

    /**
     * Clicks the Inventory Management link.
     */
    async clickInventoryManagement() {
        await this.click(selectors.jdeSummaryAvailability.inventoryManagementLink, 'Inventory Management', 'Link');
    }

    /**
     * Clicks the Daily Processing link.
     */
    async clickDailyProcessing() {
        await this.click(selectors.jdeSummaryAvailability.dailyProcessingLink, 'Daily Processing', 'Link');
    }

    /**
     * Clicks the Inventory Inquiries link.
     */
    async clickInventoryInquiries() {
        await this.click(selectors.jdeSummaryAvailability.inventoryInquiriesLink, 'Inventory Inquiries', 'Link');
    }

    /**
     * Clicks the Summary Availability link.
     */
    async clickSummaryAvailability() {
        await this.click(selectors.jdeSummaryAvailability.summaryAvailabilityLink, 'Summary Availability', 'Link');
    }

    /**
     * Enters the Item Number in the frame input.
     * @param itemNumber The item number to enter.
     */
    async enterItemNumber(itemNumber: string) {
        await this.typeinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.itemNumberInput, 'Item Number', itemNumber);
    }

    /**
     * Enters the Branch/Plant in the frame input.
     * @param branchPlant The branch/plant value to enter.
     */
    async enterBranchPlant(branchPlant: string) {
        await this.typeinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.branchPlantInput, 'Branch/Plant', branchPlant);
    }

    /**
     * Selects the given option in the Display options dropdown inside the frame.
     * @param option The option to select.
     */
    async selectDisplayOption(option: string) {
        await this.clickinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.displayOptionsDropdown, 'Display options', 'click', 0);
        await this.clickinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.displayOptionItem(option), option, 'click', 0);
    }

    /**
     * Clicks the Find icon inside the frame.
     */
    async clickFindIcon() {
        await this.clickinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.findIcon, 'Find icon', 'click', 0);
    }

    /**
     * Verifies the On Hand value in the grid inside the frame.
     * @param expectedValue The expected On Hand value.
     */
    async verifyOnHand(expectedValue: string) {
        // The complex grid verification logic is implemented here
        // We reuse the page and frame context to evaluate the grid content
        const frame = this.page.frameLocator(selectors.jdeSummaryAvailability.frameLocator);

        // Wait for the grid to be ready and verify the value
        // Using expect.poll to wait for the cell value
        await expect.poll(async () => {
            const value = await frame.locator(selectors.jdeSummaryAvailability.onHandCell).textContent();
            return value?.trim() || '';
        }, {
            message: `Waiting for On Hand value to be '${expectedValue}'`,
            timeout: 10000,
            intervals: [100, 200, 500, 1000]
        }).toBe(expectedValue);
    }
}
