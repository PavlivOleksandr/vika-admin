import * as Yup from 'yup';
import { SofaCategoryEnum, SofaConfigurationModel, SofaVariantType } from '../interfaces/products';

export const UpdateSofaValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Мінімум 3 символи').max(20, 'Максимум 20 символів').required(`поле "Назва" обов'язкове`),
  isLaundryStore: Yup.boolean().required(`поле "Ніша для білизни" обов'язкове`),
  rating: Yup.number().min(1, 'Мінімальне значення 1').max(100, 'Максимальне значення 100').required(`поле "Рейтинг" обов'язкове`),
  images: Yup.array().of(Yup.string().required('')).required(''),
  article: Yup.string().required(`поле "Артикул" обов'язкове`),
  category: Yup.string<SofaCategoryEnum>().required(`поле "Категорія" обов'язкове`),
  variant: Yup.string<SofaVariantType>().required(`поле "Варіант" обов'язкове`),
  createdAt: Yup.string().required(`поле "Створено" обов'язкове`),
  updatedAt: Yup.string().required(`поле "Оновлено" обов'язкове`),
  thumbnail: Yup.string(),
  isHiddenForClients: Yup.boolean().required(),
  toRemove: Yup.boolean().required(),
  description: Yup.string().min(10, 'Мінімум 10 символів').max(500, 'Максимум 500 символів').required(`поле "Опис" обов'язкове`),
  configurations: Yup.array().of(Yup.mixed<SofaConfigurationModel>().required('')).required('Потрібно додати конфігурації'),
});

export const CreateSofaValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Мінімум 3 символи').max(20, 'Максимум 20 символів').required(`поле "Назва" обов'язкове`),
  isLaundryStore: Yup.boolean().required(`поле "Ніша для білизни" обов'язкове`),
  rating: Yup.number().min(1, 'Мінімальне значення 1').max(100, 'Максимальне значення 100').required(`поле "Рейтинг" обов'язкове`),
  images: Yup.array().of(Yup.string()).nullable(),
  article: Yup.string().required(`поле "Артикул" обов'язкове`),
  category: Yup.string<SofaCategoryEnum>().required(`поле "Категорія" обов'язкове`),
  variant: Yup.string<SofaVariantType>().required(`поле "Варіант" обов'язкове`),
  thumbnail: Yup.string().nullable(),
  isHiddenForClients: Yup.boolean().required(),
  description: Yup.string().min(10, 'Мінімум 10 символів').max(500, 'Максимум 500 символів').required(`поле "Опис" обов'язкове`),
  configurations: Yup.array().of(Yup.mixed<SofaConfigurationModel>().required('')).required('Потрібно додати конфігурації'),
});
