import * as Yup from 'yup';
import { MattressTypeEnum, SofaConfigurationModel } from '../interfaces/products';
import { SizeEnum } from '../constants/mattresses';

const mattressConfigurationSchema = Yup.object()
  .shape({
    height: Yup.number().nullable().required(`Заповніть`),
    pricing: Yup.array()
      .of(
        Yup.object().shape({
          size: Yup.string<SizeEnum>().required('Size is required'),
          price: Yup.number().nullable().required(`поле 'Ціна' обов'язкове`),
        }),
      )
      .required(),
  })
  .required();

export const EditMattressConfigurationsValidationSchema = Yup.object().shape({
  type: Yup.string<MattressTypeEnum>().required(`поле обов'язкове для заповнення`),
  configurations: Yup.array().of(mattressConfigurationSchema).required(`поле обов'язкове для заповнення`),
});

const sofaConfigurationSchema = Yup.object()
  .shape({
    collapse: Yup.string().nullable().required(`Заповніть`),
    pricing: Yup.array()
      .of(
        Yup.object().shape({
          fabric: Yup.string().nullable(),
          price: Yup.number().nullable(),
        }),
      )
      .required(),
  })
  .required();

export const EditSofaConfigurationsValidationSchema = Yup.object().shape({
  configurations: Yup.array<SofaConfigurationModel>().required(`поле обов'язкове для заповнення`),
});
