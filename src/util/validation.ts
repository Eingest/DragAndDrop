namespace App {
  export interface Validatable {
    value: string | number;
    required?: boolean;
    // checks the length of the string:
    minLength?: number;
    maxLength?: number;
    // checks the value of the number:
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validatable) {
    let isValid = true;
    // if required === true:
    if (validatableInput.required) {
      // if (typeof validatableInput.value === "string")
      isValid =
        isValid && validatableInput.value.toString().trim().length !== 0;
    }
    // if minLength is set:
    if (
      // "!= null" is the same as null AND undefined
      validatableInput.minLength != null &&
      typeof validatableInput.value === "string"
    ) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    // if maxLength is set:
    if (
      validatableInput.maxLength != null &&
      typeof validatableInput.value === "string"
    ) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    // if min is set:
    if (
      validatableInput.min != null &&
      typeof validatableInput.value === "number"
    ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    // if max is set:
    if (
      validatableInput.max != null &&
      typeof validatableInput.value === "number"
    ) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
  }
}
