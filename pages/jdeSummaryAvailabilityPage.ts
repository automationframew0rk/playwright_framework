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
    async navigateTo(url: string) {
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
        await expect(this.page).toHaveTitle(new RegExp(expectedTitle, 'i'));
    }

    /**
     * Clicks the Navigator menu.
     */
    async clickNavigator() {
        await this.click(selectors.jdeSummaryAvailability.navigatorMenu, 'Navigator', 'Menu');
    }

    /**
     * Clicks the EnterpriseOne Menus option.
     */
    async clickEnterpriseOneMenus() {
        await this.click(selectors.jdeSummaryAvailability.enterpriseOneMenus, 'EnterpriseOne Menus', 'Menu');
    }

    /**
     * Clicks the Logistics Management option.
     */
    async clickLogisticsManagement() {
        await this.click(selectors.jdeSummaryAvailability.logisticsManagement, 'Logistics Management', 'Menu');
    }

    /**
     * Clicks the Inventory Management option.
     */
    async clickInventoryManagement() {
        await this.click(selectors.jdeSummaryAvailability.inventoryManagement, 'Inventory Management', 'Menu');
    }

    /**
     * Clicks the Daily Processing option.
     */
    async clickDailyProcessing() {
        await this.click(selectors.jdeSummaryAvailability.dailyProcessing, 'Daily Processing', 'Menu');
    }

    /**
     * Clicks the Inventory Inquiries option.
     */
    async clickInventoryInquiries() {
        await this.click(selectors.jdeSummaryAvailability.inventoryInquiries, 'Inventory Inquiries', 'Menu');
    }

    /**
     * Clicks the Summary Availability option.
     */
    async clickSummaryAvailability() {
        await this.click(selectors.jdeSummaryAvailability.summaryAvailability, 'Summary Availability', 'Menu');
    }

    /**
     * Enters the Item Number in the frame.
     * @param itemNumber The item number to enter.
     */
    async enterItemNumber(itemNumber: string) {
        await this.typeinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.itemNumberInput, 'Item Number', itemNumber);
    }

    /**
     * Enters the Branch/Plant in the frame.
     * @param branchPlant The branch/plant value to enter.
     */
    async enterBranchPlant(branchPlant: string) {
        await this.typeinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.branchPlantInput, 'Branch/Plant', branchPlant);
    }

    /**
     * Selects the given option in Display options inside the frame.
     * @param option The option to select.
     */
    async selectDisplayOption(option: string) {
        await this.clickinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.displayOptionsDropdown, 'Display options', 'click', 0);
        await this.click(option, option, 'Option');
    }

    /**
     * Clicks the Find icon inside the frame.
     */
    async clickFindIcon() {
        await this.clickinFrame(selectors.jdeSummaryAvailability.frameLocator, selectors.jdeSummaryAvailability.findIcon, 'Find icon', 'click', 0);
    }

    /**
     * Verifies the On Hand value in the grid.
     * @param expectedValue The expected On Hand value.
     */
    async verifyOnHand(expectedValue: string) {
        await this.spinnerDisappear();
        // Custom evaluation to verify grid cell value
        const gridSpec = { headerId: 'jdeGridHeaderBack0_319', bodyId: 'jdeGridBack0_319', colIndex: '4', headerText: 'On Hand' };
        const gridExpected = expectedValue;

        const gridSetup = await (async () => {
            for (const candidate of this.page.frames()) {
                const prepared = await candidate.evaluate((spec) => {
                    const norm = (text: string) => String(text || '').replace(/\s+/g, ' ').trim();
                    const attr = (node: any, name: string) => node && node.getAttribute ? node.getAttribute(name) : null;
                    const headerBox = document.getElementById(spec.headerId);
                    const bodyBox = document.getElementById(spec.bodyId);
                    if (!headerBox || !bodyBox) return null;
                    const headerNodes = Array.from(headerBox.querySelectorAll('th,[role=columnheader],.JSGridHeaderCell,[colindex],[aria-colindex],[data-colindex]'));
                    const header = headerNodes.find((node) => {
                        const index = attr(node, 'colindex') || attr(node, 'aria-colindex') || attr(node, 'data-colindex');
                        return String(index) === spec.colIndex && norm(node.textContent).toLowerCase() === norm(spec.headerText).toLowerCase();
                    });
                    if (!header || !header.getBoundingClientRect) return null;
                    const aggregateName = (node: any) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
                    const rowSelector = 'tr,[role=row]';
                    const aggregateYs = Array.from(bodyBox.querySelectorAll(rowSelector))
                        .filter((row) => Array.from(row.querySelectorAll('img,[role=img]')).some(aggregateName) || /^(grand total|subtotal|total)\b/i.test(norm(row.textContent)))
                        .map((row) => Math.round(row.getBoundingClientRect().top));
                    const memoRoot = Reflect.get(window, '__nocodeGeneratedGridAggregateBands') || {};
                    const previous = memoRoot[spec.bodyId];
                    if (previous && Date.now() - previous.at <= 15000) {
                        for (const y of previous.ys || []) if (!aggregateYs.some((seen) => Math.abs(seen - y) <= 3)) aggregateYs.push(y);
                    }
                    memoRoot[spec.bodyId] = { at: Date.now(), ys: aggregateYs };
                    Reflect.set(window, '__nocodeGeneratedGridAggregateBands', memoRoot);
                    const headerRect = header.getBoundingClientRect();
                    const boxRect = headerBox.getBoundingClientRect();
                    const headerMax = Math.max(0, Number(headerBox.scrollWidth || 0) - Number(headerBox.clientWidth || 0));
                    const bodyMax = Math.max(0, Number(bodyBox.scrollWidth || 0) - Number(bodyBox.clientWidth || 0));
                    const logicalCenter = Number(headerBox.scrollLeft || 0) + (headerRect.left - boxRect.left) + headerRect.width / 2;
                    const desiredHeader = Math.max(0, Math.min(headerMax, logicalCenter - Number(headerBox.clientWidth || 0) / 2));
                    const desiredBody = headerMax > 0 ? desiredHeader * bodyMax / headerMax : Math.max(0, Math.min(bodyMax, desiredHeader));
                    bodyBox.scrollLeft = desiredBody;
                    bodyBox.dispatchEvent(new Event('scroll'));
                    headerBox.scrollLeft = desiredHeader;
                    headerBox.dispatchEvent(new Event('scroll'));
                    return { aggregateYs };
                }, gridSpec).catch(() => null);
                if (prepared) return { frame: candidate, aggregateYs: prepared.aggregateYs };
            }
            return null;
        })();

        if (!gridSetup) throw new Error('Grid column not found: On Hand');

        const readGridCells = async () => gridSetup.frame.evaluate(({ spec, aggregateYs }) => {
            const norm = (text: string) => String(text || '').replace(/\s+/g, ' ').trim();
            const attr = (node: any, name: string) => node && node.getAttribute ? node.getAttribute(name) : null;
            const bodyBox = document.getElementById(spec.bodyId);
            if (!bodyBox) return { values: [], reason: 'grid-body-missing' };
            const rowSelector = 'tr,[role=row]';
            const cellSelector = 'td,th,[role=cell],[role=gridcell],[role=rowheader]';
            const aggregateName = (node: any) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
            const visible = (node: any) => {
                const rect = node.getBoundingClientRect();
                const style = window.getComputedStyle(node);
                return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
            };
            const values: string[] = [];
            for (const row of Array.from(bodyBox.querySelectorAll(rowSelector))) {
                if (!visible(row) || row.querySelector(rowSelector) || row.querySelectorAll('input,select,textarea,[contenteditable=true]').length >= 2) continue;
                const y = Math.round(row.getBoundingClientRect().top);
                const markedAggregate = Array.from(row.querySelectorAll('img,[role=img]')).some(aggregateName) || /^(grand total|subtotal|total)\b/i.test(norm(row.textContent));
                if (markedAggregate || (aggregateYs || []).some((known) => Math.abs(known - y) <= 3)) continue;
                const cells = Array.from(row.querySelectorAll(cellSelector)).filter((cell) => cell.closest(rowSelector) === row && visible(cell));
                const cell = cells.find((candidate) => {
                    const index = attr(candidate, 'colindex') || attr(candidate, 'aria-colindex') || attr(candidate, 'data-colindex');
                    return String(index) === spec.colIndex;
                });
                if (!cell) continue;
                const control = cell.matches('input,select,textarea') ? cell : cell.querySelector('input,select,textarea');
                values.push(norm(control && control.value != null ? control.value : cell.textContent));
            }
            return { values };
        }, { spec: gridSpec, aggregateYs: gridSetup.aggregateYs });

        await expect.poll(async () => (await readGridCells()).values.length, {
            message: 'Waiting for one rendered data cell under grid column "On Hand"',
            timeout: 10000,
            intervals: [100, 150, 250, 500],
        }).toBe(1);

        const gridRead = await readGridCells();
        expect(gridRead.values, 'Expected exactly one data cell under grid column "On Hand"').toHaveLength(1);

        const gridNumber = (input: string | null) => {
            const text = String(input == null ? '' : input).replace(/[₹$€£¥]/g, '').trim();
            const indian = text.match(/[-+]?\d{1,2}(?:,\d{2})*(?:,\d{3})(?:\.\d+)?/);
            const western = text.match(/[-+]?\d{1,3}(?:,\d{3})+(?:\.\d+)?|[-+]?\d*\.?\d+/);
            const match = indian || western;
            return match ? Number.parseFloat(match[0].replace(/,/g, '')) : null;
        };

        const gridActualNumber = gridNumber(gridRead.values[0]);
        const gridExpectedNumber = gridNumber(gridExpected);

        expect(gridActualNumber, 'Grid cell did not contain a numeric value').not.toBeNull();
        expect(gridExpectedNumber, 'Expected grid value was not numeric').not.toBeNull();
        expect(gridActualNumber).toBe(gridExpectedNumber);
    }
}
