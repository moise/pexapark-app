import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import * as farmActions from "../../state/actions/farms.actions";
import {Farm, Range, Reading} from "../../models/types";
import {Observable} from "rxjs";
import {AppState} from "../../state/reducers/farms.reducer";
import * as fromSelectors from "../../state/selectors/farms.selectors";

@Injectable({
	providedIn: 'root'
})
export class FarmsFacade {

	farmList$: Observable<Farm[]> = this.store.select<Farm[]>( fromSelectors.allFarms );
	farmReadings$: Observable<Reading[]> = this.store.select<Reading[]>( fromSelectors.farmReadings );

	constructor(
			private store: Store<AppState>
	) {
	}

	getFarms() {
		this.store.dispatch(farmActions.fetchFarms())
	}

	getReadings(farmId: string, range?: Range) {
		this.store.dispatch(farmActions.fetchFarmReadings({
			farmId,
			range
		}))
	}
}
