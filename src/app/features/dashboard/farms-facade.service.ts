import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {fetchFarms} from "../../state/actions/farms.actions";
import {allFarms, getFarmsList} from "../../state/selectors/farms.selectors";
import {State} from "../../state/reducers/farms.reducer";
import {Farm} from "../../models/types";

@Injectable({
	providedIn: 'root'
})
export class FarmsFacade {

	farmList$ = this.store.select((state) => state);

	constructor(
			private store: Store
	) {
	}

	getFarms() {
		this.store.dispatch(fetchFarms())
	}
}
