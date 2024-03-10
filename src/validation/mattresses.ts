import * as Yup from 'yup';
import { MattressConfigurationModel } from '../interfaces/mattress';

export const UpdateMattressesValidationSchema = Yup.object().shape({
  _id: Yup.string().required(),
  name: Yup.string().min(3, 'Мінімум 3 символи').max(20, 'Максимум 20 символів').required(`поле "Назва" обов'язкове`),
  type: Yup.string().required(`поле "Тип" обов'язкове`),
  rating: Yup.number().min(1, 'Мінімальне значення 1').max(100, 'Максимальне значення 100').required(`поле "Рейтинг" обов'язкове`),
  images: Yup.array().of(Yup.string().required('')).required(''),
  article: Yup.string().required(`поле "Артикул" обов'язкове`),
  filling: Yup.string().required(`поле "Наповнення" обов'язкове`),
  createdAt: Yup.string().required(`поле "Створено" обов'язкове`),
  updatedAt: Yup.string().required(`поле "Оновлено" обов'язкове`),
  thumbnail: Yup.string(),
  imagesToUpdate: Yup.array(),
  isHiddenForClients: Yup.boolean().required(),
  toRemove: Yup.boolean().required(),
  description: Yup.string().min(10, 'Мінімум 10 символів').max(500, 'Максимум 500 символів').required(`поле "Опис" обов'язкове`),
  configurations: Yup.array().of(Yup.mixed<MattressConfigurationModel>().required('')).required('Потрібно додати конфігурації'),
});

export const CreateMattressesValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Мінімум 3 символи').max(20, 'Максимум 20 символів').required(`поле "Назва" обов'язкове`),
  type: Yup.string().required(`поле "Наповнення" обов'язкове`),
  rating: Yup.number().min(1, 'Мінімальне значення 1').max(100, 'Максимальне значення 100').required(`поле "Рейтинг" обов'язкове`),
  images: Yup.array().of(Yup.mixed()).nullable(),
  article: Yup.string().required(`поле "Артикул" обов'язкове`),
  filling: Yup.string().required(`поле "Наповнення" обов'язкове`),
  thumbnail: Yup.mixed().nullable(),
  description: Yup.string().min(10, 'Мінімум 10 символів').max(500, 'Максимум 500 символів').required(`поле "Опис" обов'язкове`),
  configurations: Yup.array().of(Yup.mixed<MattressConfigurationModel>().required('')).required('Потрібно додати конфігурації'),
  isHiddenForClients: Yup.boolean().required(),
});
