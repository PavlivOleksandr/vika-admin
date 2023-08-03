export interface IReduxAction<T = any> {
  key: string;
  type: string;
  payload: T;
}
