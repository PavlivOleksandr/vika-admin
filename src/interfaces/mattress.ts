import { BaseProductModel } from './products';
import { KidsSizeEnum, MattressTypeEnum, SizeEnum } from '../constants/mattresses';

export interface MattressConfigurationModel {
  height: number;
  pricing: { size: SizeEnum | KidsSizeEnum; price: number }[];
}

export interface MattressModel extends BaseProductModel {
  type: MattressTypeEnum;
  filling: string;
  configurations: MattressConfigurationModel[];
}
