import * as Yup from 'yup';

export const SofasValidationSchema = Yup.object().shape({
  name: Yup.string().trim().min(3, 'Мінімум 3 символи').max(30, 'Максимум 30 символів').required(`поле "Назва" обов'язкове`),
  price: Yup.number().required(`поле "Ціна" обов'язкове`),
  description: Yup.string().min(10, 'Мінімум 10 символів').required(`поле "Опис" обов'язкове`),
});
