import {createSelector} from "@ngrx/store";
import {AppState} from "../reducers/farms.reducer";
import {Farm, Reading} from "../../models/types";

export const stateSelector = (state: AppState) => state;

export const getFarmsList = createSelector(stateSelector, ( state: AppState ) => state.app.farms);

const farmsSelector = (selectorFn: (state: AppState) => Farm[]) => createSelector(stateSelector, selectorFn);
const readingsSelector = (selectorFn: (state: AppState) => Reading[]) => createSelector(stateSelector, selectorFn);

export const allFarms = farmsSelector((state: AppState) => state.app.farms);
export const farmReadings = readingsSelector((state: AppState) => state.app.readings ?? [])