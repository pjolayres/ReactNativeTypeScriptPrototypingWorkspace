import { SET_NAME } from './types';

export const setName = (name: string) => ({
  type: SET_NAME,
  name
});
