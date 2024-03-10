import { ActionType } from '../actions/user';
import { IReduxAction } from '../../interfaces/redux';

export interface StateModel {
  user: { email: string; role: string } | null;
}

const initialState: StateModel = {
  // user: { email: 'test', role: 'admin' },
  user: null,
};

const user = (state: StateModel = initialState, action: IReduxAction) => {
  const { payload, type } = action;

  switch (type) {
    case ActionType.SET_USER: {
      return { ...state, user: payload };
    }
    default:
      return state;
  }
};

export default user;
