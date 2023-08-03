import { mattressesAPI } from '../../api/mattresses/mattressesAPI';
import { SimpleProductModel } from '../../interfaces/products';

export enum ActionType {
  SET_MATTRESSES = 'matresses/SET_MATTRESSES',
}

export const mattresses = {
  setMattresses: (mattresses: SimpleProductModel[]) => ({
    type: ActionType.SET_MATTRESSES,
    payload: mattresses,
  }),

  getMattresses: (search: string) => async (dispatch: any) => {
    const response = await mattressesAPI.getAll(search);

    if (response) {
      dispatch(mattresses.setMattresses(response));
    }
  },
};
