import { KidsSizeEnum, SizeEnum } from '../constants/mattresses';

export enum SofaCategoryEnum {
  Bed = 'Ліжко',
  Chair = 'Крісло',
  Corner = 'Кутовий диван',
  ForKids = 'Дитячий',
  Straight = 'Прямий диван',
}

export type SofaVariantType = '7' | 'Г' | 'Універсальний';

export interface SofaConfigurationModel {
  collapse: string;
  pricing: [{ fabric?: string | null; price?: number | null }];
}

export enum MattressTypeEnum {
  ForKids = 'for children',
  ForAdults = 'for adults',
}

export interface MattressConfigurationModel {
  height: number;
  pricing: { size: SizeEnum | KidsSizeEnum; price: number }[];
}

export interface SimpleProductModel {
  _id: string;
  name: string;
  article: string;
  thumbnail: string;
}

export interface BaseProductModel extends SimpleProductModel {
  images: string[] | [];
  rating: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  isHiddenForClients: boolean;
}

export interface MattressModel extends BaseProductModel {
  type: MattressTypeEnum;
  filling: string;
  configurations: MattressConfigurationModel[];
}

export interface SofaModel extends BaseProductModel {
  isCorner: boolean;
  category: SofaCategoryEnum;
  variant: SofaVariantType;
  isCollapsible: boolean;
  isLaundryStore: boolean;
  configurations: SofaConfigurationModel[];
}
