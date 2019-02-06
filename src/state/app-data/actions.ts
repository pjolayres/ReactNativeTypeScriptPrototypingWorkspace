import { SET_VERSION, SetVersionAction } from './types';

export const setVersion = (version: string): SetVersionAction => ({
  type: SET_VERSION,
  version
});
