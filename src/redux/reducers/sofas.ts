import { ActionType } from '../actions/sofas';
import { IReduxAction } from '../../interfaces/redux';
import { SimpleProductModel } from '../../interfaces/products';

export interface StateModel {
  sofas: SimpleProductModel[] | [];
}

const initialState: StateModel = {
  sofas: [],
};

const sofas = (state: StateModel = initialState, action: IReduxAction) => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_SOFAS: {
      return { ...state, sofas: payload };
    }
    default:
      return state;
  }
};

export default sofas;
