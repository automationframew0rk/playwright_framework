import { test } from '../customFixtures/salesForceFixture';
import { URLConstants } from '../constants/urlConstants';

test('Verify Automobile Insurance vehicle details', async ({ TricentisAutomobile }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'OpenAI' },
        { type: 'TestCase', description: 'TC_Automobile_001' },
        { type: 'Test Description', description: 'Verify automobile insurance vehicle details can be entered successfully' },
        { type: 'Category', description: 'Vehicle Data' },
        { type: 'Type', description: 'Smoke' }
    );

    const applicationUrl = URLConstants.adminURL;
    const make = 'Audi';
    const enginePerformance = '120';
    const dateOfManufacture = '07/10/2026';
    const numberOfSeats = '4';
    const fuelType = 'Diesel';
    const listPrice = '30000';

    await TricentisAutomobile.navigateToApplication(applicationUrl);
    await TricentisAutomobile.clickAutomobileHeader();
    await TricentisAutomobile.selectMake(make);
    await TricentisAutomobile.enterEnginePerformance(enginePerformance);
    await TricentisAutomobile.enterDateOfManufacture(dateOfManufacture);
    await TricentisAutomobile.selectNumberOfSeats(numberOfSeats);
    await TricentisAutomobile.selectFuelType(fuelType);
    await TricentisAutomobile.enterListPrice(listPrice);
});