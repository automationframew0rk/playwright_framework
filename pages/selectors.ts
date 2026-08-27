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
    lead: {
      newBtn: "//button[@title='New']",
      salutationDropdown: "//select[@name='salutation']",
      firstNameInput: "//input[@name='firstName']",
      lastNameInput: "//input[@name='lastName']",
      companyInput: "//input[@name='Company']",
      saveBtn: "//button[@title='Save']",
      verificationText: "//span[contains(text(),'Mr. John Doe') or contains(text(),'Mr.') and contains(text(),'John') and contains(text(),'Doe')]"
    },
};
