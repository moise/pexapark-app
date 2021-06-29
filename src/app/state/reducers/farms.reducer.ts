import {Action, createReducer, on} from '@ngrx/store';
import {Farm, Reading} from "../../models/types";
import * as farmsActions from '../actions/farms.actions';

export interface State {
	farms: Farm[];
	readings?: Reading[];
}

export interface AppState {
	app: State
}

export const initialState: State = {
	farms: []
};

// export const reducers: ActionReducerMap<State> = {
//   farms
// };
//
//
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const farmReducer = createReducer(
		initialState,
		on(farmsActions.fetchFarmsSuccess, (state, {farms}) => ({...state, farms})),
		on(farmsActions.fetchFarmReadingSuccess, (state, {readings}) => ({...state, readings}))
);

export function reducer(state: State | undefined, action: Action) {
	return farmReducer(state, action);
}