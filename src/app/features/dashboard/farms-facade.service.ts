import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {fetchFarms} from "../../state/actions/farms.actions";
import {Farm} from "../../models/types";
import {Observable} from "rxjs";
import {AppState} from "../../state/reducers/farms.reducer";
import * as fromSelectors from "../../state/selectors/farms.selectors";

@Injectable({
	providedIn: 'root'
})
export class FarmsFacade {

	farmList$: Observable<Farm[]> = this.store.select<Farm[]>( fromSelectors.allFarms );

	constructor(
			private store: Store<AppState>
	) {
	}

	getFarms() {
		this.store.dispatch(fetchFarms())
	}
}
