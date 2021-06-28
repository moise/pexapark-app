import {
	Action,
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector, createReducer,
	createSelector,
	MetaReducer, on
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {Farm} from "../../models/types";
import * as farmsActions from '../actions/farms.actions';

export interface State {
	farms: Farm[]
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
		on(farmsActions.fetchFarmsSuccess, (state, {farms}) => ({...state, farms}))
		// on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
);

export function reducer(state: State | undefined, action: Action) {
	return farmReducer(state, action);
}