import { BrowserContext, Page, expect } from "@playwright/test";
import { PlaywrightWrapper } from "../helpers/playwright";
import { selectors } from "./selectors";

/**
 * Page object for Tricentis automobile vehicle data entry.
 */
export class TricentisVehiclePage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    /**
     * Navigates to the Tricentis sample application.
     * @param url
     */
    public async navigateToApplication(url: string) {
        await this.loadApp(url);
    }

    /**
     * Clicks the Automobile header tab.
     */
    public async clickAutomobileHeader() {
        await this.click(selectors.tricentisVehicle.automobileHeader, "Automobile", "click");
    }

    /**
     * Selects a make from the Make dropdown.
     * @param make
     */
    public async selectMake(make: string) {
        await this.selectDropdown(selectors.tricentisVehicle.makeDropdown, { label: make });
    }

    /**
     * Enters engine performance.
     * @param enginePerformance
     */
    public async enterEnginePerformance(enginePerformance: string) {
        await this.type(selectors.tricentisVehicle.enginePerformanceInput, "Engine Performance", enginePerformance);
    }

    /**
     * Enters date of manufacture.
     * @param dateOfManufacture
     */
    public async enterDateOfManufacture(dateOfManufacture: string) {
        await this.type(selectors.tricentisVehicle.dateOfManufactureInput, "Date of Manufacture", dateOfManufacture);
    }

    /**
     * Selects number of seats from the dropdown.
     * @param seats
     */
    public async selectNumberOfSeats(seats: string) {
        await this.selectDropdown(selectors.tricentisVehicle.numberOfSeatsDropdown, { label: seats });
    }

    /**
     * Selects fuel type from the dropdown.
     * @param fuelType
     */
    public async selectFuelType(fuelType: string) {
        await this.selectDropdown(selectors.tricentisVehicle.fuelTypeDropdown, { label: fuelType });
    }

    /**
     * Enters list price.
     * @param listPrice
     */
    public async enterListPrice(listPrice: string) {
        await this.type(selectors.tricentisVehicle.listPriceInput, "List Price", listPrice);
    }

    /**
     * Enters license plate number.
     * @param licensePlateNumber
     */
    public async enterLicensePlateNumber(licensePlateNumber: string) {
        await this.type(selectors.tricentisVehicle.licensePlateNumberInput, "License Plate Number", licensePlateNumber);
    }

    /**
     * Enters annual mileage.
     * @param annualMileage
     */
    public async enterAnnualMileage(annualMileage: string) {
        await this.type(selectors.tricentisVehicle.annualMileageInput, "Annual Mileage", annualMileage);
    }

    /**
     * Clicks the Next button.
     */
    public async clickNext() {
        await this.click(selectors.tricentisVehicle.nextButton, "Next", "click");
    }

    /**
     * Verifies the page title.
     * @param expectedTitle
     */
    public async verifyPageTitle(expectedTitle: string) {
        const actualTitle = await this.getTitle();
        expect(actualTitle).toContain(expectedTitle);
    }
}
