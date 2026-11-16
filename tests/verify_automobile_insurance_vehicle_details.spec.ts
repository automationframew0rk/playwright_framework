import { test } from '../customFixtures/salesForceFixture';
import { URLConstants } from '../constants/urlConstants';

test('Verify Automobile Insurance vehicle details', async ({ TricentisVehicle }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'OpenAI' },
        { type: 'TestCase', description: 'TC_AutomobileVehicleDetails' },
        { type: 'Test Description', description: 'Verify that automobile insurance vehicle details are entered successfully and navigates to Enter Insurant Data page' },
        { type: 'Category', description: 'Automobile Insurance' },
        { type: 'Type', description: 'Smoke' }
    );

    const applicationUrl = URLConstants.adminURL;
    const make = "Audi";
    const enginePerformance = "120";
    const dateOfManufacture = "07/10/2026";
    const numberOfSeats = "4";
    const fuelType = "Diesel";
    const listPrice = "30000";
    const licensePlateNumber = "ABC123";
    const annualMileage = "10000";
    const expectedTitle = "Enter Insurant Data";

    await TricentisVehicle.navigateToApplication(applicationUrl);
    await TricentisVehicle.clickAutomobileHeader();
    await TricentisVehicle.selectMake(make);
    await TricentisVehicle.enterEnginePerformance(enginePerformance);
    await TricentisVehicle.enterDateOfManufacture(dateOfManufacture);
    await TricentisVehicle.selectNumberOfSeats(numberOfSeats);
    await TricentisVehicle.selectFuelType(fuelType);
    await TricentisVehicle.enterListPrice(listPrice);
    await TricentisVehicle.enterLicensePlateNumber(licensePlateNumber);
    await TricentisVehicle.enterAnnualMileage(annualMileage);
    await TricentisVehicle.clickNext();
    await TricentisVehicle.verifyPageTitle(expectedTitle);
});