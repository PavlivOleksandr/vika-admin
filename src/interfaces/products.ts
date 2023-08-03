import { SizeEnum } from '../constants/mattresses';

export enum MattressTypeEnum {
  ForKids = 'for kids',
  ForAdults = 'for adults',
}

export interface MattressConfigurationModel {
  height: number;
  pricing: [{ size: SizeEnum; price: number }];
}

export interface SimpleProductModel {
  _id: string;
  name: string;
  article: string;
  thumbnail: string;
}

export interface BaseProductModel extends SimpleProductModel {
  images: string[];
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
  discount: number;
  category: string;
}

const configurations = {
  dimensions: [
    {
      height: 12,
      pricing: [
        { width: '80*200', price: 1600 },
        { width: '90*200', price: 1800 },
        { width: '120*200', price: 1800 },
        { width: '140*200', price: 1500 },
        { width: '160*200', price: 1900 },
        { width: '180*200', price: 2800 },
      ],
    },
    {
      height: 14,
      pricing: [
        { width: '80*200', price: 1700 },
        { width: '90*200', price: 1800 },
        { width: '120*200', price: 1900 },
        { width: '140*200', price: 2100 },
        { width: '160*200', price: 2400 },
        { width: '180*200', price: 27600 },
      ],
    },
  ],
};
