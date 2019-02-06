export const SET_VERSION = 'SET_VERSION';

interface SetVersionAction {
    type: typeof SET_VERSION;
    version: string
}

export type AppDataActionTypes = SetVersionAction;

export interface AppDataState {
    version: string
}
