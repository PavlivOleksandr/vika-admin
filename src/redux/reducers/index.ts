import { combineReducers } from 'redux';

import sofasReducer, { StateModel as SofasStateModel } from './sofas';
import mattressesReducer, { StateModel as MattressesStateModel } from './mattresses';

export interface StateModel {
  sofasReducer: SofasStateModel;
  mattressesReducer: MattressesStateModel;
}

export const root = combineReducers({
  sofasReducer,
  mattressesReducer,
});
