// helpers
import { IRoute } from '../interfaces/common';

// pages
import MainPage from '../pages/MainPage';
import SofasPage from '../pages/SofasPage';
import ShopsPage from '../pages/ShopsPage';
import NewSofaPage from '../pages/NewSofaPage';
import SofaInfoPage from '../pages/SofaInfoPage';
import MattressesPage from '../pages/MattressesPage';
import MattressInfoPage from '../pages/MattressInfoPage';
import NewMattressPage from '../pages/NewMattressPage';

export enum RoutesEnum {
  Main = '/',
  Sofas = 'sofas',
  Shops = 'shops',
  NewShop = 'shops/new',
  NewSofa = 'sofas/new',
  Mattresses = 'mattresses',
  NewMattress = 'mattresses/new',
}

const routes: IRoute[] = [
  { path: RoutesEnum.Main, component: MainPage, title: 'Main' },
  { path: RoutesEnum.Shops, component: ShopsPage, title: 'Shops' },
  { path: RoutesEnum.Sofas, component: SofasPage, title: 'Sofas' },
  { path: RoutesEnum.NewSofa, component: NewSofaPage, title: 'NewSofa' },
  { path: RoutesEnum.Mattresses, component: MattressesPage, title: 'Mattresses' },
  { path: RoutesEnum.NewMattress, component: NewMattressPage, title: 'NewMattress' },
  { path: `${RoutesEnum.Sofas}/:id`, component: SofaInfoPage, title: 'SofaInfo' },
  { path: `${RoutesEnum.Mattresses}/:id`, component: MattressInfoPage, title: 'MattressInfo' },
];

export { routes };
