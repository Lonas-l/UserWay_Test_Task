import {Page} from "@playwright/test";
import {actionsLocators, calculateTypes, digitsLocators, elementsLocators} from "./interface";
import {initializeActions, initializeDigits, initializeElements} from "./locatorInitializationUtils";

export default class BasicCalculator {
    readonly page: Page;
    readonly elements: elementsLocators;
    readonly digits: digitsLocators;
    readonly calcAction: actionsLocators;

    constructor(page: Page) {
        this.page = page;
        this.digits = initializeDigits(page);
        this.calcAction = initializeActions(page);
        this.elements = initializeElements(page);
    }

    async pressOnTheDigit(name) {
        await this.digits[name].click();
    }

    async pressOnTheAction(action) {
        await this.calcAction[action].click();
    }

    async fullResetValues() {
        if (await this.calcAction.clearEntry.isVisible()) await this.clearLastEntry();
        if (await this.calcAction.clearAll.isVisible()) await this.calcAction.clearAll.click();
    }

    async clearLastEntry() {
        if (await this.calcAction.clearEntry.isVisible()) await this.calcAction.clearEntry.click();
    }

    async calculate({value, action, isCalculate}: calculateTypes) {
        for (let i: number = 0; i < value.length; i++) {
            await this.pressOnTheDigit(value[i]);
            if (action[0].length > 1) {
                await this.pressOnTheAction(action[i] ? action[i] : action[0]);
            }
        }

        if (isCalculate) await this.calcAction.equal.click();
    }
}
