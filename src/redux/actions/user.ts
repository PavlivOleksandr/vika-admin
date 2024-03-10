import { userAPI } from '../../api/user/userAPI';

export enum ActionType {
  SET_USER = 'user/SET_USER',
}

export const user = {
  setUser: (user: { email: string; role: string } | null) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),

  getUser: (email: string) => async (dispatch: any) => {
    const token = await userAPI.login(email);

    if (token) {
      dispatch(user.setUser({ email: 'mpavliv74@urk.net', role: 'Адміністратор' }));
    }
  },
};
