import { combineReducers } from 'redux';

import userReducer, { StateModel as UserStateModel } from './user';
import sofasReducer, { StateModel as SofasStateModel } from './sofas';
import mattressesReducer, { StateModel as MattressesStateModel } from './mattresses';

export interface StateModel {
  userReducer: UserStateModel;
  sofasReducer: SofasStateModel;
  mattressesReducer: MattressesStateModel;
}

export const root = combineReducers({
  userReducer,
  sofasReducer,
  mattressesReducer,
});
