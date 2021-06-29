import {createAction, props} from "@ngrx/store";
import {Farm, Reading, Range} from "../../models/types";

const fetchFarmsAction = '[farms]/fetch'
const fetchFarmsSuccessAction = '[farms]/fetch/success'

const fetchFarmReadingAction = '[readings]/fetch'
const fetchFarmReadingsSuccessAction = '[readings]/fetch/success'

export const fetchFarms = createAction(
		fetchFarmsAction
);

export const fetchFarmsSuccess = createAction(
		fetchFarmsSuccessAction,
		props<{ farms: Farm[] }>()
)

export const fetchFarmReadings = createAction(
		fetchFarmReadingAction,
		props<{farmId: string, range?: Range}>()
);

export const fetchFarmReadingSuccess = createAction(
		fetchFarmReadingsSuccessAction,
		props<{ readings: Reading[] }>()
)

