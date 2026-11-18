import { BrowserContext, expect, Page } from '@playwright/test';
import { URLConstants } from '../constants/urlConstants';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

/**
 * Page object for Automobile Insurance vehicle data page.
 */
export class AutomobileInsurancePage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    /**
     * Navigates to the automobile insurance application.
     */
    async navigateToApplication() {
        await this.loadApp(URLConstants.adminURL);
    }

    /**
     * Clicks on the Automobile header tab.
     */
    async clickAutomobileHeader() {
        await this.click(selectors.automobileInsurance.automobileHeader, 'Automobile', 'Header Link');
    }

    /**
     * Selects make from the dropdown.
     * @param value - The make to select.
     */
    async selectMake(value: string) {
        await this.selectDropdown(selectors.automobileInsurance.makeDropdown, { label: value });
    }

    /**
     * Enters engine performance value.
     * @param value - The engine performance to enter.
     */
    async enterEnginePerformance(value: string) {
        await this.type(selectors.automobileInsurance.enginePerformanceInput, 'Engine Performance', value);
    }

    /**
     * Enters date of manufacture.
     * @param value - The date of manufacture to enter.
     */
    async enterDateOfManufacture(value: string) {
        await this.type(selectors.automobileInsurance.dateOfManufactureInput, 'Date of Manufacture', value);
    }

    /**
     * Selects number of seats from the dropdown.
     * @param value - The number of seats to select.
     */
    async selectNumberOfSeats(value: string) {
        await this.selectDropdown(selectors.automobileInsurance.numberOfSeatsDropdown, { label: value });
    }

    /**
     * Selects fuel type from the dropdown.
     * @param value - The fuel type to select.
     */
    async selectFuelType(value: string) {
        await this.selectDropdown(selectors.automobileInsurance.fuelTypeDropdown, { label: value });
    }

    /**
     * Enters list price.
     * @param value - The list price to enter.
     */
    async enterListPrice(value: string) {
        await this.type(selectors.automobileInsurance.listPriceInput, 'List Price', value);
    }

    /**
     * Enters license plate number.
     * @param value - The license plate number to enter.
     */
    async enterLicensePlateNumber(value: string) {
        await this.type(selectors.automobileInsurance.licensePlateNumberInput, 'License Plate Number', value);
    }

    /**
     * Enters annual mileage.
     * @param value - The annual mileage to enter.
     */
    async enterAnnualMileage(value: string) {
        await this.type(selectors.automobileInsurance.annualMileageInput, 'Annual Mileage', value);
    }

    /**
     * Clicks on the Next button.
     */
    async clickNext() {
        await this.click(selectors.automobileInsurance.nextButton, 'Next', 'Button');
    }

    /**
     * Verifies the page title.
     * @param value - The expected page title.
     */
    async verifyPageTitle(value: string) {
        await expect(this.page).toHaveTitle(new RegExp(value, 'i'));
    }
}
