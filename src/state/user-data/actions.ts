import { SET_NAME, SetNameAction } from './types';

export const setName = (name: string): SetNameAction => ({
  type: SET_NAME,
  name
});
