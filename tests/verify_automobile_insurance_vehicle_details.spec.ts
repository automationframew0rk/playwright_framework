import { test } from '../customFixtures/salesForceFixture';test('Verify Automobile Insurance vehicle details', async ({ AutomobileInsurance }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'OpenAI' },
        { type: 'TestCase', description: 'TC022' },
        { type: 'Test Description', description: 'Verify that vehicle details can be entered successfully in Automobile Insurance application' },
        { type: 'Category', description: 'Automobile Insurance' },
        { type: 'Type', description: 'Smoke' }
    );

    await AutomobileInsurance.navigateToApplication();
    await AutomobileInsurance.clickAutomobileHeader();
    await AutomobileInsurance.selectMake("Audi");
    await AutomobileInsurance.enterEnginePerformance("120");
    await AutomobileInsurance.enterDateOfManufacture("07/10/2026");
    await AutomobileInsurance.selectNumberOfSeats("4");
    await AutomobileInsurance.selectFuelType("Diesel");
    await AutomobileInsurance.enterListPrice("30000");
    await AutomobileInsurance.enterLicensePlateNumber("ABC123");
    await AutomobileInsurance.enterAnnualMileage("10000");
    await AutomobileInsurance.clickNext();
    await AutomobileInsurance.verifyPageTitle("Enter Insurant Data");
});
