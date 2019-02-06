import { SET_VERSION } from './types';

export const setVersion = (version: string) => ({
  type: SET_VERSION,
  version
});
