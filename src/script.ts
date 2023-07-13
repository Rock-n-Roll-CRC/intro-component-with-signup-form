// Email Validation Regex
const emailValidationRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// Forms & Submit Button
const freeTrialFormChildForms: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".form-child");
const freeTrialFormSubmitButton: HTMLButtonElement | null =
  document.querySelector(".submit-button");

// Submit Button Handler
freeTrialFormSubmitButton?.addEventListener("click", () => {
  for (const freeTrialFormChildForm of freeTrialFormChildForms) {
    // Form Input Element
    const formInput: HTMLInputElement | null = document.querySelector(
      `.${freeTrialFormChildForm.classList[0]} > input`
    );
    // Form Error Icon Element
    const formErrorIcon: HTMLDivElement | null = document.querySelector(
      `.${freeTrialFormChildForm.classList[0]} > div`
    );
    // Form Error Message Element (error-message-empty)
    const formErrorMessageEmpty: HTMLParagraphElement | null =
      document.querySelector(
        `.${freeTrialFormChildForm.classList[0]} > .error-message-empty`
      );
    // Form Error Message Element (element-message-email)
    const formErrorMessageEmail: HTMLParagraphElement | null =
      document.querySelector(
        `.${freeTrialFormChildForm.classList[0]} > .error-message-email`
      );

    // Checking whether the input field empty or email input field is filled in an invalid format
    if (
      formInput?.value === "" ||
      (freeTrialFormChildForm.classList[0] === "form-email-address" &&
        formInput?.value !== undefined &&
        !emailValidationRegex.test(formInput.value))
    ) {
      freeTrialFormChildForm.classList.add("invalidated");
      formInput.classList.add("invalidated");
      formInput.placeholder = "";
      formErrorIcon?.classList.add("invalidated");
    }

    // Checking whether the input field empty
    if (formInput?.value === "") {
      formErrorMessageEmpty?.classList.add("invalidated");
      formErrorMessageEmail?.classList.remove("invalidated");
    }
    // Checking whether the the email input field is filled in an invalid format
    else if (
      freeTrialFormChildForm.classList[0] === "form-email-address" &&
      formInput?.value !== undefined &&
      !emailValidationRegex.test(formInput.value)
    ) {
      formErrorMessageEmpty?.classList.remove("invalidated");
      formErrorMessageEmail?.classList.add("invalidated");
    }
    // If everything is okay, remain everything as it is...
    else {
      freeTrialFormChildForm.classList.remove("invalidated");
      formInput?.classList.remove("invalidated");
      formErrorIcon?.classList.remove("invalidated");
      formErrorMessageEmpty?.classList.remove("invalidated");
      formErrorMessageEmail?.classList.remove("invalidated");
    }
  }
});
