import {Page} from "@playwright/test";

export function initializeDigits(page: Page) {
    return {
        0: page.getByRole("button", {name: "0", exact: true}),
        1: page.getByRole("button", {name: "1"}),
        2: page.getByRole("button", {name: "2", exact: true}),
        3: page.getByRole("button", {name: "3"}),
        4: page.getByRole("button", {name: "4"}),
        5: page.getByRole("button", {name: "5"}),
        6: page.getByRole("button", {name: "6"}),
        7: page.getByRole("button", {name: "7"}),
        8: page.getByRole("button", {name: "8"}),
        9: page.getByRole("button", {name: "9"}),
    };
}

export function initializeActions(page: Page) {
    return {
        clearAll: page.getByRole("button", {name: "AC"}),
        clearEntry: page.getByRole("button", {name: "CE"}),
        plus: page.getByRole("button", {name: "+", exact: true}),
        minus: page.getByRole("button", {name: "−"}),
        divide: page.getByRole("button", {name: "÷"}),
        multiply: page.getByRole("button", {name: "×"}),
        equal: page.getByRole("button", {name: "="}),
    };
}

export function initializeElements(page: Page) {
    return {
        resultDisplay: page.getByLabel("answer display"),
    };
}

