import {test, expect} from "@playwright/test";
import BasicCalculator from "../pageObject/pages/BasicCalculator";

test.describe("Basic Calculator Tests", async () => {

    let Calculator: BasicCalculator;

    test.beforeEach(async ({page}) => {
        await page.goto("/");

        Calculator = new BasicCalculator(page);

        await Calculator.fullResetValues();
        await expect(Calculator.elements.resultDisplay).toHaveValue("");
    });

    test("Test Case 1: Clear Entry Data Test", async ({page}) => {

        await Calculator.calculate({
            value: ["2", "2"],
            action: ["plus"],
            isCalculate: true
        });

        await Calculator.pressOnTheAction("plus");
        await Calculator.pressOnTheDigit("1");
        await Calculator.clearLastEntry();

        await Calculator.calculate({
            value: ["2"],
            action: ["plus"],
            isCalculate: true
        });

        await expect(Calculator.elements.resultDisplay).toHaveValue("6");
    });

    test("Test Case 2: Clear All Data Test", async ({page}) => {

        await Calculator.calculate({
            value: ["2", "2"],
            action: ["plus"],
            isCalculate: true
        });

        await Calculator.pressOnTheAction("plus");
        await Calculator.pressOnTheDigit("1");
        await Calculator.fullResetValues();

        await Calculator.pressOnTheDigit("2");

        await expect(Calculator.elements.resultDisplay).not.toHaveValue("6");
        await expect(Calculator.elements.resultDisplay).toHaveValue("2");
    });

    test("Test Case 3: Sum Test", async ({page}) => {

        await Calculator.calculate({
            value: ["2", "2"],
            action: ["plus"],
            isCalculate: true
        });

        await expect(Calculator.elements.resultDisplay).toHaveValue("4");
    });

    test("Test Case 4: Subtract Test", async ({page}) => {

        await Calculator.calculate({
            value: ["2", "2"],
            action: ["minus"],
            isCalculate: true
        });

        await expect(Calculator.elements.resultDisplay).toHaveValue("0");
    });

    test("Test Case 5: Multiply Test", async ({page}) => {

        await Calculator.calculate({
            value: ["2", "2"],
            action: ["multiply"],
            isCalculate: true
        });

        await expect(Calculator.elements.resultDisplay).toHaveValue("4");
    });

    test("Test Case 6: Divide Test", async ({page}) => {

        await Calculator.calculate({
            value: ["2", "2"],
            action: ["divide"],
            isCalculate: true
        });

        await expect(Calculator.elements.resultDisplay).toHaveValue("1");
    });

    test("Test Case 7: Division by Zero Test", async ({page}) => {

        await Calculator.calculate({
            value: ["2", "0"],
            action: ["divide"],
            isCalculate: true
        });

        await expect(Calculator.elements.resultDisplay).toHaveValue("Not a Number");
    });
});

