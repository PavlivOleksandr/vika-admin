import { combineReducers } from 'redux';

import mattressesReducer, { StateModel as MattressesStateModel } from './mattresses';

export interface StateModel {
  mattressesReducer: MattressesStateModel;
}

export const root = combineReducers({
  mattressesReducer,
});
