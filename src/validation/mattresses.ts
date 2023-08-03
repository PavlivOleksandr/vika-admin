import * as Yup from 'yup';
import { MattressTypeEnum } from '../interfaces/products';

export const UpdateMattressesValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Мінімум 3 символи').max(20, 'Максимум 20 символів').required(`поле "Назва" обов'язкове`),
  rating: Yup.number().min(1, 'Мінімальне значення 1').max(100, 'Максимальне значення 100').required(`поле "Рейтинг" обов'язкове`),
  images: Yup.array().of(Yup.mixed()).nullable(),
  article: Yup.string().required(`поле "Артикул" обов'язкове`),
  filling: Yup.string().required(`поле "Наповнення" обов'язкове`),
  thumbnail: Yup.mixed().nullable(),
  // type: Yup.mixed().oneOf(Object.keys(MattressTypeEnum)).required('Виберіть варіант'),
  type: Yup.string().required(`поле "Наповнення" обов'язкове`),
  isHiddenForClients: Yup.boolean().required(),
  toRemove: Yup.boolean().required(),
  description: Yup.string().min(10, 'Мінімум 10 символів').max(500, 'Максимум 500 символів').required(`поле "Опис" обов'язкове`),
  configurations: Yup.mixed(),
});

export const CreateMattressesValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Мінімум 3 символи').max(20, 'Максимум 20 символів').required(`поле "Назва" обов'язкове`),
  rating: Yup.number().min(1, 'Мінімальне значення 1').max(100, 'Максимальне значення 100').required(`поле "Рейтинг" обов'язкове`),
  images: Yup.array().of(Yup.mixed()).nullable(),
  article: Yup.string().required(`поле "Артикул" обов'язкове`),
  filling: Yup.string().required(`поле "Наповнення" обов'язкове`),
  thumbnail: Yup.mixed().nullable(),
  // type: Yup.mixed().oneOf(Object.keys(MattressTypeEnum)).required('Виберіть варіант'),
  // isHiddenForClients: Yup.boolean().required(),
  // toRemove: Yup.boolean().required(),
  type: Yup.string().required(`поле "Наповнення" обов'язкове`),
  description: Yup.string().min(10, 'Мінімум 10 символів').max(500, 'Максимум 500 символів').required(`поле "Опис" обов'язкове`),
  configurations: Yup.mixed().nullable(),
});
