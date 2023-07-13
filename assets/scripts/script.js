"use strict";
// Email Validation Regex
const emailValidationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// Forms & Submit Button
const freeTrialFormChildForms = document.querySelectorAll(".form-child");
const freeTrialFormSubmitButton = document.querySelector(".submit-button");
// Submit Button Handler
freeTrialFormSubmitButton === null || freeTrialFormSubmitButton === void 0 ? void 0 : freeTrialFormSubmitButton.addEventListener("click", () => {
    for (const freeTrialFormChildForm of freeTrialFormChildForms) {
        // Form Input Element
        const formInput = document.querySelector(`.${freeTrialFormChildForm.classList[0]} > input`);
        // Form Error Icon Element
        const formErrorIcon = document.querySelector(`.${freeTrialFormChildForm.classList[0]} > div`);
        // Form Error Message Element (error-message-empty)
        const formErrorMessageEmpty = document.querySelector(`.${freeTrialFormChildForm.classList[0]} > .error-message-empty`);
        // Form Error Message Element (element-message-email)
        const formErrorMessageEmail = document.querySelector(`.${freeTrialFormChildForm.classList[0]} > .error-message-email`);
        // Checking whether the input field empty or email input field is filled in an invalid format
        if ((formInput === null || formInput === void 0 ? void 0 : formInput.value) === "" ||
            (freeTrialFormChildForm.classList[0] === "form-email-address" &&
                (formInput === null || formInput === void 0 ? void 0 : formInput.value) !== undefined &&
                !emailValidationRegex.test(formInput.value))) {
            freeTrialFormChildForm.classList.add("invalidated");
            formInput.classList.add("invalidated");
            formInput.placeholder = "";
            formErrorIcon === null || formErrorIcon === void 0 ? void 0 : formErrorIcon.classList.add("invalidated");
        }
        // Checking whether the input field empty
        if ((formInput === null || formInput === void 0 ? void 0 : formInput.value) === "") {
            formErrorMessageEmpty === null || formErrorMessageEmpty === void 0 ? void 0 : formErrorMessageEmpty.classList.add("invalidated");
            formErrorMessageEmail === null || formErrorMessageEmail === void 0 ? void 0 : formErrorMessageEmail.classList.remove("invalidated");
        }
        // Checking whether the the email input field is filled in an invalid format
        else if (freeTrialFormChildForm.classList[0] === "form-email-address" &&
            (formInput === null || formInput === void 0 ? void 0 : formInput.value) !== undefined &&
            !emailValidationRegex.test(formInput.value)) {
            formErrorMessageEmpty === null || formErrorMessageEmpty === void 0 ? void 0 : formErrorMessageEmpty.classList.remove("invalidated");
            formErrorMessageEmail === null || formErrorMessageEmail === void 0 ? void 0 : formErrorMessageEmail.classList.add("invalidated");
        }
        // If everything is okay, remain everything as it is...
        else {
            freeTrialFormChildForm.classList.remove("invalidated");
            formInput === null || formInput === void 0 ? void 0 : formInput.classList.remove("invalidated");
            formErrorIcon === null || formErrorIcon === void 0 ? void 0 : formErrorIcon.classList.remove("invalidated");
            formErrorMessageEmpty === null || formErrorMessageEmpty === void 0 ? void 0 : formErrorMessageEmpty.classList.remove("invalidated");
            formErrorMessageEmail === null || formErrorMessageEmail === void 0 ? void 0 : formErrorMessageEmail.classList.remove("invalidated");
        }
    }
});
