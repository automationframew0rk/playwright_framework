export const selectors = {
    username: '#username',
    password: '#password',
    loginBtn: 'Login',
    applauncherIcon: '.slds-icon-waffle',
    homeLabel: "//h1//span[text()='Home']",

    home: {
        appLauncherIcon: '.slds-icon-waffle',
        viewAllBtn: "//button[normalize-space()='View All']",
        appSearchInput: "//input[@placeholder='Search apps or items...']",
        selectApp: (appName: string) => `//mark[normalize-space()='${appName}']`,
    },

    accounts: {
        newBtn: "//div[@title='New']",
        accountNameInput: "//input[@name='Name']",
        phoneInput: "//input[@name='Phone']",
        saveBtn: "//button[@name='SaveEdit']",
        verificationText: "//slot//lightning-formatted-text[@slot='primaryField']",
        searchInput: "//input[@placeholder='Search this list...']",
        accountRecordLink: (accountName: string) => `//a[@title='${accountName}']`,
        editBtn: "button[name='Edit']",
        deleteBtn: "button[name='Delete']",
        confirmDeleteBtn: "//button[.//span[normalize-space()='Delete']]",
        toastMessage: "//span[contains(@class,'toastMessage')]",
    },
    automobileInsurance: {
        automobileHeader: "//a[text()='Automobile']",
        makeDropdown: "//select[@name='Make']",
        enginePerformanceInput: "//input[@name='[kW]']",
        dateOfManufactureInput: "//input[@name='Date of Manufacture']",
        numberOfSeatsDropdown: "//select[@name='Number of Seats']",
        fuelTypeDropdown: "//select[@name='Fuel Type']",
        listPriceInput: "//input[@name='List Price']",
        licensePlateNumberInput: "//input[@name='License Plate Number']",
        annualMileageInput: "//input[@name='Annual Mileage']",
        nextButton: "//input[@name='Next (Enter Insurant Data)']"
    },
};
