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
      automobileHeader: "text=Automobile",
      makeDropdown: "#make",
      enginePerformanceInput: "#engineperformance",
      dateOfManufactureInput: "#dateofmanufacture",
      numberOfSeatsDropdown: "#numberofseats",
      fuelTypeDropdown: "#fuel",
      listPriceInput: "#listprice",
      licensePlateNumberInput: "#licenseplatenumber",
      annualMileageInput: "#annualmileage",
      nextButton: "#nextenterinsurantdata"
    },
    lead: {
      newBtn: "//button[@name='New']",
      salutationDropdown: "//label[text()='Salutation']/following::button[1]",
      salutationOption: (salutation: string) => `//lightning-base-combobox-item[@data-value='${salutation}']`,
      firstNameInput: "//input[@name='firstName']",
      lastNameInput: "//input[@name='lastName']",
      companyInput: "//input[@name='Company']",
      saveBtn: "//button[@name='SaveEdit']",
      verificationText: (fullName: string) => `//span[text()='${fullName}']`
    },
};
