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
    "lead": {
  "appLauncherBtn": "//button[@title='App Launcher']",
  "appSearchInput": "//input[@placeholder='Search apps and items...']",
  "appName": "(name) => `//p[@class='slds-truncate' and text()='${name}']`",
  "newBtn": "//div[@title='New']",
  "salutationDropdown": "//label[text()='Salutation']/following::div[contains(@class,'select')]",
  "salutationOption": "(salutation) => `//lightning-base-combobox-item[@data-value='${salutation}']`",
  "firstNameInput": "//input[@placeholder='First Name']",
  "lastNameInput": "//input[@placeholder='Last Name']",
  "companyInput": "//input[@placeholder='Company']",
  "saveBtn": "//button[@title='Save']",
  "leadName": "(fullName) => `//span[text()='${fullName}']"
},
};
