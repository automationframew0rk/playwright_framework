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

public async clickOrderManagement(): Promise<void> {
        await this.click('text=Order Management', 'Order Management menu', 'click');
    }

public async clickSalesOrderManagement(): Promise<void> {
        await this.click('text=Sales Order Management', 'Sales Order Management menu', 'click');
    }

public async clickDailySalesOrderManagementProcessing(): Promise<void> {
        await this.click('text=Daily Sales Order Management Processing', 'Daily Sales Order Management Processing menu', 'click');
    }

public async clickSalesOrderProcessing(): Promise<void> {
        await this.click('text=Sales Order Processing', 'Sales Order Processing menu', 'click');
    }

public async clickEnterOrdersHeader(): Promise<void> {
        await this.click('text=Application: P4210, Form: W4210H, Version: ZJDE0006', 'Enter Orders Header menu', 'click');
    }

public async clickAddIcon(): Promise<void> {
        await this.clickinFrame('#e1menuAppIframe', '#hc_Add', 'Add icon', 'click', 0);
    }

public async enterSoldTo(soldTo: string): Promise<void> {
        await this.typeinFrame('#e1menuAppIframe', 'label:has-text("Long Address Number") + input, [aria-label="Long Address Number"]', 'Sold To', soldTo);
    }

public async enterShipTo(shipTo: string): Promise<void> {
        await this.typeinFrame('#e1menuAppIframe', 'label:has-text("Long Address Number-Shipto") + input, [aria-label="Long Address Number-Shipto"]', 'Ship To', shipTo);
    }

public async enterRequestedDate(requestedDate: string): Promise<void> {
        await this.typeinFrame('#e1menuAppIframe', '[name="0_66"]', 'Requested Date', requestedDate);
    }

public async enterCustomerPO(customerPO: string): Promise<void> {
        await this.typeinFrame('#e1menuAppIframe', '[name="0_92"]', 'Customer PO', customerPO);
    }

public async clickOkIcon(): Promise<void> {
        await this.clickinFrame('#e1menuAppIframe', '#hc_OK', 'OK icon', 'click', 0);
    }

public async verifyEnterOrdersHeaderTitle(expectedTitle: string): Promise<void> {
        const title = await this.getTitle();
        expect(title).toMatch(new RegExp(expectedTitle, 'i'));
    }

public async storeOrderNumber(): Promise<void> {
        const ord = (await this.page.locator('[id="C0_17"]').inputValue()).trim();
        this.orderNumber = ord;
    }

public getOrderNumber(): string {
        return this.orderNumber;
    }

public async enterQuantityOrdered(quantity: string): Promise<void> {
        await this.type('label:has-text("Quantity Ordered") + input, [aria-label="Quantity Ordered"]', 'Quantity Ordered', quantity);
    }

public async clickSalesOrderDetail(): Promise<void> {
        await this.click('text=Application: P4210, Form: W4210E, Version: ZJDE0001', 'Sales Order Detail menu', 'click');
    }

public async enterOrderNumber(orderNumber: string): Promise<void> {
        await this.typeinFrame('#e1menuAppIframe', '#C0_9', 'Order Number', orderNumber);
    }

