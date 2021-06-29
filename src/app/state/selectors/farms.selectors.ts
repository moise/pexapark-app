import {createSelector} from "@ngrx/store";
import {AppState} from "../reducers/farms.reducer";
import {Farm} from "../../models/types";

export const farmsSelector = (state: AppState) => state;


export const getFarmsList = createSelector(farmsSelector, ( state: AppState ) => state.app.farms);

const selector = (selectorFn: (state: AppState) => Farm[]) => createSelector(farmsSelector, selectorFn);

export const allFarms = selector((state: AppState) => state.app.farms);