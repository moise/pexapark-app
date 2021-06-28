import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FarmService} from "../../services/farm.service";
import {fetchFarms, fetchFarmsSuccess} from "../actions/farms.actions";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {EMPTY, of} from "rxjs";
import {Store} from "@ngrx/store";
import {Farm} from "../../models/types";

@Injectable()
export class FarmsEffects {

	loadFarms$ = createEffect(() => this.actions$.pipe(
			ofType(fetchFarms),
			mergeMap(() =>
					this.farmService.getFarms()
							.pipe(
									tap( res => console.log('HTTP response:', res)),
									map((farms: Farm[]) => (fetchFarmsSuccess({ farms }))),
									catchError(() => EMPTY)
							))
			), { dispatch: true, resubscribeOnError: false }
	);


	constructor(
			private actions$: Actions,
			private farmService: FarmService,
			private store: Store
	) {
	}
}
