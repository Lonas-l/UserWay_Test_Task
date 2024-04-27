import {Locator} from "@playwright/test";

export interface elementsLocators {
    resultDisplay: Locator;
}

export interface digitsLocators {
    0: Locator;
    1: Locator;
    2: Locator;
    3: Locator;
    4: Locator;
    5: Locator;
    6: Locator;
    7: Locator;
    8: Locator;
    9: Locator;
}

export interface actionsLocators {
    clearAll: Locator;
    clearEntry: Locator;
    plus: Locator;
    minus: Locator;
    divide: Locator;
    multiply: Locator;
    equal: Locator;
}

export interface calculateTypes {
    value: ("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0") [];
    action: ("clearAll" | "clearEntry" | "plus" | "minus" | "divide" | "multiply" | "equal") [];
    isCalculate?: boolean;
}