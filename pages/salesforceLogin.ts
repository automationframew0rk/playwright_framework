import { BrowserContext, Page } from "@playwright/test";
import { PlaywrightWrapper } from "../helpers/playwright";
import { credentials } from "../constants/credentialData";
import { expect } from "@playwright/test";
import { URLConstants } from "../constants/urlConstants";
import { selectors } from "./selectors";

export class SalesforceLoginPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async salesforceLogin(role: keyof typeof credentials) {

        const { username, password } = credentials[role];

        await this.loadApp(URLConstants.adminURL)
        const pageTitle = await this.page.title();
        if (pageTitle.startsWith("Login")) {
            await this.type(selectors.username, "Username", username);
            await this.type(selectors.password, "password", password);
            await this.interactWithElement('ID', selectors.loginBtn,'click');
            await this.wait("maxWait")
            await this.validateElementVisibility(selectors.applauncherIcon, "App Launcher");
        } else {
            console.log("Already logged in - using existing session");
        }
    }


    public async verifyHomeLabel() {
        await this.validateElementVisibility(selectors.homeLabel, "Home");
        let home = await this.getInnerText(selectors.homeLabel);
        expect(home).toEqual("Home");
    }



















}
