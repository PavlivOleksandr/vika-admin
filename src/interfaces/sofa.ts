import { BaseProductModel } from './products';
import { SofaCategoryEnum } from '../constants/sofa';

export type SofaVariantType = '7' | 'Г' | 'Універсальний';

export interface SofaConfigurationModel {
  collapse: string;
  pricing: [{ fabric?: string | null; price?: number | null }];
}

export interface SofaModel extends BaseProductModel {
  isCorner: boolean;
  category: SofaCategoryEnum;
  variant: SofaVariantType;
  isCollapsible: boolean;
  isLaundryStore: boolean;
  configurations: SofaConfigurationModel[];
}
