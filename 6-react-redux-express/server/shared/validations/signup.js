import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is requeired';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is requeired';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is requeired';
    }

    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is requeired';
    }

    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}