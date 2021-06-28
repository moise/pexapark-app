import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from "../reducers/farms.reducer";

export const farmsSelector = (state: State) => state;


export const getFarmsList = createSelector(farmsSelector, (state) => state.farms);

const selector = (selectorFn: <T>(state: State) => T) => createSelector(farmsSelector, selectorFn);

export const allFarms = selector((state: any) => state.farms);