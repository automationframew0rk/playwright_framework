import { test } from '../customFixtures/salesForceFixture';
import { URLConstants } from '../constants/urlConstants';

test('Verify Automobile Insurance vehicle details', async ({ AutomobileInsurance }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC_Auto_001' },
        { type: 'Test Description', description: 'Verify Automobile Insurance vehicle details' },
        { type: 'Category', description: 'Insurance' }
    );

    await AutomobileInsurance.navigateTo(URLConstants.adminURL);
    await AutomobileInsurance.clickAutomobile();
    await AutomobileInsurance.selectMake('Audi');
    await AutomobileInsurance.enterEnginePerformance('120');
    await AutomobileInsurance.enterDateOfManufacture('07/10/2026');
    await AutomobileInsurance.selectNumberOfSeats('4');
    await AutomobileInsurance.selectFuelType('Diesel');
    await AutomobileInsurance.enterListPrice('30000');
    await AutomobileInsurance.enterLicensePlateNumber('ABC123');
    await AutomobileInsurance.enterAnnualMileage('10000');
    await AutomobileInsurance.clickNext();
    await AutomobileInsurance.verifyPageTitle('Enter Insurant Data');
});