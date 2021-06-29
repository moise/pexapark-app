import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Farm} from "../models/types";
import {map} from "rxjs/operators";
import {fetchFarmsSuccess} from "../state/actions/farms.actions";

@Injectable({
	providedIn: 'root'
})
export class FarmService {

	constructor(
			private httpClient: HttpClient
	) {
	}

	getFarms() {
		return this.httpClient.get<Farm[]>(`${window.location.origin}/api/farms`)
	}
}