public async verifyCustomerPOContains(expectedValue: string): Promise<void> {
        const gridSpec = {"headerId":"jdeGridHeaderBack0_1","bodyId":"jdeGridBack0_1","colIndex":"20","headerText":"Customer PO"};
        const gridExpected = expectedValue;
        const gridSetup = await (async () => {
          for (const candidate of this.page.frames()) {
            const prepared = await candidate.evaluate((spec) => {
              const norm = (text) => String(text || '').replace(/\s+/g, ' ').trim();
              const attr = (node, name) => node && node.getAttribute ? node.getAttribute(name) : null;
              const headerBox = document.getElementById(spec.headerId);
              const bodyBox = document.getElementById(spec.bodyId);
              if (!headerBox || !bodyBox) return null;
              const headerNodes = Array.from(headerBox.querySelectorAll('th,[role=columnheader],.JSGridHeaderCell,[colindex],[aria-colindex],[data-colindex]'));
              const header = headerNodes.find((node) => {
                const index = attr(node, 'colindex') || attr(node, 'aria-colindex') || attr(node, 'data-colindex');
                return String(index) === spec.colIndex && norm(node.textContent).toLowerCase() === norm(spec.headerText).toLowerCase();
              });
              if (!header || !header.getBoundingClientRect) return null;
              const aggregateName = (node) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
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
        if (!gridSetup) throw new Error('Grid column not found: Customer PO');
        const readGridCells = async () => gridSetup.frame.evaluate(({ spec, aggregateYs }) => {
          const norm = (text) => String(text || '').replace(/\s+/g, ' ').trim();
          const attr = (node, name) => node && node.getAttribute ? node.getAttribute(name) : null;
          const bodyBox = document.getElementById(spec.bodyId);
          if (!bodyBox) return { values: [], reason: 'grid-body-missing' };
          const rowSelector = 'tr,[role=row]';
          const cellSelector = 'td,th,[role=cell],[role=gridcell],[role=rowheader]';
          const aggregateName = (node) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
          const visible = (node) => {
            const rect = node.getBoundingClientRect();
            const style = window.getComputedStyle(node);
            return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
          };
          const values = [];
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
          message: 'Waiting for one rendered data cell under grid column "Customer PO"',
          timeout: 10000,
          intervals: [100, 150, 250, 500],
        }).toBe(1);
        const gridRead = await readGridCells();
        expect(gridRead.values, 'Expected exactly one data cell under grid column "Customer PO"').toHaveLength(1);
        const normalizeGridValue = (input) => String(input == null ? '' : input).replace(/\s+/g, ' ').trim().toLowerCase();
        expect(normalizeGridValue(gridRead.values[0])).toContain(normalizeGridValue(gridExpected));
    }

public async verifyQuantityOrderedContains(expectedValue: number): Promise<void> {
        const gridSpec = {"headerId":"jdeGridHeaderBack0_1","bodyId":"jdeGridBack0_1","colIndex":"10","headerText":"Quantity"};
        const gridExpected = expectedValue.toString();
        const gridSetup = await (async () => {
          for (const candidate of this.page.frames()) {
            const prepared = await candidate.evaluate((spec) => {
              const norm = (text) => String(text || '').replace(/\s+/g, ' ').trim();
              const attr = (node, name) => node && node.getAttribute ? node.getAttribute(name) : null;
              const headerBox = document.getElementById(spec.headerId);
              const bodyBox = document.getElementById(spec.bodyId);
              if (!headerBox || !bodyBox) return null;
              const headerNodes = Array.from(headerBox.querySelectorAll('th,[role=columnheader],.JSGridHeaderCell,[colindex],[aria-colindex],[data-colindex]'));
              const header = headerNodes.find((node) => {
                const index = attr(node, 'colindex') || attr(node, 'aria-colindex') || attr(node, 'data-colindex');
                return String(index) === spec.colIndex && norm(node.textContent).toLowerCase() === norm(spec.headerText).toLowerCase();
              });
              if (!header || !header.getBoundingClientRect) return null;
              const aggregateName = (node) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
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
        if (!gridSetup) throw new Error('Grid column not found: Quantity ordered');
        const readGridCells = async () => gridSetup.frame.evaluate(({ spec, aggregateYs }) => {
          const norm = (text) => String(text || '').replace(/\s+/g, ' ').trim();
          const attr = (node, name) => node && node.getAttribute ? node.getAttribute(name) : null;
          const bodyBox = document.getElementById(spec.bodyId);
          if (!bodyBox) return { values: [], reason: 'grid-body-missing' };
          const rowSelector = 'tr,[role=row]';
          const cellSelector = 'td,th,[role=cell],[role=gridcell],[role=rowheader]';
          const aggregateName = (node) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
          const visible = (node) => {
            const rect = node.getBoundingClientRect();
            const style = window.getComputedStyle(node);
            return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
          };
          const values = [];
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
          message: 'Waiting for one rendered data cell under grid column "Quantity ordered"',
          timeout: 10000,
          intervals: [100, 150, 250, 500],
        }).toBe(1);
        const gridRead = await readGridCells();
        expect(gridRead.values, 'Expected exactly one data cell under grid column "Quantity ordered"').toHaveLength(1);
        const normalizeGridValue = (input) => String(input == null ? '' : input).replace(/\s+/g, ' ').trim().toLowerCase();
        expect(normalizeGridValue(gridRead.values[0])).toContain(normalizeGridValue(gridExpected));
    }

public async verifySecondItemNumberContains(expectedValue: string): Promise<void> {
        const gridSpec = {"headerId":"jdeGridHeaderBack0_1","bodyId":"jdeGridBack0_1","colIndex":"15","headerText":"2nd Item Number"};
        const gridExpected = expectedValue;
        const gridSetup = await (async () => {
          for (const candidate of this.page.frames()) {
            const prepared = await candidate.evaluate((spec) => {
              const norm = (text) => String(text || '').replace(/\s+/g, ' ').trim();
              const attr = (node, name) => node && node.getAttribute ? node.getAttribute(name) : null;
              const headerBox = document.getElementById(spec.headerId);
              const bodyBox = document.getElementById(spec.bodyId);
              if (!headerBox || !bodyBox) return null;
              const headerNodes = Array.from(headerBox.querySelectorAll('th,[role=columnheader],.JSGridHeaderCell,[colindex],[aria-colindex],[data-colindex]'));
              const header = headerNodes.find((node) => {
                const index = attr(node, 'colindex') || attr(node, 'aria-colindex') || attr(node, 'data-colindex');
                return String(index) === spec.colIndex && norm(node.textContent).toLowerCase() === norm(spec.headerText).toLowerCase();
              });
              if (!header || !header.getBoundingClientRect) return null;
              const aggregateName = (node) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
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
        if (!gridSetup) throw new Error('Grid column not found: 2nd Item Number');
        const readGridCells = async () => gridSetup.frame.evaluate(({ spec, aggregateYs }) => {
          const norm = (text) => String(text || '').replace(/\s+/g, ' ').trim();
          const attr = (node, name) => node && node.getAttribute ? node.getAttribute(name) : null;
          const bodyBox = document.getElementById(spec.bodyId);
          if (!bodyBox) return { values: [], reason: 'grid-body-missing' };
          const rowSelector = 'tr,[role=row]';
          const cellSelector = 'td,th,[role=cell],[role=gridcell],[role=rowheader]';
          const aggregateName = (node) => ['sigma', 'σ', '∑', 'total', 'subtotal', 'grand total'].includes(norm(attr(node, 'alt') || attr(node, 'title') || attr(node, 'aria-label')).toLowerCase());
          const visible = (node) => {
            const rect = node.getBoundingClientRect();
            const style = window.getComputedStyle(node);
            return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
          };
          const values = [];
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
          message: 'Waiting for one rendered data cell under grid column "2nd Item Number"',
          timeout: 10000,
          intervals: [100, 150, 250, 500],
        }).toBe(1);
        const gridRead = await readGridCells();
        expect(gridRead.values, 'Expected exactly one data cell under grid column "2nd Item Number"').toHaveLength(1);
        const normalizeGridValue = (input) => String(input == null ? '' : input).replace(/\s+/g, ' ').trim().toLowerCase();
        expect(normalizeGridValue(gridRead.values[0])).toContain(normalizeGridValue(gridExpected));
    }
