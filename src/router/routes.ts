// helpers
import { IRoute } from '../interfaces/common';

// pages
import MainPage from '../pages/MainPage';
import SofasPage from '../pages/SofasPage';
import LogInPage from '../pages/LogInPage';
import ShopsPage from '../pages/ShopsPage';
import NewSofaPage from '../pages/NewSofaPage';
import SofaInfoPage from '../pages/SofaInfoPage';
import MattressesPage from '../pages/MattressesPage';
import NewMattressPage from '../pages/NewMattressPage';
import MattressInfoPage from '../pages/MattressInfoPage';
import MessagesPage from '../pages/MessagesPage';

export enum RoutesEnum {
  Main = '/',
  Shops = 'shops',
  Sofas = '/sofas',
  LogIn = '/login',
  NewSofa = 'sofas/new',
  NewShop = 'shops/new',
  Messages = '/messages',
  Mattresses = '/mattresses',
  NewMattress = 'mattresses/new',
}

const routes: IRoute[] = [
  { path: RoutesEnum.Main, component: MainPage, title: 'Main' },
  { path: RoutesEnum.Shops, component: ShopsPage, title: 'Shops' },
  { path: RoutesEnum.Sofas, component: SofasPage, title: 'Sofas' },
  { path: RoutesEnum.LogIn, component: LogInPage, title: 'LogIn' },
  { path: RoutesEnum.NewSofa, component: NewSofaPage, title: 'NewSofa' },
  { path: RoutesEnum.Messages, component: MessagesPage, title: 'Messages' },
  { path: RoutesEnum.Mattresses, component: MattressesPage, title: 'Mattresses' },
  { path: RoutesEnum.NewMattress, component: NewMattressPage, title: 'NewMattress' },
  { path: `${RoutesEnum.Sofas}/:id`, component: SofaInfoPage, title: 'SofaInfo' },
  { path: `${RoutesEnum.Mattresses}/:id`, component: MattressInfoPage, title: 'MattressInfo' },
];

export { routes };
