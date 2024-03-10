/* eslint-disable */
import * as Yup from 'yup';

export const LogInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Емейл не валідний!').required('Email is required!'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Пароль повинен містити 8 або більше символів включаючи: великий регістр, малий регістр, цифру та спеціальний символ',
    )
    .required('Пароль обовязковий!'),
});
