import { BrowserContext, Page } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

/**
 * Page object for Tricentis automobile vehicle data interactions.
 */
export class TricentisAutomobilePage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    /**
     * Navigates to the Tricentis sample application.
     *
     * @param url - Application URL to load.
     */
    async navigateToApplication(url: string) {
        await this.loadApp(url);
    }

    /**
     * Clicks the Automobile header tab.
     */
    async clickAutomobileHeader() {
        await this.click(selectors.tricentisAutomobile.automobileHeader, 'Automobile', 'Link');
    }

    /**
     * Selects a make from the Make dropdown.
     *
     * @param value - Make value to select.
     */
    async selectMake(value: string) {
        await this.selectDropdown(selectors.tricentisAutomobile.makeDropdown, { label: value });
    }

    /**
     * Enters engine performance.
     *
     * @param value - Engine performance value.
     */
    async enterEnginePerformance(value: string) {
        await this.type(selectors.tricentisAutomobile.enginePerformanceInput, 'Engine Performance', value);
    }

    /**
     * Enters date of manufacture.
     *
     * @param value - Date of manufacture value.
     */
    async enterDateOfManufacture(value: string) {
        await this.type(selectors.tricentisAutomobile.dateOfManufactureInput, 'Date of Manufacture', value);
    }

    /**
     * Selects number of seats from the dropdown.
     *
     * @param value - Number of seats to select.
     */
    async selectNumberOfSeats(value: string) {
        await this.selectDropdown(selectors.tricentisAutomobile.numberOfSeatsDropdown, { label: value });
    }

    /**
     * Selects fuel type from the dropdown.
     *
     * @param value - Fuel type to select.
     */
    async selectFuelType(value: string) {
        await this.selectDropdown(selectors.tricentisAutomobile.fuelTypeDropdown, { label: value });
    }

    /**
     * Enters list price.
     *
     * @param value - List price value.
     */
    async enterListPrice(value: string) {
        await this.type(selectors.tricentisAutomobile.listPriceInput, 'List Price', value);
    }
}
