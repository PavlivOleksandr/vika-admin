import { ActionType } from '../actions/mattresses';
import { IReduxAction } from '../../interfaces/redux';
import { MattressModel, SimpleProductModel } from '../../interfaces/products';

export interface StateModel {
  // mattress: MattressModel | null;
  mattresses: SimpleProductModel[] | [];
}

const initialState: StateModel = {
  // mattress: null,
  mattresses: [],
};

const mattresses = (state: StateModel = initialState, action: IReduxAction) => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_MATTRESSES: {
      return { ...state, mattresses: payload };
    }
    default:
      return state;
  }
};

export default mattresses;
