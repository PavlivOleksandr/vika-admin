import { sofasAPI } from '../../api/sofas/sofasAPI';
import { SimpleProductModel } from '../../interfaces/products';

export enum ActionType {
  SET_SOFAS = 'sofas/SET_SOFAS',
}

export const sofas = {
  setSofas: (sofas: SimpleProductModel[]) => ({
    type: ActionType.SET_SOFAS,
    payload: sofas,
  }),

  getSofas: (search: string) => async (dispatch: any) => {
    const response = await sofasAPI.getAll(search);

    if (response) {
      dispatch(sofas.setSofas(response));
    }
  },
};
