import {createAction, props} from "@ngrx/store";
import {Farm} from "../../models/types";

const fetchAction = '[farms]/fetch'
const fetchSuccessAction = '[farms]/fetch/success'

export const fetchFarms = createAction(
		fetchAction
);

export const fetchFarmsSuccess = createAction(
		fetchSuccessAction,
		props<{ farms: Farm[] }>()
)