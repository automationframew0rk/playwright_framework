import { BrowserContext, expect, Page } from '@playwright/test';
import { PlaywrightWrapper } from '../helpers/playwright';
import { selectors } from './selectors';

export class AutomobileInsurancePage extends PlaywrightWrapper {
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
     * Clicks on the Automobile link in the header.
     */
    async clickAutomobile() {
        await this.click(selectors.automobileInsurance.automobileHeader, 'Automobile', 'Link');
    }

    /**
     * Selects a make from the Make dropdown.
     * @param make The make to select.
     */
    async selectMake(make: string) {
        await this.selectDropdown(selectors.automobileInsurance.makeDropdown, { label: make });
    }

    /**
     * Enters the engine performance value.
     * @param value The engine performance value to enter.
     */
    async enterEnginePerformance(value: string) {
        await this.type(selectors.automobileInsurance.enginePerformanceInput, 'Engine Performance', value);
    }

    /**
     * Enters the date of manufacture.
     * @param date The date of manufacture to enter.
     */
    async enterDateOfManufacture(date: string) {
        await this.type(selectors.automobileInsurance.dateOfManufactureInput, 'Date of Manufacture', date);
    }

    /**
     * Selects the number of seats.
     * @param seats The number of seats to select.
     */
    async selectNumberOfSeats(seats: string) {
        await this.selectDropdown(selectors.automobileInsurance.numberOfSeatsDropdown, { label: seats });
    }

    /**
     * Selects the fuel type.
     * @param fuelType The fuel type to select.
     */
    async selectFuelType(fuelType: string) {
        await this.selectDropdown(selectors.automobileInsurance.fuelTypeDropdown, { label: fuelType });
    }

    /**
     * Enters the list price.
     * @param price The list price to enter.
     */
    async enterListPrice(price: string) {
        await this.type(selectors.automobileInsurance.listPriceInput, 'List Price', price);
    }

    /**
     * Enters the license plate number.
     * @param licensePlate The license plate number to enter.
     */
    async enterLicensePlateNumber(licensePlate: string) {
        await this.type(selectors.automobileInsurance.licensePlateNumberInput, 'License Plate Number', licensePlate);
    }

    /**
     * Enters the annual mileage.
     * @param mileage The annual mileage to enter.
     */
    async enterAnnualMileage(mileage: string) {
        await this.type(selectors.automobileInsurance.annualMileageInput, 'Annual Mileage [mi]', mileage);
    }

    /**
     * Clicks the Next button to proceed.
     */
    async clickNext() {
        await this.click(selectors.automobileInsurance.nextButton, 'Next', 'Button');
    }

    /**
     * Verifies the page title matches the expected title.
     * @param expectedTitle The expected page title.
     */
    async verifyPageTitle(expectedTitle: string) {
        await this.spinnerDisappear();
        await expect(this.page).toHaveTitle(new RegExp(expectedTitle, 'i'));
    }
}
